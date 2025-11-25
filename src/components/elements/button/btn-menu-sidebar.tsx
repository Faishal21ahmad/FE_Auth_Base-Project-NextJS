'use client';
import React from 'react'

interface BtnMenuProps {
    onToggle: () => void;
}

export default function BtnMenu({ onToggle }: BtnMenuProps) {
    return (
        <button 
            onClick={onToggle} 
            className='hover:bg-stone-200  dark:hover:bg-stone-900 cursor-pointer md:hidden'
        >
            <p className="px-4 py-3 text-black dark:text-white text-3xl font-semibold">≡</p>
        </button>
    )
}