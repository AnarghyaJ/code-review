"use client";
import React, { use, useEffect } from 'react'
import Image from 'next/image';
import { InputProps } from '../../types/ModuleTypes';
import Icon from './Icon';


export default function Input(props: InputProps) {
    const { style, value, onChange, label, type, clearable, readOnly, required } = props
    const [error, setError] = React.useState<string>('')
    useEffect(() => {
        if (required && value === '' || !value) {
            setError('Mandatory field')
        } else {
            setError('')
        }
    }, [value])

    return (
        <div>
            {required && <span className={`text-error-color ${error === '' ? '' : "bg-[#5c2723]"}
             flex min-h-[2rem] rounded-md text-center justify-center mb-1`}>{error === '' ? <></> : error}</span>}
            <label> {label}
                <input
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    readOnly={readOnly}
                    className={`text-input px-2 m-2 rounded-sm text-dark-surface w-60 ${style}`}
                />
                {clearable && <div className="inline-block active:scale-150 ml-3 cursor-pointer align-middle">
                    <Icon name='delete' onClick={() => onChange('')}
                    />
                </div>}
            </label>
        </div>
    )
}
