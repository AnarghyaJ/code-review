import React from 'react'

export default function UserDetails({ user }: { user: string }) {
    return (
        <div className='p-4 font-semibold'>
            <span>{`Welcome ${user}!`}</span>
        </div>
    )
}
