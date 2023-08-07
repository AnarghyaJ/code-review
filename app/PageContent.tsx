"use client";
import React from 'react'
import { useStore } from '../store/Store';
import { useRouter } from 'next/navigation';
export default function PageContent() {
  const page: string = useStore(state => state.selectedPage);
  const mapping: { [key: string]: string } = {
    'Home': 'home',
    'SettingUp': 'docs/settingUp',
    'Reviews': 'ReviewsWizard',
  }
  const router = useRouter();
  React.useEffect(() => {
    router.push(mapping[page]);
  }, [page]);

  return (<></>)
}
