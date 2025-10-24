'use client';

import { Product } from '@/types/product';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('zh-CN', {
      style: 'currency',
      currency: 'CNY',
    }).format(price);
  };

  return (
    <Link href={`/products/${product.id}`}>
      <div className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-500">
        {/* Product Image */}
        <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
          <Image
            src={product.imageUrl || '/placeholder-product.png'}
            alt={product.subject}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* MOQ Badge */}
          {product.moq && (
            <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
              MOQ: {product.moq}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Product Title */}
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2 min-h-[40px] group-hover:text-blue-600 transition-colors">
            {product.subject}
          </h3>

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-2">
            {product.priceRange ? (
              <>
                <span className="text-xl font-bold text-red-600">
                  {formatPrice(product.priceRange.min)}
                </span>
                <span className="text-sm text-gray-500">
                  - {formatPrice(product.priceRange.max)}
                </span>
              </>
            ) : (
              <span className="text-xl font-bold text-red-600">
                {formatPrice(product.price)}
              </span>
            )}
          </div>

          {/* Supplier Info */}
          {product.supplierName && (
            <p className="text-xs text-gray-500 mb-2 truncate">
              {product.supplierName}
            </p>
          )}

          {/* Sales Info */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            {product.saleInfo?.soldQuantity && (
              <span>Sold: {product.saleInfo.soldQuantity.toLocaleString()}</span>
            )}
            {product.unit && (
              <span className="capitalize">Unit: {product.unit}</span>
            )}
          </div>
        </div>

        {/* Hover Action */}
        <div className="px-4 pb-4">
          <button className="w-full bg-blue-600 text-white py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-blue-700">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
}

