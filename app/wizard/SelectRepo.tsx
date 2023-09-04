"use client";
import { Octokit } from "octokit";
import React from 'react';
import { useStore } from '../../store/Store';
import Loader from '../common/Loader';
import Repositories from '../repos/Repositories';
import UserDetails from '../repos/UserDetails';
export default function SelectRepo() {
    const [user, setUser] = React.useState<string>('')
    const [repositories, setRepositories] = React.useState<any>([])
    const [loading, setLoading] = React.useState<boolean>(false);
    const token = useStore((state) => state.token);
    const { error } = useStore()
    React.useEffect(() => {
        getDetails();
    }, [token])

    const getDetails = async () => {
        setLoading(true);
        useStore.setState({ error: null });
        try {
            if (!token || token === '') {
                useStore.setState({ error: 'Please set a valid token!' })
                setLoading(false);
                return;
            }
            const octokit = new Octokit({ auth: token });
            const authResponse = await octokit.rest.users.getAuthenticated();
            if (authResponse.status !== 200) {
                useStore.setState({ error: 'Invalid Token!' })
                return;
            }
            setUser(authResponse.data.login);
            const repositories = await octokit.rest.repos.listForAuthenticatedUser();
            if (repositories?.data) {
                const repos = repositories.data.map((repo: any) => {
                    return {
                        name: repo.name,
                        description: repo.description,
                        url: repo.html_url,
                        visibility: repo.private ? 'Private' : 'Public',
                        owner: repo.owner.login
                    }
                })
                setRepositories(repos)
            }
        } catch (error) {
            console.error(error);
            useStore.setState({ error: 'Invalid Token!' })
        }
        setLoading(false);
    }

    return (
        <div className="">
            {loading && <Loader />}
            {user.length > 0 && <UserDetails user={user} />}
            {error ? <></> : <Repositories repositories={repositories} />}
        </div>
    )
}
