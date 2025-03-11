import LoadingSpinner from '@/components/LoadingSpinner';

export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="lg" className="text-blue-500" />
        <p className="mt-4 text-slate-400 animate-pulse">Loading...</p>
      </div>
    </div>
  );
} 