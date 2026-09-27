// app/page.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Top Header & Intro Section */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#E6F0EC] text-[#2D5A4C] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-[#2D5A4C]"></span>
            ABOUT US · OUR ROOTS & PURPOSE
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.15]">
            Rooted in Community. <span className="text-[#D97706]">Driven by Justice and Dignity.</span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-normal">
            Founded with the conviction that true social transformation begins when individuals and communities hold the tools of legal awareness, economic sovereignty, and civic agency.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="bg-white border border-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:border-gray-300 transition-colors">
              Est. 2011
            </span>
            <span className="bg-white border border-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:border-gray-300 transition-colors">
              20 Partner Communities
            </span>
            <span className="bg-white border border-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:border-gray-300 transition-colors">
              100% Community-Led Governance
            </span>
          </div>
        </div>

        {/* Bottom Detailed Section (Text + Image Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8 border-t border-gray-200">
          
          {/* Left Text Content */}
          <div className="space-y-6">
            <div className="relative pl-4 border-l-4 border-[#D97706]">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                The Centre for Legal & Civic Empowerment
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed">
              What began in 2011 as a grassroots legal clinic addressing land tenure disputes in rural Bogura has matured into an independent, community-steered nationwide movement. CLCE Bangladesh rejects traditional top-down charity in favor of systemic institutional literacy.
            </p>

            <p className="text-gray-600 leading-relaxed">
              By embedding trained paralegals directly within village unions and fostering civic assemblies, we ensure marginalized families can protect their statutory rights, secure lawful livelihoods, and advocate directly with regional authorities.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm font-semibold text-gray-800">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#2D5A4C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Democratized Civic Access
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#2D5A4C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Constituent Led
              </div>
            </div>
          </div>

          {/* Right Image Card */}
          <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
            <div className="relative w-full h-[320px] md:h-[380px] rounded-xl overflow-hidden bg-gray-100 group">
              <img
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80"
                alt="Community roundtable dialogue"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex justify-between items-center px-2 pt-3 pb-1 text-xs text-gray-500 font-medium">
              <span>Community roundtable dialogue in Bogura district, 2024</span>
              <span>Field Archives</span>
            </div>
          </div>

        </div>

        {/* Mission, Vision & Core Principles Section */}
        <div className="pt-16 border-t border-gray-200 space-y-20">

          {/* Top Two Cards (Our Mission & Our Vision) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Mission Card */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-200 flex flex-col justify-between space-y-8 hover:shadow-md hover:border-gray-300 transition-all duration-300">
              <div className="space-y-4">
                <div className="inline-block bg-[#E6F0EC] text-[#2D5A4C] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
                  OUR MISSION
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                  To democratize legal empowerment and build community resilience where external aid stops.
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We equip citizens with statutory literacy, negotiation capability, and community-led dispute mediation so local autonomy outlasts program lifecycles.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-bold text-gray-900 flex items-center gap-1.5">⚖️ Equitable Literacy</h4>
                  <p className="text-gray-500 text-xs mt-1">Statutory rights decoded</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 flex items-center gap-1.5">🏛️ Economic Sovereignty</h4>
                  <p className="text-gray-500 text-xs mt-1">Grassroots co-ops</p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-200 flex flex-col justify-between space-y-8 hover:shadow-md hover:border-gray-300 transition-all duration-300">
              <div className="space-y-4">
                <div className="inline-block bg-[#FAF0E6] text-[#C2682A] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
                  OUR VISION
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                  A just society where every individual possesses the legal clarity and civic voice to shape their future.
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A resilient civic fabric where democratic accountability is an everyday reality, not a privileged exception.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 space-y-2 text-xs md:text-sm text-gray-700 font-medium">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C2682A]"></span>
                  Universal civic and human rights literacy across rural unions
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C2682A]"></span>
                  Autonomous village grievance mechanisms & citizen councils
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C2682A]"></span>
                  Systemic institutional responsiveness and budget transparency
                </div>
              </div>
            </div>

          </div>

          {/* Core Principles Section */}
          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">CORE PRINCIPLES</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                The Non-Negotiable Values Guiding CLCE
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-lg border border-gray-100 shadow-inner">
                  ✊
                </div>
                <h3 className="text-lg font-bold text-gray-900">Human Dignity</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Unconditional respect for lived community experiences, personal agency, and cultural sovereignty.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-lg border border-gray-100 shadow-inner">
                  👁️
                </div>
                <h3 className="text-lg font-bold text-gray-900">Radical Transparency</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Open-book program expenditures, independent public audits, and democratic accountability.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-lg border border-gray-100 shadow-inner">
                  🛡️
                </div>
                <h3 className="text-lg font-bold text-gray-900">Local Agency</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Rejecting saviorism. Constituents decide strategy, manage councils, and lead dispute solutions.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-lg border border-gray-100 shadow-inner">
                  👥
                </div>
                <h3 className="text-lg font-bold text-gray-900">Collective Equity</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Prioritizing indigenous minorities, rural women, and youth who have faced institutional exclusion.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Operational Framework & Team Section */}
        <div className="pt-16 border-t border-gray-200 space-y-20">

          {/* Operational Framework Card Container */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200 space-y-12">
            <div className="space-y-3">
              <p className="text-xs font-semibold text-amber-700 uppercase tracking-widest">OPERATIONAL FRAMEWORK</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                How We Transition Power to Communities
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-gray-200/80 space-y-4 hover:border-gray-300 transition-colors">
                <span className="text-xl font-bold text-gray-400">01</span>
                <h3 className="text-lg font-bold text-gray-900">Listen & Scaffold</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Co-identifying legal and systemic barriers directly alongside local assemblies and village leaders.
                </p>
              </div>

              <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-gray-200/80 space-y-4 hover:border-gray-300 transition-colors">
                <span className="text-xl font-bold text-amber-600">02</span>
                <h3 className="text-lg font-bold text-gray-900">Build Capacity</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Hands-on statutory education, community paralegal academies, and female-run cooperative training.
                </p>
              </div>

              <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-gray-200/80 space-y-4 hover:border-gray-300 transition-colors">
                <span className="text-xl font-bold text-gray-400">03</span>
                <h3 className="text-lg font-bold text-gray-900">Autonomous Transition</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Transferring operational funds, assets, and oversight fully to elected community councils within 36 months.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium gap-4">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Over 85% of partner councils maintain complete operational self-sufficiency after exit.
              </div>
              <div>
                <span>3-Year Rolling Evaluation Protocol</span>
              </div>
            </div>
          </div>

          {/* The People Behind the Movement Section */}
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">ACCOUNTABLE GOVERNANCE</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                  The People Behind the Movement
                </h2>
              </div>
              <p className="text-sm text-gray-600 max-w-sm">
                Combining deep constitutional legal scholarship, international grassroots field methodology, and lived community experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Member 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col justify-between space-y-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="space-y-4">
                  <div className="relative w-full h-[240px] rounded-xl overflow-hidden bg-gray-100 group">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                      alt="Shamsun Nahar"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">EXECUTIVE DIRECTOR & FOUNDER</p>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">Shamsun Nahar</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    20+ years advocating for human rights, land rights resolution, and rural women's legal empowerment across South Asia.
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 text-xs font-medium text-gray-700 flex items-center gap-2">
                  <span>✉️</span>
                  <a href="mailto:s.nahar@clce-bangladesh.org" className="hover:underline text-gray-600">s.nahar@clce-bangladesh.org</a>
                </div>
              </div>

              {/* Member 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col justify-between space-y-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="space-y-4">
                  <div className="relative w-full h-[240px] rounded-xl overflow-hidden bg-gray-100 group">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
                      alt="Barrister Samuel A. Adewale"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">SENIOR LEGAL COUNSEL & CIVIC ADVISOR</p>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">Barrister Samuel A. Adewale</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Specialist in constitutional civic liberties, international humanitarian statutes, and public interest court advocacy.
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 text-xs font-medium text-gray-700 flex items-center gap-2">
                  <span>✉️</span>
                  <a href="mailto:s.adewale@clce-bangladesh.org" className="hover:underline text-gray-600">s.adewale@clce-bangladesh.org</a>
                </div>
              </div>

              {/* Member 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col justify-between space-y-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="space-y-4">
                  <div className="relative w-full h-[240px] rounded-xl overflow-hidden bg-gray-100 group">
                    <img
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80"
                      alt="Maya Lin Rahman"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">DIRECTOR OF FIELD PROGRAMS & ALLIANCES</p>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">Maya Lin Rahman</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Mobilizing village collectives, establishing dispute mediation circles, and organizing community-governed micro-enterprises.
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 text-xs font-medium text-gray-700 flex items-center gap-2">
                  <span>✉️</span>
                  <a href="mailto:m.rahman@clce-bangladesh.org" className="hover:underline text-gray-600">m.rahman@clce-bangladesh.org</a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Quote & Join the Movement Section */}
        <div className="pt-16 border-t border-gray-200 space-y-12">

          <div className="relative rounded-3xl overflow-hidden shadow-sm border border-gray-200 h-[360px] md:h-[420px] flex items-end p-8 md:p-12">
            <img
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80"
              alt="Diverse community participants collaborating during open courtyard civic workshop"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent"></div>

            <div className="absolute top-6 left-6 right-6 text-white/90 text-xs md:text-sm font-medium">
              Diverse community participants collaborating during open courtyard civic workshop
            </div>

            <div className="relative z-10 max-w-3xl">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
                "We do not bring freedom from the outside; we kindle the authority that already lives within every community."
              </h3>
            </div>
          </div>

          <div className="bg-[#111827] text-white p-10 md:p-16 rounded-3xl shadow-lg text-center space-y-8 flex flex-col items-center">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">JOIN THE MOVEMENT</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                "True transformation isn't delivered to a community—it is built from within."
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed pt-2">
                Join our network of advocates, legal fellows, community partners, and institutional changemakers across Bangladesh.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="/get-involved"
                className="bg-[#D97706] hover:bg-[#b45309] text-white font-medium px-6 py-3 rounded-xl transition-all shadow-sm hover:scale-105"
              >
                Get Involved
              </a>
              <a
                href="/programs"
                className="bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 font-medium px-6 py-3 rounded-xl transition-all hover:scale-105"
              >
                Explore Our Programs
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}