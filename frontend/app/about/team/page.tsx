'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import API from '@/app/services/api';

export default function TeamSection() {
    const [teamMembers, setTeamMembers] = useState<any[]>([]);
    const [selectedMember, setSelectedMember] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    
    // কভার ছবির জন্য স্টেট
    const [coverImage, setCoverImage] = useState('/team/cover.jpg');

    const fetchTeamMembers = async () => {
        try {
            const response = await API.get('/team');
            const members = response.data;
            setTeamMembers(members);

            // যদি ডাটাবেজে মেম্বার থাকে এবং তাদের কারো মধ্যে কভার ফটো সেভ করা থাকে, তবে প্রথম পাওয়া কভার ফটোটি সেট হবে
            if (members.length > 0) {
                const memberWithCover = members.find((m: any) => m.cover && m.cover.trim() !== '');
                if (memberWithCover) {
                    setCoverImage(memberWithCover.cover);
                }
            }
        } catch (error) {
            console.error('Failed to fetch team members:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTeamMembers();
    }, []);

    return (
        <div className="bg-[#FAF9F6] min-h-screen">
            
            {/* ================= HERO COVER SECTION ================= */}
            <section className="relative w-full pt-10 pb-16 px-6 md:px-12 overflow-hidden">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-200/30 blur-[120px] rounded-full pointer-events-none -z-10" />

                <div className="max-w-7xl mx-auto space-y-10">
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-[#D97706] text-xs md:text-sm font-semibold tracking-wide px-4 py-1.5 rounded-full border border-amber-200/80">
                            <span className="w-2 h-2 rounded-full bg-[#D97706] animate-pulse" />
                            Our Greatest Strength is Our People
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
                            Driven by Vision, United for <span className="text-[#D97706]">Real Impact</span>
                        </h1>
                        <p className="text-gray-600 text-base md:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
                            Meet the dedicated changemakers, educators, and leaders behind CLCE Bangladesh who are transforming communities at the grassroots level.
                        </p>
                    </div>

                    {/* Premium Dynamic Cover Image Card */}
                    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[580px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-900 group">
                        <Image
                            src={coverImage}
                            alt="CLCE Bangladesh Team Cover"
                            fill
                            priority
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

                        <div className="absolute top-6 right-6 hidden sm:flex items-center gap-3 bg-white/20 backdrop-blur-md border border-white/30 text-white px-5 py-2.5 rounded-2xl shadow-lg">
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                            <span className="text-xs md:text-sm font-semibold tracking-wide">
                                Active Leadership Team
                            </span>
                        </div>

                        <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div className="max-w-2xl space-y-2 bg-black/40 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10">
                                <span className="text-xs font-bold uppercase text-amber-400 tracking-widest">
                                    Grassroots Leadership
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                                    Empowering Communities Across Bangladesh
                                </h2>
                                <p className="text-xs sm:text-sm text-gray-200 font-light leading-relaxed">
                                    Together, our coordinators and volunteers work tirelessly across districts to bring sustainable social development and educational access.
                                </p>
                            </div>

                            <div className="shrink-0">
                                <Link
                                    href="/get-involved"
                                    className="inline-flex items-center gap-2 bg-[#D97706] hover:bg-[#b86404] text-white font-semibold text-sm md:text-base px-6 py-3.5 rounded-xl shadow-lg hover:shadow-amber-600/30 transition-all duration-300"
                                >
                                    <span>Join Our Mission</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= TEAM MEMBERS GRID SECTION ================= */}
            <section className="py-16 md:py-8 px-6 md:px-12 border-t border-gray-200/60">
                <div className="max-w-7xl mx-auto">
                    
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-[#D97706] text-xs md:text-sm font-bold tracking-widest uppercase bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200/60 inline-block mb-3">
                            Our Core Team
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                            Meet the Dedicated Minds Behind <span className="text-[#D97706]">CLCE</span>
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base mt-4 font-normal leading-relaxed">
                            Our executive leadership is committed to driving positive social change, fostering education, and empowering communities across Bangladesh.
                        </p>
                    </div>

                    {loading ? (
                        <div className="text-center py-20 text-gray-500 text-sm font-medium">
                            Loading team members...
                        </div>
                    ) : teamMembers.length === 0 ? (
                        <div className="text-center py-20 text-gray-400 text-sm">
                            No team members published yet.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {teamMembers.map((member: any) => (
                                <div
                                    key={member.id}
                                    className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between relative"
                                >
                                    {/* Position Badge */}
                                    <span className="absolute top-3 left-3 z-10 bg-black/60 backdrop-blur-md text-amber-400 text-xs font-extrabold px-2.5 py-1 rounded-lg border border-white/10 shadow">
                                        #{member.order || 1}
                                    </span>

                                    <div>
                                        {/* Member Image */}
                                        <div className="relative w-full h-72 bg-gray-100 overflow-hidden">
                                            <Image
                                                src={member.image || '/team/member1.jpg'}
                                                alt={member.name}
                                                fill
                                                className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>

                                        {/* Content Info */}
                                        <div className="p-6">
                                            <span className="text-xs font-semibold text-[#D97706] tracking-wider uppercase">
                                                {member.role}
                                            </span>
                                            <h3 className="text-xl font-bold text-gray-900 mt-1 group-hover:text-[#D97706] transition-colors">
                                                {member.name}
                                            </h3>
                                            <p className="text-xs text-gray-600 mt-2.5 leading-relaxed line-clamp-3">
                                                {member.shortBio}
                                            </p>

                                            {/* Read Bio Button */}
                                            <button
                                                onClick={() => setSelectedMember(member)}
                                                className="mt-4 text-xs font-bold text-[#D97706] hover:text-[#b86404] inline-flex items-center gap-1 group/btn transition-colors"
                                            >
                                                <span>Read Bio</span>
                                                <svg className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Social Links Dynamic Footer */}
                                    <div className="px-6 pb-6 pt-2 border-t border-gray-50 flex items-center gap-2.5">
                                        {member.facebook && (
                                            <Link href={member.facebook} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-200">
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                                            </Link>
                                        )}
                                        {member.linkedin && (
                                            <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all duration-200">
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                                            </Link>
                                        )}
                                        {member.instagram && (
                                            <Link href={member.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-all duration-200">
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                            </Link>
                                        )}
                                        {member.website && (
                                            <Link href={member.website} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-[#D97706] hover:text-white transition-all duration-200">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                                            </Link>
                                        )}
                                        {member.email && (
                                            <Link href={`mailto:${member.email}`} className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all duration-200">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </section>


            {/* ================= MEMBER BIO DETAILS MODAL ================= */}
            {selectedMember && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
                    onClick={() => setSelectedMember(null)}
                >
                    <div 
                        className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-100 relative animate-scaleUp"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedMember(null)}
                            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors z-10"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start">
                            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shrink-0 bg-gray-100 border-2 border-amber-100">
                                <Image
                                    src={selectedMember.image || '/team/member1.jpg'}
                                    alt={selectedMember.name}
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>

                            <div className="space-y-3 flex-1">
                                <div>
                                    <span className="text-xs font-bold text-[#D97706] tracking-wider uppercase bg-amber-50 px-2.5 py-1 rounded-md border border-amber-100">
                                        {selectedMember.role}
                                    </span>
                                    <h3 className="text-2xl font-bold text-gray-900 mt-2">
                                        {selectedMember.name}
                                    </h3>
                                    {selectedMember.education && (
                                        <p className="text-xs text-gray-500 mt-0.5 font-medium">
                                            🎓 {selectedMember.education}
                                        </p>
                                    )}
                                </div>

                                <div className="border-t border-gray-100 pt-3">
                                    <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-1">
                                        Biography
                                    </h4>
                                    <p className="text-sm text-gray-600 leading-relaxed max-h-48 overflow-y-auto pr-1">
                                        {selectedMember.fullBio || selectedMember.shortBio}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}