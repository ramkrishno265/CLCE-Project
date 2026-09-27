import Image from 'next/image';

export default function ProgramsPage() {
    return (
        <div className="min-h-screen bg-[#FAF9F6] text-gray-900 antialiased selection:bg-[#D97706] selection:text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-20 md:space-y-28">

                {/* =========================================================================
            1. HERO SECTION & DIRECT NAVIGATION
        ========================================================================= */}
                <section className="pt-4 md:pt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">

                        {/* Left Content (Span 2) */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="inline-flex items-center gap-2 bg-[#E6F0EC] text-[#2D5A4C] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
                                <span className="w-2 h-2 rounded-full bg-[#2D5A4C] animate-pulse"></span>
                                Programs & Initiatives
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
                                Sustainable Change. <br />
                                <span className="text-[#D97706]">Built from the Ground Up.</span>
                            </h1>

                            <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
                                Community-steered, evidence-backed programs designed for long-term sovereignty,
                                economic self-reliance, and enduring civic empowerment across Bangladesh.
                            </p>

                            {/* Badges / Quick Metrics */}
                            <div className="flex flex-wrap items-center gap-3 pt-3">
                                <div className="bg-white px-4 py-2.5 rounded-2xl text-xs font-semibold text-gray-700 border border-gray-200/80 shadow-sm flex items-center gap-2">
                                    <span className="text-sm">⭐</span> 4 Core Focus Areas
                                </div>
                                <div className="bg-white px-4 py-2.5 rounded-2xl text-xs font-semibold text-gray-700 border border-gray-200/80 shadow-sm flex items-center gap-2">
                                    <span className="text-sm">🛡️</span> 100% Community Governed
                                </div>
                                <div className="bg-white px-4 py-2.5 rounded-2xl text-xs font-semibold text-gray-700 border border-gray-200/80 shadow-sm flex items-center gap-2">
                                    <span className="text-sm">⏳</span> 36-Month Self-Sufficiency Exit Model
                                </div>
                            </div>
                        </div>

                        {/* Right Quick Navigation Box (Span 1) */}
                        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-200/90 space-y-5">
                            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                    Direct Navigation
                                </h2>
                                <span className="text-gray-400 font-mono text-sm">↗</span>
                            </div>

                            <ul className="space-y-2 text-sm font-medium text-gray-800">
                                {[
                                    { id: 'statutory-education', label: '01. Statutory Education' },
                                    { id: 'economic-guilds', label: '02. Economic Guilds' },
                                    { id: 'community-circles', label: '03. Community Circles' },
                                    { id: 'youth-assemblies', label: '04. Youth & Women Assemblies' },
                                ].map((item) => (
                                    <li key={item.id}>
                                        <a
                                            href={`#${item.id}`}
                                            className="group flex items-center justify-between py-2 px-3 rounded-xl hover:bg-gray-50 hover:text-[#D97706] transition-all duration-200"
                                        >
                                            <span>{item.label}</span>
                                            <span className="text-gray-400 group-hover:translate-y-0.5 group-hover:text-[#D97706] transition-transform">
                                                ↓
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </section>


                {/* =========================================================================
            2. STRATEGIC HORIZON BANNER
        ========================================================================= */}
                <section className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-gray-200/90">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                        <div className="space-y-6">
                            <div className="text-xs font-bold text-[#D97706] uppercase tracking-widest flex items-center gap-2">
                                <span className="w-4 h-px bg-[#D97706]"></span>
                                Our Strategic Horizon
                            </div>

                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                                Moving beyond temporary charity to systemic institutional agency.
                            </h2>

                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                We do not administer perpetual aid. Every program at CLCE Bangladesh is architected
                                around a strict 36-month empowerment lifecycle: establishing grassroots legitimacy,
                                training village paralegals and cooperative managers, and transitioning governance
                                entirely into autonomous local hands.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                                <div className="space-y-1">
                                    <h4 className="font-bold text-gray-900 text-base">Decentralized</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed">
                                        Village council-steered decision matrix & local ownership
                                    </p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold text-gray-900 text-base">Replicable</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed">
                                        Standardized legal & artisan operational frameworks
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="relative w-full h-72 sm:h-88 rounded-2xl overflow-hidden bg-gray-100 shadow-inner">
                                <Image
                                    src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1000&q=80"
                                    alt="Community deliberation session"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <p className="text-xs text-gray-500 font-medium text-center">
                                Direct civic deliberation in Bogura district field center.
                            </p>
                        </div>

                    </div>
                </section>


                {/* =========================================================================
            3. FOUR PILLARS SECTION (INTERLOCKING MODULES)
        ========================================================================= */}
                <section className="space-y-10">

                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200/80 pb-6">
                        <div className="space-y-2 max-w-2xl">
                            <div className="text-xs font-bold text-[#D97706] uppercase tracking-widest flex items-center gap-2">
                                <span className="w-4 h-px bg-[#D97706]"></span>
                                Interlocking Modules
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                                Four Pillars of Structural Sovereignty
                            </h2>
                        </div>
                        <p className="text-sm text-gray-600 max-w-md leading-relaxed">
                            A cohesive civic architecture linking statutory education, fair markets, community mediation, and female leadership.
                        </p>
                    </div>

                    {/* 4 Pillars Grid (2x2) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        {/* Pillar 1: Civic Literacy */}
                        <div id="statutory-education" className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-200 flex flex-col justify-between space-y-6 scroll-mt-24">
                            <div className="space-y-5">
                                <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-gray-100">
                                    <Image
                                        src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80"
                                        alt="Civic literacy and education"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                    <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wide text-gray-800 shadow-sm">
                                        01. CIVIC LITERACY
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-xl sm:text-2xl font-bold">Statutory Rights & Education</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Equipping rural youth and village paralegals with comprehensive legal literacy,
                                        constitutional protections, and digital learning modules to bridge the institutional justice gap.
                                    </p>
                                </div>

                                <div className="space-y-2.5 pt-2">
                                    {[
                                        'Village Paralegal Academies & Certification',
                                        'Secondary School Civic Leadership Curriculum',
                                        'Open Access Land Tenure & Family Rights Handbooks',
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-gray-800">
                                            <span className="w-4 h-4 rounded-full bg-[#E6F0EC] text-[#2D5A4C] flex items-center justify-center text-[10px] shrink-0 font-bold">✓</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-100">
                                <a href="#curriculum" className="text-xs font-bold text-gray-900 hover:text-[#D97706] inline-flex items-center gap-1.5 transition-colors">
                                    Explore Curriculum →
                                </a>
                            </div>
                        </div>

                        {/* Pillar 2: Market Sovereignty */}
                        <div id="economic-guilds" className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-200 flex flex-col justify-between space-y-6 scroll-mt-24">
                            <div className="space-y-5">
                                <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-gray-100">
                                    <Image
                                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                                        alt="Economic empowerment and artisan guild"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                    <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wide text-gray-800 shadow-sm">
                                        02. MARKET SOVEREIGNTY
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-xl sm:text-2xl font-bold">Economic Empowerment & Guilds</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Transforming localized craft and agro-production into resilient, independent producer
                                        cooperatives backed by transparent micro-capital, ethical supply chains, and zero intermediary fees.
                                    </p>
                                </div>

                                <div className="space-y-2.5 pt-2">
                                    {[
                                        'Artisan Cooperative Incubators & Loom Infrastructure',
                                        'Direct Dhaka & International Fair-Trade Linkages',
                                        'Revolving Community-Owned Micro-Equity Reserves',
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-gray-800">
                                            <span className="w-4 h-4 rounded-full bg-[#E6F0EC] text-[#2D5A4C] flex items-center justify-center text-[10px] shrink-0 font-bold">✓</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-100">
                                <a href="#guild-model" className="text-xs font-bold text-gray-900 hover:text-[#D97706] inline-flex items-center gap-1.5 transition-colors">
                                    View Guild Model →
                                </a>
                            </div>
                        </div>

                        {/* Pillar 3: Participatory Governance */}
                        <div id="community-circles" className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-200 flex flex-col justify-between space-y-6 scroll-mt-24">
                            <div className="space-y-5">
                                <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-gray-100">
                                    <Image
                                        src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80"
                                        alt="Community development and mediation"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                    <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wide text-gray-800 shadow-sm">
                                        03. PARTICIPATORY GOVERNANCE
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-xl sm:text-2xl font-bold">Community Development & Mediation</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Institutionalizing peaceful alternative dispute resolution (ADR), transparent union parishad monitoring,
                                        and sustainable civic infrastructure directly steered by elected village assemblies.
                                    </p>
                                </div>

                                <div className="space-y-2.5 pt-2">
                                    {[
                                        'Community Dispute Mediation & Peace Tribunals',
                                        'Participatory Union Parishad Budget Audits',
                                        'Decentralized Water & Sanitation Collective Stewards',
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-gray-800">
                                            <span className="w-4 h-4 rounded-full bg-[#E6F0EC] text-[#2D5A4C] flex items-center justify-center text-[10px] shrink-0 font-bold">✓</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-100">
                                <a href="#learn-more" className="text-xs font-bold text-gray-900 hover:text-[#D97706] inline-flex items-center gap-1.5 transition-colors">
                                    Learn More →
                                </a>
                            </div>
                        </div>

                        {/* Pillar 4: Civic Stewardship (Dark Themed) */}
                        {/* Pillar 4: Civic Stewardship */}
                        <div id="youth-assemblies" className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-200 flex flex-col justify-between space-y-6 scroll-mt-24">
                            <div className="space-y-5">
                                <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-gray-100">
                                    <Image
                                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                                        alt="Youth and women assemblies"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                    <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wide text-gray-800 shadow-sm">
                                        04. CIVIC STEWARDSHIP
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Youth & Women Assemblies</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Targeted leadership academies designed to install women and youth at the head of local commerce,
                                        legal defense bodies, and institutional policy negotiations.
                                    </p>
                                </div>

                                <div className="space-y-2.5 pt-2">
                                    {[
                                        'Dedicated Female Legal Defense & Advocacy Units',
                                        'Youth Civic Councils & Municipal Engagement',
                                        'Women-Owned Commercial Enterprise Incubator',
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-gray-800">
                                            <span className="w-4 h-4 rounded-full bg-[#E6F0EC] text-[#2D5A4C] flex items-center justify-center text-[10px] shrink-0 font-bold">✓</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-100">
                                <a href="#discover" className="text-xs font-bold text-gray-900 hover:text-[#D97706] inline-flex items-center gap-1.5 transition-colors">
                                    Discover Initiatives →
                                </a>
                            </div>
                        </div>

                    </div>
                </section>


                {/* =========================================================================
            4. FEATURED PROGRAM SPOTLIGHT
        ========================================================================= */}
                <section className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-gray-200">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-[#FDF8F6] text-[#D97706] border border-amber-200 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide">
                                <span>🛡️</span> FEATURED PROGRAM SPOTLIGHT
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                                Artisan Guild Accelerator
                            </h2>

                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                A high-velocity economic initiative enabling female handloom weavers and traditional artisans
                                in Northern Bangladesh to bypass coercive middlemen, secure guaranteed floor prices, and directly own their production facilities.
                            </p>

                            {/* Stats Bar */}
                            <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-100">
                                <div>
                                    <div className="text-xl sm:text-2xl font-extrabold text-gray-900">100%</div>
                                    <div className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase mt-0.5">Locally Governed</div>
                                </div>
                                <div>
                                    <div className="text-xl sm:text-2xl font-extrabold text-[#D97706]">Zero</div>
                                    <div className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase mt-0.5">Intermediary Fee</div>
                                </div>
                                <div>
                                    <div className="text-xl sm:text-2xl font-extrabold text-gray-900">36 Mo.</div>
                                    <div className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase mt-0.5">Exit Strategy</div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap items-center gap-4 pt-2">
                                <button className="bg-gray-900 hover:bg-black text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition-all shadow-sm">
                                    Apply or Partner with Guild
                                </button>
                                <a href="#download-brief" className="text-xs sm:text-sm font-bold text-gray-900 hover:text-[#D97706] transition-colors inline-flex items-center gap-1.5">
                                    Download Program Brief (PDF) →
                                </a>
                            </div>
                        </div>

                        <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden bg-gray-100 shadow-inner">
                            <Image
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
                                alt="Artisan Guild Loom"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-bold text-gray-800 shadow-sm">
                                ✦ Active Guild: 420 Artisans
                            </div>
                        </div>

                    </div>
                </section>


                {/* =========================================================================
            5. CUMULATIVE PROGRAM EFFICACY (METRICS)
        ========================================================================= */}
                <section className="space-y-6">
                    <div className="flex items-center justify-between border-b border-gray-200/80 pb-3">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                            Cumulative Program Efficacy
                        </h3>
                        <span className="text-xs font-semibold text-gray-400">
                            Audited Q4 2025
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { stat: '10,000+', label: 'Active Participants Across Programs', highlight: false },
                            { stat: '50+', label: 'Community-Led Projects Delivered', highlight: true },
                            { stat: '20', label: 'Partner Unions & Upazilas', highlight: false },
                            { stat: '85%+', label: 'Autonomous Retention Post-Exit', highlight: false },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200 space-y-2">
                                <div className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${item.highlight ? 'text-[#D97706]' : 'text-gray-900'}`}>
                                    {item.stat}
                                </div>
                                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide leading-relaxed">
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


                {/* =========================================================================
            6. VOICES FROM THE FIELD (TESTIMONIALS)
        ========================================================================= */}
                <section className="space-y-8">

                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-200/80 pb-6">
                        <div className="space-y-2">
                            <div className="text-xs font-bold text-[#D97706] uppercase tracking-widest flex items-center gap-2">
                                <span className="w-4 h-px bg-[#D97706]"></span>
                                Real Agency in Action
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight">Voices From the Field</h2>
                        </div>
                        <a href="#all-stories" className="text-xs sm:text-sm font-bold text-gray-900 hover:text-[#D97706] transition-colors inline-flex items-center gap-1.5">
                            View All Field Stories →
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Story 1 */}
                        <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-sm border border-gray-200 flex flex-col justify-between space-y-6">
                            <div className="space-y-4">
                                <div className="relative w-full h-48 rounded-xl overflow-hidden bg-gray-100">
                                    <Image
                                        src="https://images.unsplash.com/photo-1594744803329-e58b31de8c5f?auto=format&fit=crop&w=600&q=80"
                                        alt="Amina Khatun"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="text-[10px] font-bold text-[#D97706] uppercase tracking-wider">Economic Guilds</div>
                                <h3 className="text-lg font-bold text-gray-900 leading-snug">
                                    Amina's Cooperative: From Local Weaving to Sustainable Livelihood
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 italic leading-relaxed">
                                    "Before the cooperative accelerator, middle merchants took 70% of our garment margins. Today, 32 of us govern our own balance sheet and supply directly to Dhaka fair-trade houses."
                                </p>
                            </div>
                            <div className="pt-4 border-t border-gray-100 text-xs font-semibold text-gray-500">
                                Amina Khatun — Bogura Weavers Collective
                            </div>
                        </div>

                        {/* Story 2 */}
                        <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-sm border border-gray-200 flex flex-col justify-between space-y-6">
                            <div className="space-y-4">
                                <div className="relative w-full h-48 rounded-xl overflow-hidden bg-gray-100">
                                    <Image
                                        src="https://images.unsplash.com/photo-1541888946425-d0fbb18f86f6?auto=format&fit=crop&w=600&q=80"
                                        alt="Rahim Miah"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="text-[10px] font-bold text-[#2D5A4C] uppercase tracking-wider">Community Circles</div>
                                <h3 className="text-lg font-bold text-gray-900 leading-snug">
                                    Rahim's Workshop: Rebuilding Youth Apprenticeships
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 italic leading-relaxed">
                                    "Through the civic craftsmanship initiative, our guild has trained 14 young people in sustainable carpentry, furnishing local schools while preserving generational trade knowledge."
                                </p>
                            </div>
                            <div className="pt-4 border-t border-gray-100 text-xs font-semibold text-gray-500">
                                Rahim Miah — Master Woodworker & Guild Lead
                            </div>
                        </div>

                        {/* Story 3 */}
                        <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-sm border border-gray-200 flex flex-col justify-between space-y-6">
                            <div className="space-y-4">
                                <div className="relative w-full h-48 rounded-xl overflow-hidden bg-gray-100">
                                    <Image
                                        src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80"
                                        alt="Tanrim Akter"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="text-[10px] font-bold text-[#D97706] uppercase tracking-wider">Statutory Education</div>
                                <h3 className="text-lg font-bold text-gray-900 leading-snug">
                                    The Green Classroom: Rural Youth Environmental Stewardship
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 italic leading-relaxed">
                                    "Learning statutory environmental law alongside agricultural sciences showed our student committee how to protect our local wetlands from unregulated municipal dumping."
                                </p>
                            </div>
                            <div className="pt-4 border-t border-gray-100 text-xs font-semibold text-gray-500">
                                Tanrim Akter — Youth Civic Council President
                            </div>
                        </div>

                    </div>
                </section>


                {/* =========================================================================
            7. CALL TO ACTION (PARTNERSHIP BANNER)
        ========================================================================= */}
                <section className="bg-[#111827] text-white py-16 sm:py-20 px-6 sm:px-12 rounded-3xl text-center border border-gray-800 shadow-xl">
                    <div className="max-w-3xl mx-auto space-y-6">

                        <div className="inline-flex items-center justify-center bg-white/10 text-amber-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
                            Institutional Partnership & Mobilization
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                            Partner with Us to Expand Community Sovereignty
                        </h2>

                        <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
                            We collaborate with grant-makers, research institutes, legal clinics, and grassroots foundations
                            committed to authentic structural self-reliance.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                            <button className="bg-[#D97706] hover:bg-[#B45309] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl transition-all shadow-md">
                                Support Our Programs
                            </button>
                            <button className="bg-transparent hover:bg-white/5 text-white border border-gray-700 text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl transition-all">
                                Explore Partnerships
                            </button>
                        </div>

                    </div>
                </section>

            </div>
        </div>
    );
}