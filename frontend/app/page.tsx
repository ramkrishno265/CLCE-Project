// app/page.tsx
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-gray-900 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-20 md:space-y-32">

        {/* ================= 1. HERO SECTION ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text Content */}
          <div className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 bg-[#E6F0EC] text-[#2D5A4C] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-[#2D5A4C]"></span>
              COMMUNITY-LED TRANSFORMATION
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
              Empowering people. <br />
              <span className="text-[#D97706]">Transforming communities.</span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl">
              We create opportunities, strengthen communities, and help people build better futures through dignity, capacity, and self-reliance.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 pt-2 w-full">
              <a
                href="/programs"
                className="w-full sm:w-auto text-center bg-[#D97706] hover:bg-[#b45309] text-white font-medium px-6 py-3.5 rounded-xl transition-all shadow-sm hover:scale-105"
              >
                Explore Our Work
              </a>
              <a
                href="/get-involved"
                className="w-full sm:w-auto text-center bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 font-medium px-6 py-3.5 rounded-xl transition-all shadow-sm hover:border-gray-300 hover:scale-105"
              >
                Get Involved
              </a>
            </div>
          </div>

          {/* Right Image Card with floating badge */}
          <div className="relative w-full">
            <div className="bg-white p-3 rounded-3xl shadow-sm border border-gray-200">
              <div className="relative w-full h-[320px] sm:h-[400px] md:h-[440px] rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1000&q=80"
                  alt="Community transformation workshop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Overlay Badge */}
            <div className="absolute -bottom-6 left-4 sm:left-8 bg-white/95 backdrop-blur-md px-4 sm:px-5 py-3 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF0E6] flex items-center justify-center text-[#C2682A] font-bold text-lg shrink-0">
                👥
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">10,000+ Lives</p>
                <p className="text-xs text-gray-500">Impacted across 20 self-sustaining communities</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 2. STATISTICS SECTION ================= */}
        <section className="pt-8 border-t border-gray-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-1">
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">10,000+</h3>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">PEOPLE REACHED</p>
              <div className="w-12 h-0.5 bg-[#D97706] mt-2"></div>
            </div>
            <div className="space-y-1">
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">50+</h3>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">PROJECTS COMPLETED</p>
              <div className="w-12 h-0.5 bg-[#D97706] mt-2"></div>
            </div>
            <div className="space-y-1">
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">20</h3>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">PARTNER COMMUNITIES</p>
              <div className="w-12 h-0.5 bg-[#D97706] mt-2"></div>
            </div>
            <div className="space-y-1">
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">15</h3>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">YEARS OF IMPACT</p>
              <div className="w-12 h-0.5 bg-[#D97706] mt-2"></div>
            </div>
          </div>
        </section>

        {/* ================= 3. WHAT WE DO SECTION ================= */}
        <section className="space-y-12">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-semibold text-[#D97706] uppercase tracking-widest flex items-center gap-2">
              <span>—</span> PROGRAMS & INITIATIVES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What we do</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Empowerment works through practical programs and community-led initiatives designed to foster resilient local systems, economic independence, and human dignity.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎓', title: 'Education', desc: 'Creating access to learning, vocational training, and life-long educational opportunities for youth and adults.' },
              { icon: '📈', title: 'Economic Empowerment', desc: 'Supporting sustainable livelihoods, micro-enterprise funding, and true financial independence for local entrepreneurs.' },
              { icon: '🏛️', title: 'Community Development', desc: 'Working hand-in-hand with civic leaders to design sustainable infrastructure and long-term grassroots solutions.' },
              { icon: '👥', title: 'Youth & Women', desc: 'Creating equitable opportunities, leadership accelerators, and stronger mentorship pathways for women and young people.' },
            ].map((card, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-200 flex flex-col justify-between space-y-8 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-lg border border-gray-100 shadow-inner">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold">{card.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <a href="/programs" className="text-xs font-bold text-gray-900 hover:text-[#D97706] flex items-center gap-1.5 transition-colors">
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 4. FEATURED PROGRAM SECTION ================= */}
        <section className="pt-8 border-t border-gray-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image Card */}
            <div className="bg-white p-3 rounded-3xl shadow-sm border border-gray-200 order-2 lg:order-1">
              <div className="relative w-full h-[320px] sm:h-[400px] md:h-[440px] rounded-2xl overflow-hidden bg-gray-100 group">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
                  alt="Artisan Guild Incubator workshop"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-gray-800 shadow-sm">
                  Artisan Guild Incubator
                </div>
              </div>
            </div>

            {/* Right Details */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-[#E6F0EC] text-[#2D5A4C] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
                FEATURED PROGRAM
              </div>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                Creating opportunity where it matters most.
              </h2>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Our Artisan Guild Accelerator bridges ancestral craftsmanship with fair-trade global markets. By facilitating hands-on vocational workshops, financial literacy curricula, and supply-chain logistics, we cultivate self-governing craft enterprises owned entirely by community producers.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  '100% locally led and community-owned cooperatives',
                  'Direct equitable market access without intermediaries',
                  'Comprehensive micro-capital and digital commerce literacy',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-800">
                    <div className="w-5 h-5 rounded-full bg-[#E6F0EC] text-[#2D5A4C] flex items-center justify-center text-xs shrink-0">✓</div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="/programs"
                  className="inline-flex items-center gap-2 bg-[#111827] hover:bg-gray-800 text-white font-medium px-6 py-3.5 rounded-xl transition-all shadow-sm hover:scale-105 text-sm"
                >
                  Explore the program →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 5. OUR MISSION SECTION ================= */}
        <section className="pt-8 border-t border-gray-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Text Content */}
            <div className="space-y-6">
              <div className="text-xs font-semibold text-[#D97706] uppercase tracking-widest flex items-center gap-2">
                <span>—</span> OUR MISSION
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                We believe every person deserves the opportunity to shape a better future.
              </h2>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Real change cannot be imposed from the outside. True transformation happens when communities possess the resources, agency, and authority to address their unique challenges.
              </p>

              <p className="text-gray-600 text-base leading-relaxed">
                We stand side-by-side with local makers, builders, and educators—not as patrons, but as co-creators of sustainable autonomy. Our work is grounded in institutional accountability, deep empathy, and the unwavering conviction that human dignity is non-negotiable.
              </p>

              {/* Two sub-columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gray-200">
                <div>
                  <h3 className="text-base font-bold mb-1">Human Dignity</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">Prioritizing agency over charity in every project.</p>
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1">Local Autonomy</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">Building systems designed to thrive independently.</p>
                </div>
              </div>
            </div>

            {/* Right Image Card */}
            <div className="bg-white p-3 rounded-3xl shadow-sm border border-gray-200">
              <div className="relative w-full h-[350px] sm:h-[400px] md:h-[460px] rounded-2xl overflow-hidden bg-gray-100 group">
                <img
                  src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1000&q=80"
                  alt="Artisan woodworker in workshop"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= 6. STORIES OF CHANGE ================= */}
        <section className="pt-8 border-t border-gray-200/80 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-3 max-w-2xl">
              <div className="text-xs font-semibold text-[#D97706] uppercase tracking-widest flex items-center gap-2">
                <span>—</span> VOICES & IMPACT
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Stories of change</h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Real narratives of courage, craft, and collective growth from the people leading their own transformation.
              </p>
            </div>
            <div>
              <a href="/stories" className="text-xs font-bold text-gray-900 hover:text-[#D97706] flex items-center gap-1.5 transition-colors">
                View all stories →
              </a>
            </div>
          </div>

          {/* 3 Story Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
                tag: 'Livelihoods & Enterprise',
                title: 'From Local Craft to Global Artisan Market',
                desc: 'How Amina established a sustainable weaving collective employing 24 women, scaling regional techniques into viable international micro-enterprises.',
                link: '/stories/amina',
              },
              {
                img: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80',
                tag: 'Education & Leadership',
                title: 'The Classroom in the Garden',
                desc: 'How solar learning labs and school gardens empowered young leaders like Grace to blend agronomy skills with foundational digital literacy.',
                link: '/stories/classroom-garden',
              },
              {
                img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
                tag: 'Community Development',
                title: 'Building Resilience from Wood and Soil',
                desc: 'How community workshops restored local furniture production and vocational apprenticeships, providing steady pathways for young youth.',
                link: '/stories/resilience-wood-soil',
              },
            ].map((story, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200 flex flex-col justify-between space-y-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="space-y-4">
                  <div className="relative w-full h-[220px] rounded-2xl overflow-hidden bg-gray-100 group">
                    <img
                      src={story.img}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold text-gray-800 shadow-sm">
                      {story.tag}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold leading-snug">{story.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{story.desc}</p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <a href={story.link} className="text-xs font-bold text-gray-900 hover:text-[#D97706] flex items-center gap-1.5 transition-colors">
                    Read story →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 7. DARK BANNER & ACTION CARDS ================= */}
        <section className="space-y-16 pt-8 border-t border-gray-200/80">
          {/* Dark Banner */}
          <div className="relative rounded-3xl overflow-hidden bg-[#111827] shadow-xl p-8 md:p-16 lg:p-20 text-white">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1400&q=80"
                alt="Community workshop background"
                className="w-full h-full object-cover opacity-30 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/90 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-2xl space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-amber-400 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
                <span>—</span> COLLECTIVE DETERMINATION
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                Change begins when people have the power to shape their own future.
              </h2>

              <div className="pt-2">
                <a
                  href="/impact"
                  className="inline-flex items-center gap-2 bg-[#D97706] hover:bg-[#b45309] text-white font-medium px-6 py-3.5 rounded-xl transition-all shadow-md hover:scale-105 text-sm"
                >
                  Learn about our impact →
                </a>
              </div>
            </div>
          </div>

          {/* Be Part of the Change Section */}
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="text-xs font-semibold text-[#D97706] uppercase tracking-widest flex items-center justify-center gap-2">
                <span>—</span> ACTION & ALLIANCE <span>—</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Be part of the change.</h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                There are many ways to support our work and help create lasting impact. Choose your path to join our global network.
              </p>
            </div>

            {/* 3 Action Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: '❤️', title: 'Donate', desc: 'Directly fund sustainable tools, training facilities, and community-led venture capital with complete fiscal transparency.', btnText: 'Make a Gift', btnLink: '/donate', primary: true },
                { icon: '🤝', title: 'Volunteer', desc: 'Share your technical expertise, mentorship, or operational time alongside our grassroots hubs on-site or remotely.', btnText: 'Join Our Network', btnLink: '/volunteer', primary: false },
                { icon: '🏢', title: 'Partner', desc: 'Collaborate with foundations, academic labs, or enterprise ESG programs to amplify systemic community solutions.', btnText: 'Explore Partnerships', btnLink: '/partner', primary: false },
              ].map((card, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 flex flex-col justify-between space-y-8 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  <div className="space-y-5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-xl border border-amber-100 shadow-inner">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold">{card.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <a
                      href={card.btnLink}
                      className={`w-full block text-center font-medium py-3 rounded-xl transition-all shadow-sm text-sm ${
                        card.primary
                          ? 'bg-[#D97706] hover:bg-[#b45309] text-white'
                          : 'bg-white hover:bg-gray-50 text-gray-800 border border-gray-300'
                      }`}
                    >
                      {card.btnText}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}