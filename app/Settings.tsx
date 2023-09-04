"use client";
import React, { useRef, useCallback, useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import Image from 'next/image'
import GithubSettings from './GithubSettings';
import { useStore } from '../store/Store';
import UserDefinedPrompt from './UserDefinedPrompt';
import autoAnimate from '@formkit/auto-animate';
import Icon from './common/Icon';
export default function Settings(prop: any) {
    const [click, setClicked] = useState<string>('opacity-0');
    const component = useRef(null);
    const handleClick = () => {
        useStore.setState({ settings: !useStore.getState().settings });
        setClicked((click) => click === 'opacity-0' ? 'animate-slide-in opacity-100' :
            click === 'animate-slide-out opacity-0' ? 'animate-slide-in opacity-100' : 'animate-slide-out opacity-0');
    }

    useEffect(() => {
        component.current && autoAnimate(component.current)
    }, [component])

    const handleOutsideClick = (e: any) => {
        useStore.setState({ settings: false });
        if (e.target.className === 'left-block') {
            closeSettings();
        }
    }

    const closeSettings = useCallback(() => {
        setClicked(click => click !== 'opacity-0' ? 'animate-slide-out opacity-0' : 'opacity-0');
    }, []);

    return (
        <>
            <div className='settings active:scale-125 duration 500' onClick={handleClick}>
                <Icon name='settings' className='scale-150' />
            </div>
            <CSSTransition classNames='settings-panel' in={click !== 'none'} timeout={200}>
                <div className={`h-full w-full absolute top-0 left-0 flex overflow-hidden`}>
                    <div className="left-block" onClick={handleOutsideClick}></div>
                    <div className={`h-auto mt-14 shadow-sm flex-1 shadow-gray-600 bg-dark-secondary rounded
                ${click}`}>
                        <div className='w-full '>
                            <form className='flex flex-col mt-16'>
                                <GithubSettings close={closeSettings} />
                                {/* <UserDefinedPrompt /> */}
                            </form>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </>
    )
}
