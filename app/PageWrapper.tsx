"use client";
import React from 'react'
import { motion } from 'framer-motion'
export default function PageWrapper({ children, classsName }: { children: React.ReactNode, classsName?: string }) {
    return (
        <motion.div className='w-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.3 }}>
            {children}
        </motion.div>
    )
}
