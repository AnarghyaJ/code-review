"use client";
import { AnimatePresence } from 'framer-motion';
import { Wizard } from 'react-use-wizard';
import { useStore } from '../../store/Store';
import { WizardStep } from '../../types/ModuleTypes';
import Icon from './Icon';
import MessageBubble from './MessageBubble';

export default function WizardWrapper({ steps }: { steps: Array<WizardStep> }): JSX.Element {
    const { error, token } = useStore();
    return (
        error && !token ? <MessageBubble error={error} onClose={() => useStore.setState({ error: null })} /> : <Wizard
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
        <div className='flex flex-row w-full h-full'>
            {steps.map((step: WizardStep) => {
                return <div key={step.name} className='bg-dark-accent h-fit hover:bg-dark-accent-highlight p-4 
                rounded ml-2 gap-2 font-semi-bold flex  grow text-center'>
                    <Icon name="checkbox-non" pathFill='var(--primary-accent)' />
                    {`${step.name}`}
                </div>
            })}
        </div>
    )
}
