'use client'; // 👈 ১. Client Component নির্দেশক যোগ করা হলো

import { usePathname } from 'next/navigation'; 
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // বর্তমান পেজের Path বের করা হচ্ছে
  const isAdminRoute = pathname?.startsWith('/admin'); // পেজটি যদি /admin দিয়ে শুরু হয়

  return (
    <html lang="en">
      <body className="bg-[#FAF9F6]">
        {/* 👈 ৩. অ্যাডমিন পেজ না হলে কেবল Navbar দেখাবে */}
        {!isAdminRoute && <Navbar />}

        <main>{children}</main>

        {/* 👈 ৩. অ্যাডমিন পেজ না হলে কেবল Footer দেখাবে */}
        {!isAdminRoute && <Footer />}
      </body>
    </html>
  );
}