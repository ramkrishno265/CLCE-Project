import React from 'react';

export default function MissionVision() {
  return (
    <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            Driving Innovation for a Better Tomorrow
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            We are dedicated to building solutions that empower individuals and organizations to achieve their highest potential through quality and technology.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission Card */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-all"></div>
            
            <div>
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                {/* Target / Rocket Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Our Mission
              </h3>

              <p className="text-slate-600 leading-relaxed text-base">
                To simplify complex challenges through innovative digital solutions and exceptional user experiences. We strive to provide high-quality, scalable, and impactful tools that create long-term value for our users and communities.
              </p>
            </div>

            {/* Key Bullet Points */}
            <ul className="mt-8 space-y-3 pt-6 border-t border-slate-100">
              <li className="flex items-center text-slate-700 text-sm font-medium">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                User-Centric Innovation
              </li>
              <li className="flex items-center text-slate-700 text-sm font-medium">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                Scalable & Sustainable Solutions
              </li>
              <li className="flex items-center text-slate-700 text-sm font-medium">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                Uncompromised Quality
              </li>
            </ul>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-all"></div>

            <div>
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                {/* Eye / Telescope Icon */}
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Our Vision
              </h3>

              <p className="text-slate-600 leading-relaxed text-base">
                To become a global leader in empowering digital transformation. We envision a future where seamless technology bridges gaps, enhances productivity, and improves everyday life for everyone, everywhere.
              </p>
            </div>

            {/* Key Bullet Points */}
            <ul className="mt-8 space-y-3 pt-6 border-t border-slate-100">
              <li className="flex items-center text-slate-700 text-sm font-medium">
                <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                Global Excellence & Reach
              </li>
              <li className="flex items-center text-slate-700 text-sm font-medium">
                <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                Fostering Positive Community Impact
              </li>
              <li className="flex items-center text-slate-700 text-sm font-medium">
                <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                Continuous Future-Ready Tech
              </li>
            </ul>
          </div>

        </div>

        {/* Core Values Highlight */}
        <div className="mt-16 bg-slate-900 text-white rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-3">Driven by Strong Values</h3>
            <p className="text-slate-300 text-sm sm:text-base mb-6">
              Integrity, Innovation, and Collaboration form the core foundation of everything we build and deliver.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}