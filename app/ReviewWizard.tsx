"use client";
import React from 'react'
import SelectRepo from './wizard/SelectRepo'
import { WizardStep } from './types/ModuleTypes'
import SelectPullRequest from './wizard/SelectPullRequest'
import WizardWrapper from './common/WizardWrapper'
import { useStore } from './store/Store'
const steps: Array<WizardStep> = [
    {
        name: 'Select Repository',
        component: <SelectRepo />,
        next: 'Select Pull Request',
        finish: false
    },
    {
        name: 'Select Pull Request',
        component: <SelectPullRequest />,
        finish: true
    }
]
export default function ReviewWizard() {
    const settings = useStore((state) => state.settings);
    return (
        <div className={`m-2 mt-14 bg-dark-secondary rounded p-2 transition-all duration-300
         flex-1 flex-wrap justify-between ${settings ? "flex" : ""}`}>
            <WizardWrapper steps={steps} />
        </div>
    )
}
