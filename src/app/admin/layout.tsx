
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard | deadsec',
  description: 'Administrative dashboard for website management',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {children}
    </div>
  );
}
