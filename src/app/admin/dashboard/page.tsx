"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    // Example: check authentication here, redirect if not authenticated
    // For now, just a placeholder
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl space-y-6">
        <h1 className="text-4xl font-bold text-center mb-4 text-blue-700">Admin Dashboard</h1>
        <p className="text-center text-gray-600">Welcome to your new admin dashboard!</p>
        {/* Add dashboard widgets and management features here */}
      </div>
    </div>
  );
}