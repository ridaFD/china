/**
 * Featured Stores Page - Organized by Subcategories
 * Browse products by store across 55+ specific subcategories
 * Matching real 1688.com marketplace structure
 */

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { 
  featuredStores, 
  getAllCategories, 
  getStoresByCategory, 
  getStoreCount, 
  getCategoryCount,
} from '@/data/featured-stores';

const STORES_PER_PAGE = 12;

export default function StoresPage() {
  const allCategories = getAllCategories();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 when category or search changes
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  // Get stores to display based on category filter and search
  let filteredStores = selectedCategory 
    ? getStoresByCategory(selectedCategory)
    : featuredStores;

  // Apply search filter
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filteredStores = filteredStores.filter(store => 
      store.name.toLowerCase().includes(query) ||
      store.nameZh.includes(query) ||
      store.category.toLowerCase().includes(query) ||
      (store.location && store.location.toLowerCase().includes(query)) ||
      (store.description && store.description.toLowerCase().includes(query))
    );
  }

  // Calculate pagination
  const totalPages = Math.ceil(filteredStores.length / STORES_PER_PAGE);
  const startIndex = (currentPage - 1) * STORES_PER_PAGE;
  const endIndex = startIndex + STORES_PER_PAGE;
  const storesToDisplay = filteredStores.slice(startIndex, endIndex);

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const showEllipsisAt = 5;

    if (totalPages <= 7) {
      // Show all pages if 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage > 3) {
        pages.push('...');
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push('...');
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  // Category emojis for the 6 real categories
  const categoryEmojis: Record<string, string> = {
    'Fashion & Apparel': '👕',
    'Electronics & Technology': '📱',
    'Crafts & Decorations': '🎨',
    'Home & Furniture': '🏠',
    'Ceramics & Vases': '🏺',
    'Vases & Planters': '🪴',
  };

  // Store card emojis (for display on cards)
  const storeEmojis: Record<string, string> = {
    'Fashion & Apparel': '👕',
    'Electronics & Technology': '📱',
    'Crafts & Decorations': '🎨',
    'Home & Furniture': '🛋️',
    'Ceramics & Vases': '🏺',
    'Vases & Planters': '🪴',
  };

  // Legacy subcategory emojis (kept for compatibility)
  const subcategoryEmojis: Record<string, string> = {
    'Home Decor & Decorations': '🎨',
    'Candles & Fragrances': '🕯️',
    'Vases & Planters': '🏺',
    'Kitchen & Dining': '🍴',
    'Bathroom Fixtures': '🚿',
    'Lighting & Lamps': '💡',
    'Furniture': '🛋️',
    'Garden & Outdoor': '🌱',
    'Bedding & Textiles': '🛏️',
    'Storage & Organization': '📦',
    'Women\'s Clothing': '👗',
    'Men\'s Clothing': '👔',
    'Children\'s Clothing': '👶',
    'Sportswear & Activewear': '🏃',
    'Lingerie & Underwear': '👙',
    'Swimwear & Beachwear': '🩱',
    'Outerwear & Coats': '🧥',
    'Uniforms & Workwear': '👷',
    'Mobile Phones & Tablets': '📱',
    'Computers & Laptops': '💻',
    'Audio & Video Equipment': '🎧',
    'Smart Home Devices': '🏠',
    'Phone & Computer Accessories': '🔌',
    'Cables & Chargers': '🔋',
    'Cosmetics & Makeup': '💅',
    'Skincare Products': '🧴',
    'Hair Care & Styling': '💇',
    'Perfumes & Fragrances': '🌸',
    'Fitness Equipment': '🏋️',
    'Outdoor & Camping': '⛺',
    'Sports Apparel & Shoes': '👟',
    'Children\'s Toys': '🧸',
    'Baby Care Products': '🍼',
    'Educational Toys & Books': '📚',
    'Stationery & Paper': '✏️',
    'Office Equipment': '🖨️',
    'School Supplies': '🎒',
    'Auto Parts & Accessories': '🔧',
    'Motorcycle Parts': '🏍️',
    'Car Electronics': '📻',
    'Fashion Jewelry': '💍',
    'Watches & Timepieces': '⌚',
    'Bags & Handbags': '👜',
    'Belts & Scarves': '🧣',
    'Women\'s Shoes': '👠',
    'Men\'s Shoes': '👞',
    'Children\'s Shoes': '👟',
    'Packaged Foods & Snacks': '🍿',
    'Tea & Coffee': '☕',
    'Medical Supplies': '🩺',
    'Health Supplements': '💊',
    'Hand & Power Tools': '🔨',
    'Industrial Equipment': '🏭',
    'Art Supplies': '🎨',
    'Craft Materials': '✂️',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">1688.com Real Suppliers</h1>
          <p className="text-gray-600 mt-2">
            {getStoreCount()} verified real factories across {getCategoryCount()} categories
          </p>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold">{getStoreCount()}</div>
              <div className="text-sm opacity-90">Real Suppliers</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{getCategoryCount()}</div>
              <div className="text-sm opacity-90">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold">2,678</div>
              <div className="text-sm opacity-90">Total Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm opacity-90">Real Factories</div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="container mx-auto px-4 pb-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 w-full">
              <label htmlFor="store-search" className="block text-sm font-medium text-gray-700 mb-2">
                🔍 Search Stores
              </label>
              <div className="relative">
                <input
                  id="store-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder="Search by name, location, category... (English or 中文)"
                  className="w-full px-4 py-3 pl-12 pr-12 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                {searchQuery && (
                  <button
                    onClick={() => handleSearchChange('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Clear search"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
              {searchQuery && (
                <p className="mt-2 text-sm text-gray-600">
                  Found <span className="font-semibold text-blue-600">{filteredStores.length}</span> {filteredStores.length === 1 ? 'store' : 'stores'} matching &quot;{searchQuery}&quot;
                </p>
              )}
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <button
                onClick={() => {
                  handleSearchChange('');
                  handleCategoryChange(null);
                }}
                className="flex-1 md:flex-none px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Active Filters */}
      {(searchQuery || selectedCategory) && (
        <div className="container mx-auto px-4 pb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Active Filters:</span>
              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-blue-300 text-blue-700 rounded-full text-sm">
                  🔍 &quot;{searchQuery}&quot;
                  <button
                    onClick={() => handleSearchChange('')}
                    className="hover:text-blue-900"
                    aria-label="Remove search filter"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              )}
              {selectedCategory && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-blue-300 text-blue-700 rounded-full text-sm">
                  {categoryEmojis[selectedCategory] || '📦'} {selectedCategory}
                  <button
                    onClick={() => handleCategoryChange(null)}
                    className="hover:text-blue-900"
                    aria-label="Remove category filter"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              )}
              <button
                onClick={() => {
                  handleSearchChange('');
                  handleCategoryChange(null);
                }}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium ml-2"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Category Filter */}
      <div className="container mx-auto px-4 pb-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Filter by Category
            <span className="text-sm font-normal text-gray-500 ml-2">
              ({getCategoryCount()} real categories)
            </span>
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {/* All Stores Button */}
            <button
              onClick={() => handleCategoryChange(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
              }`}
            >
              🏪 All Suppliers ({getStoreCount()})
            </button>

            {/* Category Buttons */}
            {allCategories.map((category) => {
              const storeCount = getStoresByCategory(category).length;
              const emoji = categoryEmojis[category] || '📦';
              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {emoji} {category} ({storeCount})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Store Grid */}
      <div className="container mx-auto px-4 pb-12">
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory || 'All Stores'}
            </h2>
            <p className="text-gray-600 mt-1">
              Showing {startIndex + 1}-{Math.min(endIndex, filteredStores.length)} of {filteredStores.length} {filteredStores.length === 1 ? 'store' : 'stores'}
            </p>
          </div>
          <div className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {storesToDisplay.map((store) => (
            <Link
              key={store.id}
              href={`/products?storeId=${store.id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105 duration-300 p-6 border border-gray-200"
            >
              {/* Store Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{storeEmojis[store.category] || '🏪'}</span>
                    <h2 className="text-xl font-bold text-gray-900">
                      {store.name}
                    </h2>
                  </div>
                  <p className="text-sm text-gray-500">{store.nameZh}</p>
                </div>
                {store.verified && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 ml-2 flex-shrink-0">
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

                {store.location && (
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{store.location}</span>
                  </div>
                )}

                {store.rating && (
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-medium">{store.rating}/5.0</span>
                  </div>
                )}

                <p className="text-sm text-gray-600 line-clamp-2">
                  {store.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="text-sm">
                    <span className="font-semibold text-gray-900">
                      {store.estimatedProducts.toLocaleString()}+
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

        {/* Empty State */}
        {storesToDisplay.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg border-2 border-dashed border-gray-300">
            <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No stores found</h3>
            <p className="text-gray-600 mb-4">
              {searchQuery && selectedCategory 
                ? `No stores match "${searchQuery}" in ${selectedCategory} category`
                : searchQuery 
                  ? `No stores match "${searchQuery}"`
                  : `No stores found in ${selectedCategory} category`}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange('')}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Clear Search
                </button>
              )}
              {selectedCategory && (
                <button
                  onClick={() => handleCategoryChange(null)}
                  className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  View All Stores
                </button>
              )}
              {(searchQuery || selectedCategory) && (
                <button
                  onClick={() => {
                    handleSearchChange('');
                    handleCategoryChange(null);
                  }}
                  className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  Reset All Filters
                </button>
              )}
            </div>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-2">
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600'
              }`}
            >
              ← Previous
            </button>

            {/* Page Numbers */}
            <div className="hidden sm:flex gap-2">
              {getPageNumbers().map((page, index) => (
                page === '...' ? (
                  <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-400">
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page as number)}
                    className={`min-w-[40px] px-3 py-2 rounded-lg font-medium transition-colors ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600'
                    }`}
                  >
                    {page}
                  </button>
                )
              ))}
            </div>

            {/* Mobile Page Indicator */}
            <div className="sm:hidden px-4 py-2 text-gray-700 font-medium">
              {currentPage} / {totalPages}
            </div>

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600'
              }`}
            >
              Next →
            </button>
          </div>
        )}

        {/* Scroll to Top Button */}
        {currentPage > 1 && (
          <div className="mt-6 text-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              ↑ Back to Top
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

