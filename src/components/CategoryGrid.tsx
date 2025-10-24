'use client';

import { Category } from '@/types/product';
import Link from 'next/link';

interface CategoryGridProps {
  categories: Category[];
  showCount?: boolean;
}

export default function CategoryGrid({ categories, showCount = true }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/products?categoryId=${category.id}`}
          className="group"
        >
          <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-200 hover:border-blue-500">
            {/* Icon */}
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
              {category.icon}
            </div>
            
            {/* Category Name */}
            <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
              {category.nameEn}
            </h3>
            
            <p className="text-xs text-gray-500 mb-2">{category.name}</p>
            
            {/* Product Count */}
            {showCount && category.productCount && (
              <p className="text-xs text-gray-400">
                {(category.productCount / 1000).toFixed(0)}K+ items
              </p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}

