import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tech Startup Inc - Innovative SaaS Solutions',
  description: 'Transform your business with cutting-edge SaaS solutions. Tech Startup Inc delivers powerful, scalable software that drives growth and efficiency.',
  keywords: 'SaaS, software, technology, startup, business solutions, cloud software',
  authors: [{ name: 'Tech Startup Inc' }],
  openGraph: {
    title: 'Tech Startup Inc - Innovative SaaS Solutions',
    description: 'Transform your business with cutting-edge SaaS solutions',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Startup Inc - Innovative SaaS Solutions',
    description: 'Transform your business with cutting-edge SaaS solutions',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}