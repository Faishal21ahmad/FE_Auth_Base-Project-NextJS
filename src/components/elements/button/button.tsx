'use client';
import React from "react";

interface buttonProps {
    id?: string,
    type?: "button" | "submit" | "reset";
    color?: "blue" | "red" | "green" | "gray" | "yellow" | "none" | "stone";
    fullWidth?: boolean;
    padding?: string; 
    className?: string;
    children: React.ReactNode;
    disabled?: boolean;
}

const colorClasses: Record<string, string> = {
    blue: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    red: "text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800",
    green: "text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
    gray: "text-white bg-gray-700 hover:bg-gray-800 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-700",
    yellow: "text-gray-900 bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-800",
    none: "p-10 text-gray-900 hover:bg-gray-100 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600",
    stone: "text-stone-100 bg-stone-400 hover:bg-stone-500 focus:ring-stone-300 dark:bg-stone-500 dark:hover:bg-stone-600 dark:focus:ring-stone-800"
};

export default function button(props: buttonProps) {
    const {
        id = 'btn',
        type = "button",
        color = "blue",
        fullWidth = false,
        padding = "px-4 py-2",
        className = "",
        children,
        disabled
    } = props

    const baseClasses =
        "focus:outline-none font-medium rounded-lg text-sm text-center transition-colors hover:cursor-pointer";

    return (
        <>
            <button
                id={id}
                type={type}
                className={`
        ${baseClasses}
        ${colorClasses[color]}
        ${padding}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
                disabled={disabled}
            >
                {children}
            </button>
        </>
    )
}