"use client";

import React from 'react'
import { useStore } from '../../store/Store';
import PageWrapper from '../PageWrapper';
export default function Page() {
    return (
        <PageWrapper>
            <div className='flex ml-10'>
                <div
                    className="inline-block z-10 h-60 rounded bg-dark-accent mt-40 hover:bg-dark-accent-highlight transition-colors duration-200 ml-10 p-6">
                    <h5
                        className="mb-2 text-2xl font-semibold font-roboto leading-tight">
                        Code Review
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 font-roboto">
                        A tool that helps you to review code faster. <br />
                        Integrates with Github using user&apos;s access token. <br />
                        Uses LLM to review code and provide suggestions.
                    </p>
                    <button
                        type="button"
                        onClick={() => {
                            useStore.setState({ selectedPage: 'new' })
                        }}
                        className="relative active:scale-125 transition-transform rounded cursor-pointer bg-dark-primary px-6 pb-2 pt-2.5 font-semibold leading-normal text-dark-surface"
                    >
                        Start
                    </button>
                </div>
                <div
                    className="inline-block z-10 h-60 rounded bg-dark-accent hover:bg-dark-accent-highlight transition-colors duration-200 mt-40 ml-10 p-6">
                    <h5
                        className="mb-2 text-2xl font-semibold font-roboto leading-tight">
                        Setting up
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 font-roboto">
                        Read more about setting up tokens and Repository<br />
                    </p>
                    <button
                        type="button"
                        onClick={() => {
                            useStore.setState({ selectedPage: 'docs/settingup' })
                        }}
                        className="relative active:scale-125 transition-transform rounded cursor-pointer bg-dark-primary px-6 pb-2 pt-2.5 font-semibold leading-normal z-10000 text-dark-surface"
                    >
                        Details
                    </button>
                </div>
            </div>
        </PageWrapper>
    )
}
