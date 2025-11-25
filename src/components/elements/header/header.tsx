'use client';
import BtnMenu from "../button/btn-menu-sidebar";
import ThemeSwitcher from "../theme/themeSwitch";
import React, { useContext } from "react";
import { useUser } from "@/contexts/UserDataContext";

interface HeaderProps {
    children?: React.ReactNode;
    onToggleSidebar: () => void;
}

export default function Header(props: HeaderProps) {
    const { children, onToggleSidebar } = props;
    const { user } = useUser();

    return (
        <div id="header" className="w-full h-15 ml-0 md:ml-72 z-30 items-center align-middle bg-zinc-50 dark:bg-stone-950 border-b border-zinc-100 dark:border-stone-950 flex fixed">
            <BtnMenu onToggle={onToggleSidebar} />
            <div className="flex justify-between w-full px-4">

                {children}
                {/* <ThemeSwitcher /> */}
                <p>Hai. {user?.name}</p>
            </div>
        </div>
    )
}