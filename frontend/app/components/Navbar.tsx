'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        { 
            name: 'About Us', 
            href: '#',
            hasDropdown: true,
            dropdownItems: [
                { name: 'About Us', href: '/about', desc: 'Learn more about CLCE' },
                { name: 'Our Mission & Vision', href: '/about/mission-vision', desc: 'Our core goals & beliefs' },
                { name: 'Our Team', href: '/about/team', desc: 'Meet our dedicated team' },
            ]
        },
        { name: 'Programs', href: '/programs' },
        { name: 'Impact', href: '/impact' },
        { name: 'Stories', href: '/stories' },
        { name: 'Get Involved', href: '/get-involved' },
    ];

    return (
        <header className="bg-[#FAF9F6] border-b border-gray-200 py-4 px-6 md:px-12 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Logo & Brand Name */}
                <Link href="/" className="flex items-center gap-3.5 group">
                    <div className="relative w-12 h-12 shrink-0">
                        <Image
                            src="/logo.png"
                            alt="CLCE Bangladesh Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight leading-none group-hover:text-[#D97706] transition-colors">
                            Empowerment
                        </h1>
                        <p className="text-xs md:text-sm text-gray-600 mt-1 font-medium">
                            CLCE Bangladesh
                        </p>
                    </div>
                </Link>

                {/* Desktop Nav Links */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (link.hasDropdown && pathname.startsWith('/about'));

                        if (link.hasDropdown) {
                            return (
                                <div 
                                    key={link.name}
                                    className="relative group py-2"
                                >
                                    {/* Main Button / Link */}
                                    <button
                                        type="button"
                                        className={`transition-colors font-medium pb-1 flex items-center gap-1.5 cursor-pointer ${
                                            isActive
                                                ? 'text-gray-900 font-semibold border-b-2 border-[#D97706]'
                                                : 'text-gray-600 group-hover:text-gray-900'
                                        }`}
                                    >
                                        <span>{link.name}</span>
                                        <svg 
                                            className="w-4 h-4 text-gray-500 transition-transform duration-300 group-hover:rotate-180 group-hover:text-[#D97706]" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </button>

                                    {/* Standard Modern Dropdown Container */}
                                    <div className="absolute left-0 top-full pt-3 w-64 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
                                        <div className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-2xl rounded-2xl p-2 ring-1 ring-black/5">
                                            {link.dropdownItems.map((subItem) => {
                                                const isSubActive = pathname === subItem.href;

                                                return (
                                                    <Link
                                                        key={subItem.href}
                                                        href={subItem.href}
                                                        className={`group/item flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                                                            isSubActive 
                                                                ? 'bg-amber-50 text-[#D97706]' 
                                                                : 'hover:bg-gray-50 text-gray-700 hover:text-gray-900'
                                                        }`}
                                                    >
                                                        <div className="flex flex-col">
                                                            <span className="text-sm font-semibold transition-transform duration-200 group-hover/item:translate-x-1">
                                                                {subItem.name}
                                                            </span>
                                                            {subItem.desc && (
                                                                <span className="text-[11px] text-gray-400 group-hover/item:text-gray-500 mt-0.5">
                                                                    {subItem.desc}
                                                                </span>
                                                            )}
                                                        </div>

                                                        {/* Small Indicator Arrow */}
                                                        <svg 
                                                            className={`w-4 h-4 opacity-0 -translate-x-2 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0 ${
                                                                isSubActive ? 'text-[#D97706] opacity-100 translate-x-0' : 'text-gray-400'
                                                            }`} 
                                                            fill="none" 
                                                            stroke="currentColor" 
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                        </svg>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`transition-colors font-medium pb-1 ${
                                    isActive
                                        ? 'text-gray-900 font-semibold border-b-2 border-[#D97706]'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button 
                        aria-label="Toggle Menu"
                        className="text-gray-700 hover:text-gray-900 focus:outline-none p-1"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

            </div>
        </header>
    );
}