"use client";
import Image from 'next/image'
import React, { useCallback } from 'react'

export default function UserDefinedPrompt() {
    const [name, setName] = React.useState('')
    const addItem = useCallback(() => {
        setName(name => name + 'a')
    }, [])

    return (
        <div>
            <label> Custom Prompts
                <button onClick={addItem}>
                    <Image src='/add.svg'
                        alt='Add'
                        width={25}
                        height={25}
                    />
                </button>
            </label>
        </div>
    )
}
