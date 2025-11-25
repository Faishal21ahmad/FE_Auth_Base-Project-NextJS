'use client';
import React, { useState } from "react";
import SideBar from "../elements/sidebar/sidebar";
import Header from "../elements/header/header";

interface wrapProps {
    children?: React.ReactNode;
    titlePage?: string;
}

export default function wrapDashboard(props: wrapProps) {
    const { children, titlePage = "Dashboard" } = props;
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            {/* sidebar */}
            <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} />

            {/* header */}
            <Header onToggleSidebar={toggleSidebar}>
                <h1>{titlePage}</h1>
            </Header>

            {/* content */}
            <div className=" ml-0 md:ml-72 pt-15 z-10 ">
                <div className="p-4 ">
                    {children}
                </div>
            </div>
        </>
    )
}
