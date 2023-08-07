"use client";
import React, { useEffect } from 'react'
import { useStore } from '../../store/Store';
import Image from 'next/image'
export default function NavBarPage({ index, page }: { index: number, page: string }) {
    const selectedPage = useStore(state => state.selectedPage)
    const handlePageClick = async (selected: string) => {
        useStore.setState({ selectedPage: selected });
    }
    return (
        <div key={index} className={`p-3 cursor-pointer rounded-lg transition-colors
        duration-150 hover:bg-[#5d5475] ${selectedPage === page && 'bg-[#5d5475]'}`}
            onClick={() => handlePageClick(page)}>
            <Image src={`/${page}.svg`}
                alt={page}
                width={20}
                height={20}
                sizes='100vw'
            />
        </div>
    )
}
