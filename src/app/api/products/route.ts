/**
 * API Route: GET /api/products
 * Fetch products from 1688.com via RapidAPI
 */

import { NextRequest, NextResponse } from 'next/server';
import { searchProducts } from '@/lib/rapidapi-1688';
import { transformSearchResponse } from '@/lib/transform-rapidapi-data';
import { Product, ProductListResponse } from '@/types/product';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const keyword = searchParams.get('keyword') || '';
    const categoryId = searchParams.get('categoryId') || '';
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '20');

    console.log(`Fetching products from RapidAPI: keyword="${keyword}", page=${page}`);

    // Call RapidAPI 1688-datahub
    const response = await searchProducts({
      keyword,
      categoryId,
      page,
      pageSize,
    });

    // Transform RapidAPI response to our format
    const { products, total } = transformSearchResponse(response);

    console.log(`✅ Fetched ${products.length} real products from 1688!`);

    const result: ProductListResponse = {
      success: true,
      products,
      total,
      page,
      pageSize,
      message: `Showing real products from 1688.com via RapidAPI`,
      isRealData: true,
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in /api/products:', error);
    
    // Check if error is due to missing credentials
    const errorMessage = error instanceof Error ? error.message : '';
    const isMissingCredentials = errorMessage.includes('credentials not configured');
    
    const searchParams = request.nextUrl.searchParams;
    const categoryId = searchParams.get('categoryId') || '';
    const keyword = searchParams.get('keyword') || '';
    const page = parseInt(searchParams.get('page') || '1');
    
    // Generate more realistic mock data
    const mockProducts: Product[] = Array.from({ length: 20 }, (_, i) => {
      const productNum = (page - 1) * 20 + i + 1;
      return {
        id: `mock-${productNum}`,
        productID: `mock-${productNum}`,
        subject: `${categoryId || 'Sample'} Product ${productNum} - ${keyword || 'Configure API to see real products'}`,
        price: Math.floor(Math.random() * 500) + 50,
        priceRange: {
          min: Math.floor(Math.random() * 300) + 50,
          max: Math.floor(Math.random() * 500) + 400,
        },
        currency: 'CNY',
        imageUrl: `https://picsum.photos/seed/${productNum}/400/400`,
        images: [
          `https://picsum.photos/seed/${productNum}/400/400`,
          `https://picsum.photos/seed/${productNum + 1000}/400/400`,
          `https://picsum.photos/seed/${productNum + 2000}/400/400`,
        ],
        description: `High quality ${categoryId || 'wholesale'} product. Configure your 1688 API credentials in .env.local to see real products from 1688.com.`,
        supplierName: `Supplier ${Math.floor(Math.random() * 100) + 1} Co., Ltd`,
        supplierId: `supplier-${Math.floor(Math.random() * 100)}`,
        supplierInfo: {
          id: `supplier-${Math.floor(Math.random() * 100)}`,
          name: `${categoryId || 'Quality'} Manufacturer ${Math.floor(Math.random() * 100) + 1}`,
          isVerified: Math.random() > 0.3,
          verificationLevel: ['gold', 'premium', 'basic'][Math.floor(Math.random() * 3)] as 'gold' | 'premium' | 'basic',
          rating: Math.random() * 1.5 + 3.5,
          totalTransactions: Math.floor(Math.random() * 50000) + 1000,
          responseRate: Math.floor(Math.random() * 20) + 80,
          responseTime: 'within 24 hours',
          yearEstablished: Math.floor(Math.random() * 20) + 2004,
          location: ['Guangzhou', 'Shenzhen', 'Shanghai', 'Yiwu', 'Hangzhou'][Math.floor(Math.random() * 5)],
          badges: [
            { type: 'verified', label: 'Verified Supplier' },
            Math.random() > 0.5 ? { type: 'top-seller', label: 'Top Seller' } : { type: 'fast-shipping', label: 'Fast Shipping' },
          ].filter(Boolean) as any,
        },
        moq: [50, 100, 200, 500, 1000][Math.floor(Math.random() * 5)],
        unit: 'piece',
        categoryId: categoryId || 'general',
        saleInfo: {
          soldQuantity: Math.floor(Math.random() * 10000) + 100,
          reviewCount: Math.floor(Math.random() * 500) + 10,
        },
      };
    });

    const message = isMissingCredentials
      ? '⚠️ MOCK DATA: Real 1688.com API credentials not configured. See API_SETUP_GUIDE.md for instructions on getting real products.'
      : '⚠️ MOCK DATA: API request failed. Using mock data as fallback.';

    return NextResponse.json({
      success: true,
      products: mockProducts,
      total: 500, // Mock total
      page,
      pageSize: 20,
      message,
      isRealData: false,
      howToGetRealData: {
        step1: 'Register at https://open.1688.com',
        step2: 'Create application and get App Key + App Secret',
        step3: 'Add credentials to .env.local file',
        step4: 'See API_SETUP_GUIDE.md for detailed instructions',
      },
    });
  }
}

