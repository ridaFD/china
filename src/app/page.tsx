import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import CategoryGrid from '@/components/CategoryGrid';
import ImageSearch from '@/components/ImageSearch';
import { categories } from '@/data/categories';

export default function Home() {
  // Get top 12 categories for homepage
  const topCategories = categories.slice(0, 12);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center text-center mb-12">
          {/* Logo/Title */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              1688.com
              <span className="block text-blue-600 mt-2">Product Browser</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Browse and source products directly from China&apos;s largest wholesale marketplace
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full max-w-4xl mb-8">
            <SearchBar />
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8">
            <Link href="/stores" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-3">🏪</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Browse Stores
              </h3>
              <p className="text-sm text-gray-600">
                Explore verified supplier catalogs
              </p>
            </Link>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-3">📷</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Image Search
              </h3>
              <p className="text-sm text-gray-600">
                Find products by uploading photos
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Best Prices
              </h3>
              <p className="text-sm text-gray-600">
                Access factory-direct pricing
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-3">✓</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Verified Suppliers
              </h3>
              <p className="text-sm text-gray-600">
                Connect with trusted suppliers
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="/products"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              Browse All Products
            </Link>
            <Link
              href="/categories"
              className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              View All Categories
            </Link>
          </div>
        </div>

        {/* Image Search Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Search by Image
            </h2>
            <p className="text-gray-600">
              Upload a product photo to find similar wholesale items
            </p>
          </div>
          <ImageSearch />
        </div>

        {/* Categories Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Browse by Category
              </h2>
              <p className="text-gray-600">
                Explore millions of products across diverse categories
              </p>
            </div>
            <Link
              href="/categories"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View All →
            </Link>
          </div>
          <CategoryGrid categories={topCategories} />
        </div>

        {/* Success Banner - Real Data Configured */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-green-100 border-2 border-green-400 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">✅</div>
              <div className="flex-1">
                <h4 className="font-bold text-green-900 mb-2 text-lg">
                  Connected to Real 1688.com Data!
                </h4>
                <p className="text-green-800 text-sm mb-3">
                  Your app is now fetching <strong>live products</strong> from 1688.com via RapidAPI.
                  Browse millions of real wholesale products with real images, prices, and supplier information!
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/stores"
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-sm"
                  >
                    Browse Stores
                  </Link>
                  <Link
                    href="/products"
                    className="px-4 py-2 bg-white text-green-600 border-2 border-green-600 rounded-lg hover:bg-green-50 transition-colors font-medium text-sm"
                  >
                    View All Products
                  </Link>
                  <Link
                    href="/api/test-connection"
                    target="_blank"
                    className="px-4 py-2 bg-gray-100 text-gray-700 border-2 border-gray-300 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm"
                  >
                    Test API
                  </Link>
                </div>
              </div>
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

