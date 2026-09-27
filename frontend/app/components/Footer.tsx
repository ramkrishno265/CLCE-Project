// app/components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-16 pb-8 px-6 md:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-gray-800">
        
        {/* Col 1: Brand & Description */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 bg-white rounded-lg p-1">
              <Image 
                src="/logo.png" 
                alt="CLCE Bangladesh Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight leading-none">
                Empowerment
              </h3>
              <p className="text-xs text-gray-400 mt-1 font-medium">
                CLCE Bangladesh
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Centre for Legal & Civic Empowerment. Championing human rights literacy, democratic community stewardship, and institutional accountability since 2011.
          </p>
        </div>

        {/* Col 2: Organization */}
        <div className="space-y-4">
          <h4 className="text-xs font-semibold text-white uppercase tracking-wider">ORGANIZATION</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/programs" className="hover:text-white transition-colors">Programs & Field Academies</Link></li>
            <li><Link href="/impact" className="hover:text-white transition-colors">Impact Measurement</Link></li>
            <li><Link href="/stories" className="hover:text-white transition-colors">Stories of Agency</Link></li>
            <li><Link href="/get-involved" className="hover:text-white transition-colors">Join the Network</Link></li>
          </ul>
        </div>

        {/* Col 3: Governance */}
        <div className="space-y-4">
          <h4 className="text-xs font-semibold text-white uppercase tracking-wider">GOVERNANCE</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/financial-transparency" className="hover:text-white transition-colors">Financial Transparency</Link></li>
            <li><Link href="/annual-reports" className="hover:text-white transition-colors">Annual Reports</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/code-of-ethics" className="hover:text-white transition-colors">Code of Ethics</Link></li>
          </ul>
        </div>

        {/* Col 4: Headquarters */}
        <div className="space-y-4">
          <h4 className="text-xs font-semibold text-white uppercase tracking-wider">HEADQUARTERS</h4>
          <div className="space-y-3 text-sm text-gray-400">
            <p className="leading-relaxed">
              Dhaka Hub: House 42, Road 11, Banani, Dhaka-1213, Bangladesh. Regional Field Liaison: Bogura & Sylhet[cite: 6].
            </p>
            <p>
              <a href="mailto:contact@clce-bangladesh.org" className="hover:text-white transition-colors">contact@clce-bangladesh.org</a>
            </p>
            <p>
              <a href="tel:+88029882341" className="hover:text-white transition-colors">+880 2 988 2341</a>
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
        <p>© 2026 Empowerment / CLCE Bangladesh. All rights reserved[cite: 6].</p>
        <div className="flex items-center gap-6">
          <Link href="/financial-transparency" className="hover:text-gray-300 transition-colors">Financial Transparency</Link>
          <Link href="/annual-reports" className="hover:text-gray-300 transition-colors">Annual Reports</Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}