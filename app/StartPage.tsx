import React from 'react'

export default function StartPage() {
  return (
    <>
      <div
        className="inline-block rounded-md bg-dark-accent mt-40 ml-10 p-6">
        <h5
          className="mb-2 text-2xl font-semibold font-roboto leading-tight">
          Code Review
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 font-roboto">
          A tool that helps you to review code faster. <br />
          Integrates with Github using user's access token. <br />
          Uses LLM to review code and provide suggestions.
        </p>
        <button
          type="button"
          className="relative rounded cursor-pointer bg-dark-primary px-6 pb-2 pt-2.5 font-semibold leading-normal text-dark-surface"
        >
          Start
        </button>
      </div>
      <div
        className="inline-block rounded-md bg-dark-accent mt-40 ml-10 p-6">
        <h5
          className="mb-2 text-2xl font-semibold font-roboto leading-tight">
          Setting up
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 font-roboto">
          Read more about setting up tokens and Repository<br />
        </p>
        <button
          type="button"
          className="relative rounded cursor-pointer bg-dark-primary px-6 pb-2 pt-2.5 font-semibold leading-normal z-10000 text-dark-surface"
        >
          Details
        </button>
      </div>
    </>
  )
}
