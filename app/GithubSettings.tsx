"use client";
import React, { useEffect } from 'react'
import Check from './common/Check'
import Input from './common/Input'
import { useStore } from './store/Store';
import { Constants } from './utils/Constants'

export default function GithubSettings({ close }: { close: () => void }) {
    const [token, setToken] = React.useState<string>('')
    const [readOnly, setReadOnly] = React.useState<boolean>(false)

    const saveToken = async () => {
        setReadOnly(true)
        useStore.setState({ token: token })
        useStore.setState({ settings: false });
        close()
    }

    return (
        <span className='flex px-2 w-full font-semibold items-center justify-center hover:bg-dark-accent-highlight transition-colors duration-200 pt-8 pb-8 rounded'>
            <Input onChange={(e) => {
                setReadOnly(false)
                setToken(e)
            }}
                value={token}
                type="password"
                label="Github Access Token"
                clearable={true}
                readOnly={readOnly}
            />
            <Check onClick={saveToken} style="ml-4" />
        </span>
    )
}
