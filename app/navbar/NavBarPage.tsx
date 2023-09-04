"use client";
import React, { useEffect } from 'react'
import { useStore } from '../../store/Store';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import Icon from '../common/Icon';
import { page } from '../../types/ModuleTypes';

export default function NavBarPage({ index, page }: { index: number, page: page }) {
    const selectedPage = useStore(state => state.selectedPage)
    const router = useRouter();
    const handlePageClick = async (selected: string) => {
        useStore.setState({ selectedPage: selected });
    }

    React.useEffect(() => {
        router.push(selectedPage);
    }, [selectedPage]);

    return (
        <div key={index} className={`p-3 cursor-pointer rounded-lg transition-colors
        duration-150 hover:bg-secondary-accent ${selectedPage === page && 'bg-secondary-accent'}`}
            onClick={() => handlePageClick(page)}>
            <Icon name={page} />
        </div>
    )
}
