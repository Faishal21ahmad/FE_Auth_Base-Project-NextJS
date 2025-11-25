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
        className = "text-blue-400 hover:font-semibold",
        to = "/",
    } = props

    return (
        <Link href={to} className={className}> {children} </Link>
    )
}