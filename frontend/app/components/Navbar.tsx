'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Programs', href: '/programs' },
        { name: 'Impact', href: '/impact' },
        { name: 'Stories', href: '/stories' },
        { name: 'Get Involved', href: '/get-involved' },
    ];

    return (
        <header className="bg-[#FAF9F6] border-b border-gray-200 py-4 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                <Link href="/" className="flex items-center gap-3">
                    <div className="relative w-10 h-10">
                        <Image
                            src="/logo.png"
                            alt="CLCE Bangladesh Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-900 tracking-tight leading-none">
                            Empowerment
                        </h1>
                        <p className="text-xs text-gray-600 mt-1 font-medium">
                            CLCE Bangladesh
                        </p>
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`transition-colors font-medium pb-1 ${
                                    isActive
                                        ? 'text-gray-900 font-semibold border-b-2 border-gray-900'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="md:hidden flex items-center">
                    <button className="text-gray-700 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

            </div>
        </header>
    );
}
