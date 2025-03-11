import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import ErrorBoundary from '@/components/ErrorBoundary';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Secure admin dashboard for managing content',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ErrorBoundary>
          <Toaster position="top-right" />
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
} 