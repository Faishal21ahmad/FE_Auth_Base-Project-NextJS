'use client';
import Link from "next/link";
import React from "react";

interface linkProps {
    children?: React.ReactNode;
    className?: string,
    to?: string,
}
export default function link(props: linkProps) {
    const {
        children = "Link",
        className = "py-5 px-3 hover:bg-gray-500/50 hover:text-white ",
        to = "/",
    } = props

    return (
        <Link href={to} className={className}> {children} </Link>
    )
}