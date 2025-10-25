'use client';

import { useState, FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('keyword') || '');
  const [showWarning, setShowWarning] = useState(false);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    // Keyword search not available on free tier - show warning and redirect to stores
    setShowWarning(true);
    setTimeout(() => {
      router.push('/stores');
    }, 2000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSearch}>
        <div className="flex gap-2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Browse by stores (keyword search not available on free tier)"
            className="flex-1 px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            disabled
          />
          <Link
            href="/stores"
            className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium whitespace-nowrap"
          >
            Browse Stores
          </Link>
        </div>
      </form>
      
      {showWarning && (
        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-yellow-800 text-sm">
            ⚠️ <strong>Keyword search not available on free tier.</strong> Redirecting you to store browsing where you can find real products from verified suppliers!
          </p>
        </div>
      )}
      
      <div className="mt-3 text-center">
        <p className="text-sm text-gray-600">
          💡 <strong>Tip:</strong> Browse by <Link href="/stores" className="text-blue-600 hover:text-blue-700 font-medium">Featured Stores</Link> to see 1,500+ real products with images!
        </p>
      </div>
    </div>
  );
}

