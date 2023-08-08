"use client";
import React from 'react'
import { Wizard } from 'react-use-wizard';
import { AnimatePresence } from 'framer-motion';
import { WizardStep } from '../../types/ModuleTypes';
import Image from 'next/image';

export default function WizardWrapper({ steps }: { steps: Array<WizardStep> }): JSX.Element {
    return (
        <Wizard
            header={<WizardHeader steps={steps} />}
            wrapper={<AnimatePresence initial={false} mode='wait' />}>
            {steps.map((step: WizardStep) => {
                return <div key={step.name}>
                    {step.component}
                </div>
            })}
        </Wizard>
    )
}

function WizardHeader({ steps }: { steps: Array<WizardStep> }) {
    return (
        <div className='flex flex-row'>
            {steps.map((step: WizardStep) => {
                return <div key={step.name} className='bg-dark-accent h-fit hover:bg-dark-accent-highlight p-4 rounded ml-2 gap-2 font-semi-bold flex w-[30rem] text-center'>
                    <Image key={step.name} src="/checkbox-non.svg" alt="Completed" width={20} height={20} />
                    {`${step.name}`}
                </div>
            })}
        </div>
    )
}
