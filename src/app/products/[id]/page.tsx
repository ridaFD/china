'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Product, ProductDetailResponse } from '@/types/product';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`/api/products/${params.id}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        
        const data: ProductDetailResponse = await response.json();
        
        if (data.success && data.product) {
          setProduct(data.product);
        } else {
          setError(data.message || 'Product not found');
        }
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Failed to load product details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('zh-CN', {
      style: 'currency',
      currency: 'CNY',
    }).format(price);
  };

  const convertToUSD = (cnyPrice: number) => {
    const rate = 0.14; // Approximate rate
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(cnyPrice * rate);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {error || 'Product not found'}
          </h1>
          <Link
            href="/products"
            className="text-blue-600 hover:text-blue-700 underline"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const images = product.images && product.images.length > 0 
    ? product.images 
    : [product.imageUrl];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/products"
            className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
          >
            <span>←</span>
            <span>Back to Products</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Image Gallery */}
            <div>
              {/* Main Image */}
              <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden mb-4">
                <Image
                  src={images[selectedImage] || '/placeholder-product.png'}
                  alt={product.subject}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Thumbnail Images */}
              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative h-20 bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === index
                          ? 'border-blue-600'
                          : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.subject} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="100px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div>
              {/* Title */}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.subject}
              </h1>

              {/* Price */}
              <div className="mb-6 pb-6 border-b">
                {product.priceRange ? (
                  <div>
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-3xl font-bold text-red-600">
                        {formatPrice(product.priceRange.min)}
                      </span>
                      <span className="text-xl text-gray-600">-</span>
                      <span className="text-3xl font-bold text-red-600">
                        {formatPrice(product.priceRange.max)}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm">
                      ≈ {convertToUSD(product.priceRange.min)} - {convertToUSD(product.priceRange.max)}
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="text-3xl font-bold text-red-600 mb-2">
                      {formatPrice(product.price)}
                    </div>
                    <p className="text-gray-500 text-sm">
                      ≈ {convertToUSD(product.price)}
                    </p>
                  </div>
                )}
              </div>

              {/* Key Information */}
              <div className="space-y-4 mb-6">
                {product.moq && (
                  <div className="flex items-center justify-between py-3 border-b">
                    <span className="text-gray-600">Minimum Order Quantity:</span>
                    <span className="font-semibold text-gray-900">
                      {product.moq} {product.unit || 'pieces'}
                    </span>
                  </div>
                )}

                {product.supplierName && (
                  <div className="flex items-center justify-between py-3 border-b">
                    <span className="text-gray-600">Supplier:</span>
                    <span className="font-semibold text-gray-900">
                      {product.supplierName}
                    </span>
                  </div>
                )}

                {product.saleInfo?.soldQuantity && (
                  <div className="flex items-center justify-between py-3 border-b">
                    <span className="text-gray-600">Total Sold:</span>
                    <span className="font-semibold text-gray-900">
                      {product.saleInfo.soldQuantity.toLocaleString()}
                    </span>
                  </div>
                )}

                {product.categoryName && (
                  <div className="flex items-center justify-between py-3 border-b">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-semibold text-gray-900">
                      {product.categoryName}
                    </span>
                  </div>
                )}
              </div>

              {/* Attributes */}
              {product.attributes && product.attributes.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Product Specifications
                  </h3>
                  <div className="space-y-2">
                    {product.attributes.map((attr, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-2 px-4 bg-gray-50 rounded-lg"
                      >
                        <span className="text-gray-600">{attr.name}:</span>
                        <span className="font-medium text-gray-900">
                          {attr.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Contact Supplier
                </button>
                <button className="w-full border-2 border-blue-600 text-blue-600 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Add to Inquiry List
                </button>
              </div>

              {/* Note */}
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> This is a wholesale product from 1688.com. 
                  Minimum order quantities apply. Contact the supplier for shipping 
                  and payment details.
                </p>
              </div>
            </div>
          </div>

          {/* Description Section */}
          {product.description && (
            <div className="border-t p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Product Description
              </h2>
              <div className="prose max-w-none text-gray-700">
                {product.description}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

