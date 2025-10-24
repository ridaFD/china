'use client';

import { categories } from '@/data/categories';
import CategoryGrid from '@/components/CategoryGrid';
import Link from 'next/link';

export default function CategoriesPage() {
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
              <span>Home</span>
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            All Product Categories
          </h1>
          <p className="text-gray-600 mt-1">
            Explore {categories.length} main categories with millions of products
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* All Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Main Categories
          </h2>
          <CategoryGrid categories={categories} />
        </div>

        {/* Categories with Subcategories */}
        <div className="space-y-12">
          {categories.filter(cat => cat.subcategories && cat.subcategories.length > 0).map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{category.icon}</span>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {category.nameEn}
                  </h2>
                  <p className="text-gray-600">{category.name}</p>
                  {category.description && (
                    <p className="text-sm text-gray-500 mt-1">
                      {category.description}
                    </p>
                  )}
                </div>
                <Link
                  href={`/products?categoryId=${category.id}`}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Browse
                </Link>
              </div>

              {/* Subcategories */}
              {category.subcategories && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Subcategories
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {category.subcategories.map((subcategory) => (
                      <Link
                        key={subcategory.id}
                        href={`/products?categoryId=${subcategory.id}`}
                        className="group"
                      >
                        <div className="bg-gray-50 hover:bg-blue-50 rounded-lg p-4 text-center border border-gray-200 hover:border-blue-500 transition-all">
                          <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                            {subcategory.icon}
                          </div>
                          <p className="text-xs font-medium text-gray-900 group-hover:text-blue-600">
                            {subcategory.nameEn}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {subcategory.name}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-gray-600">
            Built with Next.js | Powered by 1688.com API
          </p>
        </div>
      </footer>
    </div>
  );
}

