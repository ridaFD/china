'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface ApiStatus {
  configured: boolean;
  hasAppKey: boolean;
  hasAppSecret: boolean;
  status: string;
  message: string;
  nextSteps: string[];
}

export default function ApiStatusPage() {
  const [status, setStatus] = useState<ApiStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/test-connection')
      .then(res => res.json())
      .then(data => {
        setStatus(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to check API status:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin text-4xl mb-4">⌛</div>
          <p className="text-gray-600">Checking API status...</p>
        </div>
      </div>
    );
  }

  if (!status) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center text-red-600">
          <p className="text-xl">Failed to check API status</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
            >
              <span>←</span>
              <span>Back to Home</span>
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            1688.com API Status
          </h1>
          <p className="text-gray-600 mt-1">
            Check your API configuration and connection status
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Status Card */}
        <div className={`rounded-lg shadow-lg p-8 mb-8 ${
          status.configured 
            ? 'bg-green-50 border-2 border-green-500' 
            : 'bg-yellow-50 border-2 border-yellow-500'
        }`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="text-6xl">
              {status.configured ? '✅' : '⚠️'}
            </div>
            <div>
              <h2 className={`text-2xl font-bold ${
                status.configured ? 'text-green-900' : 'text-yellow-900'
              }`}>
                {status.configured ? 'API Configured' : 'API Not Configured'}
              </h2>
              <p className={status.configured ? 'text-green-700' : 'text-yellow-700'}>
                {status.message}
              </p>
            </div>
          </div>
        </div>

        {/* Configuration Details */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Configuration Details
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <span className="font-medium text-gray-700">App Key:</span>
              <span className={`flex items-center gap-2 ${
                status.hasAppKey ? 'text-green-600' : 'text-red-600'
              }`}>
                {status.hasAppKey ? '✓ Configured' : '✗ Not Set'}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <span className="font-medium text-gray-700">App Secret:</span>
              <span className={`flex items-center gap-2 ${
                status.hasAppSecret ? 'text-green-600' : 'text-red-600'
              }`}>
                {status.hasAppSecret ? '✓ Configured' : '✗ Not Set'}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <span className="font-medium text-gray-700">Data Source:</span>
              <span className="font-semibold text-gray-900">
                {status.configured ? '1688.com API' : 'Mock Data'}
              </span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            {status.configured ? 'Verification Steps' : 'Setup Instructions'}
          </h3>
          <ol className="space-y-3">
            {status.nextSteps.map((step, index) => (
              <li key={index} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                  {step.startsWith('If') ? '!' : index + 1}
                </span>
                <span className="text-gray-700 flex-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <a
            href="https://open.1688.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
          >
            <div className="text-3xl mb-2">🔗</div>
            <h4 className="font-bold text-lg mb-1">1688 Open Platform</h4>
            <p className="text-sm text-blue-100">Register and get API access</p>
          </a>

          <Link
            href="/products"
            className="block p-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-center"
          >
            <div className="text-3xl mb-2">🛍️</div>
            <h4 className="font-bold text-lg mb-1">Browse Products</h4>
            <p className="text-sm text-green-100">
              {status.configured ? 'View real products' : 'View mock products'}
            </p>
          </Link>
        </div>

        {/* Documentation Links */}
        <div className="bg-gray-100 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            📚 Documentation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded p-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                API Setup Guide
              </h4>
              <p className="text-sm text-gray-600 mb-3">
                Step-by-step instructions for getting real 1688.com data
              </p>
              <a
                href="https://github.com/ridaFD/china/blob/main/API_SETUP_GUIDE.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Read Guide →
              </a>
            </div>

            <div className="bg-white rounded p-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                Troubleshooting
              </h4>
              <p className="text-sm text-gray-600 mb-3">
                Common issues and solutions
              </p>
              <a
                href="https://github.com/ridaFD/china/blob/main/TROUBLESHOOTING.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Get Help →
              </a>
            </div>

            <div className="bg-white rounded p-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                README
              </h4>
              <p className="text-sm text-gray-600 mb-3">
                Complete project documentation
              </p>
              <a
                href="https://github.com/ridaFD/china/blob/main/README.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View Docs →
              </a>
            </div>
          </div>
        </div>

        {/* Current Data Type Banner */}
        <div className={`mt-8 rounded-lg p-6 text-center ${
          status.configured 
            ? 'bg-green-100 border-2 border-green-500' 
            : 'bg-orange-100 border-2 border-orange-500'
        }`}>
          <p className={`text-lg font-semibold ${
            status.configured ? 'text-green-900' : 'text-orange-900'
          }`}>
            {status.configured 
              ? '🎉 You are viewing REAL products from 1688.com!' 
              : '⚠️ Currently viewing MOCK DATA. Configure API for real products.'}
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white mt-12">
        <div className="container mx-auto px-4 py-8 text-center text-gray-600">
          <p>Built with Next.js | Powered by 1688.com API</p>
        </div>
      </footer>
    </div>
  );
}

