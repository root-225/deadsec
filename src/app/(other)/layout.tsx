import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function OtherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
} 