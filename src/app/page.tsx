import Link from 'next/link';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <main className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          {/* Logo/Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              1688.com
              <span className="block text-blue-600 mt-2">Product Browser</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Browse and source products directly from China&apos;s largest wholesale marketplace
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full max-w-4xl mb-12">
            <SearchBar />
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Search Products
              </h3>
              <p className="text-gray-600">
                Search millions of wholesale products from verified Chinese suppliers
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Best Prices
              </h3>
              <p className="text-gray-600">
                Access factory-direct pricing and bulk discounts on all products
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Easy Sourcing
              </h3>
              <p className="text-gray-600">
                Connect directly with suppliers and streamline your wholesale buying
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Browse All Products
            </Link>
            <a
              href="https://www.1688.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Visit 1688.com
            </a>
          </div>

          {/* Info Banner */}
          <div className="mt-16 max-w-3xl">
            <div className="bg-blue-100 border border-blue-200 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-2">
                🔧 Setup Required
              </h4>
              <p className="text-blue-800 text-sm">
                To display real products from 1688.com, you need to configure your 
                Alibaba Open Platform API credentials in the <code className="bg-blue-200 px-2 py-1 rounded">.env.local</code> file. 
                Currently showing mock data. Check the README for setup instructions.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-gray-600">
            Built with Next.js | Powered by 1688.com API
          </p>
        </div>
      </footer>
    </div>
  );
}
