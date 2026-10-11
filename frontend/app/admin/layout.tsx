'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="min-h-screen bg-[#F4F5F7] flex text-gray-900 font-sans">
            
            {/* ================= SIDEBAR ================= */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                
                {/* Brand Logo Header */}
                <div className="h-20 flex items-center px-6 border-b border-gray-100 gap-3">
                    <div className="relative w-10 h-10 shrink-0">
                        <Image src="/logo.png" alt="Logo" fill className="object-contain" priority />
                    </div>
                    <div>
                        <h1 className="text-base font-bold text-gray-900 leading-tight">CLCE Admin</h1>
                        <p className="text-xs text-gray-500">Management Panel</p>
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="p-4 space-y-1.5">
                    <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-amber-50 hover:text-[#D97706] font-medium text-sm transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                        <span>Dashboard</span>
                    </Link>

                    <Link href="/admin/team" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-amber-50 hover:text-[#D97706] font-medium text-sm transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                        <span>Manage Team</span>
                    </Link>

                    <Link href="/admin/mission-vision" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-amber-50 hover:text-[#D97706] font-medium text-sm transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                        <span>Mission - Vision</span>
                    </Link>

                    <Link href="/admin/stories" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-amber-50 hover:text-[#D97706] font-medium text-sm transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                        <span>Stories & Impact</span>
                    </Link>
                </nav>

                {/* Exit / Home Footer */}
                <div className="absolute bottom-0 w-full p-4 border-t border-gray-100">
                    <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 font-medium text-sm transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                        <span>Exit Admin</span>
                    </Link>
                </div>

            </aside>


            {/* ================= MAIN CONTENT AREA ================= */}
            <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
                
                {/* Top Header */}
                <header className="h-20 bg-white border-b border-gray-200 px-6 md:px-10 flex items-center justify-between sticky top-0 z-40">
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="md:hidden p-2 rounded-lg bg-gray-100 text-gray-600 hover:text-gray-900"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </button>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900">Admin Control Panel</h2>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-bold text-gray-900">Admin User</p>
                            <p className="text-xs text-gray-500">Super Administrator</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-amber-100 text-[#D97706] font-bold flex items-center justify-center border-2 border-white shadow-md">
                            AU
                        </div>
                    </div>
                </header>

                {/* Dynamic Page Content */}
                <main className="p-6 md:p-10 flex-1">
                    {children}
                </main>

            </div>

        </div>
    );
}