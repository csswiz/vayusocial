import { Inter } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/ui/CustomCursor';
import SmoothScroll from '@/components/ui/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'VAYU SOCIAL | Performance-Driven Growth Agency',
  description: 'Crafting viral strategies and immersive content for ambitious brands. Elevate your reach with VAYU SOCIAL.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="bg-[#050505] text-white overflow-x-hidden">
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
