import React from 'react'

export default function UserDetails({ user }: { user: string }) {
    return (
        <div>
            <span>{`Welcome ${user}!`}</span>
        </div>
    )
}
