/**
 * Featured Stores Page
 * Browse products by store instead of keyword search
 */

import Link from 'next/link';
import { featuredStores } from '@/data/featured-stores';

export default function StoresPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Featured Stores</h1>
          <p className="text-gray-600 mt-2">
            Browse products from verified 1688.com suppliers
          </p>
        </div>
      </div>

      {/* Info Banner */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <div className="text-2xl">ℹ️</div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">Store-Based Browsing</h3>
              <p className="text-sm text-blue-800">
                Browse products from verified suppliers. Each store offers hundreds of wholesale products
                with real images, prices, and specifications from 1688.com!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Store Grid */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredStores.map((store) => (
            <Link
              key={store.id}
              href={`/products?storeId=${store.id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200"
            >
              {/* Store Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">
                    {store.name}
                  </h2>
                  <p className="text-sm text-gray-500">{store.nameZh}</p>
                </div>
                {store.verified && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </span>
                )}
              </div>

              {/* Store Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  <span className="font-medium">{store.category}</span>
                </div>

                <p className="text-sm text-gray-600 line-clamp-2">
                  {store.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="text-sm">
                    <span className="font-semibold text-gray-900">
                      {store.estimatedProducts}+
                    </span>
                    <span className="text-gray-500 ml-1">Products</span>
                  </div>
                  <span className="text-blue-600 text-sm font-medium hover:text-blue-700">
                    Browse Store →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Add More Stores CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Want to Add More Stores?
          </h3>
          <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
            Find your favorite suppliers on 1688.com and add their store IDs to browse their full catalog
            of wholesale products right here!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.1688.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Visit 1688.com
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors font-medium"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

