'use client';

import { PriceComparisonProduct } from '@/types/product';
import ProductCard from './ProductCard';

interface PriceComparisonProps {
  products: PriceComparisonProduct[];
  title?: string;
}

export default function PriceComparison({ products, title = 'Compare Similar Products' }: PriceComparisonProps) {
  if (products.length === 0) {
    return null;
  }

  // Sort products by price
  const sortedProducts = [...products].sort((a, b) => a.price - b.price);
  
  // Calculate savings
  const maxPrice = Math.max(...sortedProducts.map(p => p.price));
  const productsWithSavings: PriceComparisonProduct[] = sortedProducts.map((product, index) => ({
    ...product,
    pricePerUnit: product.moq ? product.price / product.moq : product.price,
    savingsPercentage: ((maxPrice - product.price) / maxPrice) * 100,
    isBestPrice: index === 0,
  }));

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <span className="text-sm text-gray-500">
          {products.length} {products.length === 1 ? 'product' : 'products'}
        </span>
      </div>

      {/* Comparison Table View */}
      <div className="hidden lg:block overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Product</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Supplier</th>
              <th className="px-4 py-3 text-right font-semibold text-gray-700">Price</th>
              <th className="px-4 py-3 text-right font-semibold text-gray-700">MOQ</th>
              <th className="px-4 py-3 text-right font-semibold text-gray-700">Price/Unit</th>
              <th className="px-4 py-3 text-center font-semibold text-gray-700">Rating</th>
              <th className="px-4 py-3 text-center font-semibold text-gray-700">Savings</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {productsWithSavings.map((product) => (
              <tr
                key={product.id}
                className={`hover:bg-gray-50 ${product.isBestPrice ? 'bg-green-50' : ''}`}
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={product.imageUrl}
                      alt={product.subject}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 line-clamp-1">
                        {product.subject}
                      </p>
                      {product.isBestPrice && (
                        <span className="inline-flex items-center gap-1 text-xs text-green-600 font-medium">
                          <span>🏆</span> Best Price
                        </span>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div>
                    <p className="text-gray-900 truncate max-w-[150px]">
                      {product.supplierInfo?.name || product.supplierName}
                    </p>
                    {product.supplierInfo?.isVerified && (
                      <span className="text-xs text-blue-600">✓ Verified</span>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3 text-right">
                  <span className="font-bold text-red-600">
                    ¥{product.price.toFixed(2)}
                  </span>
                </td>
                <td className="px-4 py-3 text-right text-gray-600">
                  {product.moq || 'N/A'}
                </td>
                <td className="px-4 py-3 text-right text-gray-600">
                  {product.pricePerUnit
                    ? `¥${product.pricePerUnit.toFixed(2)}`
                    : 'N/A'}
                </td>
                <td className="px-4 py-3 text-center">
                  {product.supplierInfo?.rating ? (
                    <span className="flex items-center justify-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span>{product.supplierInfo.rating.toFixed(1)}</span>
                    </span>
                  ) : (
                    <span className="text-gray-400">-</span>
                  )}
                </td>
                <td className="px-4 py-3 text-center">
                  {product.savingsPercentage && product.savingsPercentage > 0 ? (
                    <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      Save {product.savingsPercentage.toFixed(0)}%
                    </span>
                  ) : (
                    <span className="text-gray-400">-</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card Grid View (Mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-4">
        {productsWithSavings.map((product) => (
          <div key={product.id} className="relative">
            {product.isBestPrice && (
              <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                🏆 Best Price
              </div>
            )}
            <ProductCard product={product} />
            {product.savingsPercentage && product.savingsPercentage > 0 && (
              <div className="mt-2 text-center">
                <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Save {product.savingsPercentage.toFixed(0)}%
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

