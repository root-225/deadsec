'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-4 text-center">
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-red-400 mb-2">Something went wrong!</h2>
          <p className="text-slate-400 mb-4">
            {error.message || 'An unexpected error occurred'}
          </p>
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
} 