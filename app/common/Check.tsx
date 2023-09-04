"use client";
import Image from 'next/image';
import React from 'react'
import Tooltip from './Tooltip';
import Icon from './Icon';
type CheckProps = {
    style?: string;
    tooltip?: string;
    onClick: () => void;
};

export default function Check(props: CheckProps) {
    const { style, tooltip, onClick } = props
    const check: React.ReactElement =
        <div className={`flex items-center hover:cursor-pointer active:scale-150 ${style}`}>
            <Icon name='check' onClick={onClick} />
        </div>
    return (
        tooltip ?
            <Tooltip content={tooltip} position="left">
                {check}
            </Tooltip> :
            check
    )
}
