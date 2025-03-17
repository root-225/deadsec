import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Nos Services | HK Consulting',
  description: 'Découvrez nos services professionnels en cloud, sécurité, IA et transformation digitale.',
};

export default function ServicesListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow pt-16">
        {children}
      </div>
      <Footer />
    </div>
  );
} 