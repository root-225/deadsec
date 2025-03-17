import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://hk-site.com'),
  title: 'HK Communities - Solutions Innovantes Informatiques',
  description: 'Developpe ton business en la digitalisant et en investissant dans sa securite en ligne.',
  keywords: ['technology', 'innovation', 'business solutions', 'digital transformation'],
  openGraph: {
    title: 'HK Communities - Solutions Innovantes Informatiques',
    description: 'Developpe ton business en la digitalisant et en investissant dans sa securite en ligne.',
    images: ['/og-image.png']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HK Communities - Solutions Innovantes Informatiques',
    description: 'Developpe ton business en la digitalisant et en investissant dans sa securite en ligne.',
    images: ['/og-image.png']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-200`}>
        <Providers>
          <main className="antialiased bg-[#020617] text-white min-h-screen">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}