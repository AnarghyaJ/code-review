import Image from 'next/image';
import React from 'react'
import Tooltip from './Tooltip';
type CheckProps = {
    style?: string;
    tooltip?: string;
    onClick: () => void;
};

export default function Check(props: CheckProps) {
    const { style, tooltip, onClick } = props
    const check: React.ReactElement =
        <div className={`flex items-center active:scale-150 ${style}`}><Image src='/check.svg'
            alt='Check'
            width={20}
            height={20}
            onClick={() => onClick()}
        />
        </div>
    return (
        tooltip ?
            <Tooltip content={tooltip} position="left">
                {check}
            </Tooltip> :
            check
    )
}
