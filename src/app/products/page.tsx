'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import SearchBar from '@/components/SearchBar';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Product, ProductListResponse } from '@/types/product';

function ProductsContent() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const keyword = searchParams.get('keyword') || '';
        const page = searchParams.get('page') || '1';
        
        const response = await fetch(
          `/api/products?keyword=${encodeURIComponent(keyword)}&page=${page}&pageSize=20`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const data: ProductListResponse = await response.json();
        
        if (data.success) {
          setProducts(data.products);
          setTotal(data.total);
          setCurrentPage(data.page);
        } else {
          setError(data.message || 'Failed to load products');
        }
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchParams]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {/* Search Bar */}
      <div className="mb-8">
        <SearchBar />
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg mb-6">
          <p>{error}</p>
        </div>
      )}

      {/* Results Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {searchParams.get('keyword') ? (
            <>
              Search Results for &quot;{searchParams.get('keyword')}&quot;
            </>
          ) : (
            'All Products'
          )}
        </h2>
        <p className="text-gray-600 mt-1">
          Found {total} {total === 1 ? 'product' : 'products'}
        </p>
      </div>

      {/* Products Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found</p>
          <p className="text-gray-400 mt-2">Try a different search term</p>
        </div>
      )}

      {/* Pagination */}
      {total > 20 && (
        <div className="mt-12 flex justify-center gap-2">
          {currentPage > 1 && (
            <button
              onClick={() => {
                const params = new URLSearchParams(searchParams.toString());
                params.set('page', String(currentPage - 1));
                window.location.href = `/products?${params.toString()}`;
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Previous
            </button>
          )}
          
          <span className="px-4 py-2 text-gray-700">
            Page {currentPage} of {Math.ceil(total / 20)}
          </span>
          
          {currentPage < Math.ceil(total / 20) && (
            <button
              onClick={() => {
                const params = new URLSearchParams(searchParams.toString());
                params.set('page', String(currentPage + 1));
                window.location.href = `/products?${params.toString()}`;
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Next
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            1688.com Product Browser
          </h1>
          <p className="text-gray-600 mt-1">
            Browse and search products from China&apos;s largest wholesale marketplace
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Suspense fallback={<LoadingSpinner />}>
          <ProductsContent />
        </Suspense>
      </main>
    </div>
  );
}

