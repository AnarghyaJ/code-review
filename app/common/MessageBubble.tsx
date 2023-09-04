"use client";

import { useAutoAnimate } from '@formkit/auto-animate/react';
import React, { useEffect } from 'react';
import Icon from './Icon';

export default function MessageBubble({ error, info, dismissable, duration, onClose }:
    { error?: string, info?: string, dismissable?: boolean, duration?: number, onClose?: () => void }) {
    const [close, setClose] = React.useState(false)
    const [parent, enableAnimations] = useAutoAnimate<HTMLDivElement>();
    const closeMessage = () => {
        setClose(true)
        onClose && onClose()
    }

    if (duration) {
        useEffect(() => {
            setTimeout(() => {
                setClose(true)
            }, duration);
        }, [])
    }

    return (
        close ? <></> :
            error ? <div ref={parent} className='bg-error-color p-4 m-4 rounded flex absolute top-0 left-0 right-0 ml-auto mr-auto w-max transition-all duration-200'>
                <span className="text-dark-secondary">{error}</span>
                <Icon name='clear' pathFill='var(--dark-surface)' className='ml-2 scale-75 cursor-pointer' onClick={closeMessage} />
            </div>
                : info ? <div ref={parent} className='bg-dark-on-surface p-4 rounded m-4
                 flex absolute top-0 left-0 right-0 ml-auto mr-auto transition-all duration-200 w-max'>
                    <span className="text-dark-secondary">{info}</span>
                    <Icon name='clear' pathFill='var(--dark-surface)' className='ml-2 scale-75' onClick={closeMessage} />
                </div>
                    : <></>
    )
}
