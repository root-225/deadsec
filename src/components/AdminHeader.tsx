'use client';

import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

export default function AdminHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between p-4">
        <h2 className="text-lg font-medium">Admin Dashboard</h2>
        <button 
          onClick={() => signOut()}
          className="flex items-center text-sm text-gray-600 hover:text-gray-900"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </button>
      </div>
    </header>
  );
}