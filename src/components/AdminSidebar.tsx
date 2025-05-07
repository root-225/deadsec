'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, Settings, BarChart2, FileText } from 'lucide-react';

export default function AdminSidebar() {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Dashboard', href: '/admin', icon: Home },
    { name: 'Users', href: '/admin/users', icon: Users },
    { name: 'Analytics', href: '/admin/analytics', icon: BarChart2 },
    { name: 'Content', href: '/admin/content', icon: FileText },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-white shadow-sm">
      <div className="p-4 border-b">
        <h1 className="text-xl font-semibold">Admin Panel</h1>
      </div>
      <nav className="p-2">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center p-2 rounded-md ${pathname === item.href ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}