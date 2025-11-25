'use client';
import React from "react";

interface wrapProps {
    children?: React.ReactNode;
}

export default function wrapApp(props: wrapProps) {
    const { children } = props

    return (
        <div className="flex min-h-screen items-center justify-center bg-white font-sans  dark:bg-black">
            <div className="flex mt-20 min-h-screen w-[90%] flex-col items-center justify-between  sm:items-start">
                {children}
            </div>
        </div>
    )
}