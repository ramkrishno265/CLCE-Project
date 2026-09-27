// app/layout.tsx
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FAF9F6]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}