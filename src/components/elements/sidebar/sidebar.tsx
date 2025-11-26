'use client';
import { useEffect, useRef } from "react";
import { useRouter } from 'next/navigation';
import NavSide from "./navSide";
import { removeToken } from '@/lib/utils/cookies';
import { useUser } from "@/contexts/UserDataContext";
import next from "next";

interface SideBarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SideBar({ isOpen, onClose }: SideBarProps) {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const { user } = useUser();


    // Handle click outside sidebar
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        // Handle escape key
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const handleLogout = async () => {
        // pastikan cookie benar-benar terhapus
        await removeToken();

        // tutup sidebar dulu biar tidak conflict
        onClose();

        // pakai replace agar tidak bisa back ke halaman lama
        router.replace('/');

        // fallback (untuk jaga-jaga di production)
        setTimeout(() => {
            router.refresh();
        }, 50);
    };


    return (
        <>
            {/* Overlay - hanya muncul di mobile */}
            <div
                id="overlay-sidebar"
                className={`h-screen w-screen bg-stone-300/50 dark:bg-stone-800/50 fixed z-40 top-0 backdrop-blur-xs transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 block' : 'opacity-0 hidden'
                    }`}
                onClick={onClose}
            />

            {/* Sidebar */}
            <div
                id="sidebar"
                ref={sidebarRef}
                className={`w-72 h-screen px-2 text-black dark:text-zinc-50 bg-zinc-50 dark:bg-stone-950 z-40 fixed border-r border-zinc-100 dark:border-stone-950 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0 md:block`}
            >
                <div className="py-8 w-full items-center text-center">
                    <h1 className="font-semibold text-2xl">Apps</h1>
                </div>
                <hr className="border border-stone-800" />
                <div className="flex flex-col py-4 ">
                    <NavSide to="dashboard" >Dashboard</NavSide>
                    <NavSide to="user" >Users</NavSide>
                </div>
                <hr className="border border-stone-800 " />
                <div className="flex flex-col py-4">
                    <NavSide to="profile" >Profile</NavSide>

                    <NavSide to="#" >Settings</NavSide>
                    <button type="button" onClick={handleLogout} className="text-left  w-full p-2 hover:bg-stone-400 hover: hover:dark:bg-stone-800 rounded-md cursor-pointer">Logout</button>
                </div>

                <div className="fixed z-50 bottom-0 left-0 p-2 w-full">
                    <div className="p-2 w-full bg-zinc-50 dark:bg-stone-900 border border-zinc-200 dark:border-stone-700 text-black dark:text-zinc-100 rounded-md shadow-md">
                        <p>{user?.name}</p>
                        <p>{user?.email}</p>
                    </div>
                </div>
            </div>
        </>
    )
}