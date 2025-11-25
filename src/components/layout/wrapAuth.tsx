'use client';
import React from "react";
interface wrapProps {
    children: React.ReactNode;
}

export default function wrapAuth(props: wrapProps) {
    const { children } = props

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black ">
            <div className="flex min-h-screen w-[90%] md:w-[50%] lg:w-[40%]  flex-col items-center justify-center sm:items-start">
                {children}
            </div>
        </div>
    )
}