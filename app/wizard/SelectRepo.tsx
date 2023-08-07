"use client";
import React from 'react'
import { Octokit, App } from "octokit";
import { Constants } from '../../utils/Constants';
import UserDetails from '../repos/UserDetails';
import { useStore } from '../../store/Store';
import Repositories from '../repos/Repositories';
import { useWizard } from 'react-use-wizard';

export default function SelectRepo() {
    const [user, setUser] = React.useState<string>('')
    const [repositories, setRepositories] = React.useState<any>([])
    const [error, setError] = React.useState<string>('');
    const [loading, setLoading] = React.useState<boolean>(false);
    const token = useStore((state) => state.token);
    
    React.useEffect(() => {
        getDetails();
    }, [])

    const getDetails = async () => {
        setLoading(true);
        try {
            if (!token || token === '') {
                setError('Please set a valid token!');
                return;
            }
            const octokit = new Octokit({ auth: token });
            const authResponse = await octokit.rest.users.getAuthenticated();
            if (authResponse.status !== 200) {
                setError('Invalid token');
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
            setError('Please Check if the the token is set and is valid!')
        }
        setLoading(false);
    }

    return (
        <div className="">
            {error && <span className="text-error-color">{error}</span>}
            {user.length > 0 && <UserDetails user={user} />}
            {/* <Repositories repositories={repositories} /> */}
        </div>
    )
}
