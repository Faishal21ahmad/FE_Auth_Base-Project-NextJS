"use client"

import React from "react";
import { useState, useEffect } from 'react';
import Link from "@/src/components/elements/navbar/linkNavbar";
import Link2 from "next/link";
import { checkToken } from '@/lib/utils/cookies';

interface NavbarProps {
    children?: React.ReactNode;
}

export default function NavbarApp(props: NavbarProps) {
    const { children } = props
    const [isLogin, setIsLogin] = useState<boolean | null>(null);

    useEffect(() => {
        const status = checkToken();
        setIsLogin(status);
    }, []);

    return (
        <div className="flex w-full p-4 z-20 fixed bg-zinc-50 dark:bg-stone-950  items-center justify-center shadow-sm dark:shadow-gray-900/50">
            <div className="flex w-[90%] items-center justify-between sm:items-start">
                <Link2 href="/">
                    <h1>Apps</h1>
                </Link2>
                <div className="">
                    {!isLogin && (
                        <Link to="/auth/login">Login</Link>
                    )}
                    {isLogin && (
                        <>
                            <Link to="/dashboard">Dashboard</Link>
                            <Link to="/profile">Profile</Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}