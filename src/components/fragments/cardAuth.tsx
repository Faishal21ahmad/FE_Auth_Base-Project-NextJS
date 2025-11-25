'use client';
import React from "react";

interface cardAuthProps {
    children: React.ReactNode;
}

export default function cardAuth(props: cardAuthProps) {
    const { children } = props

    return (
        <main className="w-full py-6 px-4 text-center border border-stone-300/50 dark:border-stone-800/50 rounded-md shadow-md shadow-stone-300 dark:shadow-stone-900/50">
            {children}
        </main>
    )
}



