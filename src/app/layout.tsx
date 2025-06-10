import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/Providers';
import Header from '@/components/Header'; // Ajout de l'importation
import Footer from '@/components/Footer'; // Ajout de l'importation

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://deadsec.com'),
  title: 'deadsec - Solutions Innovantes Informatiques',
  description: 'Developpe ton business en la digitalisant et en investissant dans sa securite en ligne.',
  keywords: ['technology', 'innovation', 'business solutions', 'digital transformation'],
  openGraph: {
    title: 'deadsec - Solutions Innovantes Informatiques',
    description: 'Developpe ton business en la digitalisant et en investissant dans sa securite en ligne.',
    images: ['/og-image.png']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'deadsec - Solutions Innovantes Informatiques',
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-[#000000] text-[#FFFFFF] transition-colors duration-200`}>
        <Providers>
          <Header /> {/* Ajout du Header */}
          <main className="antialiased bg-[#000000] text-[#FFFFFF] min-h-screen">
            {children}
          </main>
          <Footer /> {/* Ajout du Footer */}
        </Providers>
      </body>
    </html>
  );
}