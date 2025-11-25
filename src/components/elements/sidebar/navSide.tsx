'use client';
import Link from "next/link";

interface NavSideProps {
    children?: React.ReactNode;
    to?: string;
    className?: string;
}

export default function NavSide(props: NavSideProps) {
    const {
        children,
        to = "#",
        className = "block w-full p-2 hover:bg-stone-400 hover: hover:dark:bg-stone-800 rounded-md"
    } = props

    return (
        <>
            <Link href={to} className={className}>{children}</Link>
        </>
    )
}