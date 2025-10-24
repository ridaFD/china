/**
 * API Route: GET /api/products
 * Fetch products from 1688.com
 */

import { NextRequest, NextResponse } from 'next/server';
import { fetchProducts } from '@/lib/alibaba-api';
import { Product, ProductListResponse } from '@/types/product';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const keyword = searchParams.get('keyword') || '';
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '20');

    // Call 1688 API
    const response = await fetchProducts({
      keyword,
      page,
      pageSize,
    });

    // Transform the response to match our Product interface
    // Note: You'll need to adjust this based on actual 1688 API response format
    const products: Product[] = (response.result?.products || []).map((item: any) => ({
      id: item.productId || item.offerId,
      productID: item.productId || item.offerId,
      subject: item.subject || item.title,
      price: item.price || item.priceRange?.startQuantity || 0,
      priceRange: item.priceRange ? {
        min: item.priceRange.startQuantity,
        max: item.priceRange.endQuantity,
      } : undefined,
      currency: 'CNY',
      imageUrl: item.image?.imgUrl || item.imageUrl || '',
      images: item.images?.map((img: any) => img.imgUrl || img) || [],
      description: item.description || item.details,
      supplierName: item.supplierName,
      supplierUrl: item.supplierUrl,
      moq: item.moq,
      unit: item.unit,
      saleInfo: {
        soldQuantity: item.soldQuantity,
        reviewCount: item.reviewCount,
      },
    }));

    const result: ProductListResponse = {
      success: true,
      products,
      total: response.result?.total || products.length,
      page,
      pageSize,
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in /api/products:', error);
    
    // Return mock data if API is not configured or fails
    const mockProducts: Product[] = [
      {
        id: '1',
        productID: 'mock-001',
        subject: 'Sample Product 1 - Configure API credentials to see real products',
        price: 99.99,
        currency: 'CNY',
        imageUrl: 'https://via.placeholder.com/300x300?text=Product+1',
        description: 'This is a mock product. Configure your 1688 API credentials in .env.local',
        moq: 100,
        unit: 'piece',
      },
      {
        id: '2',
        productID: 'mock-002',
        subject: 'Sample Product 2 - Add your Alibaba App Key',
        price: 149.99,
        currency: 'CNY',
        imageUrl: 'https://via.placeholder.com/300x300?text=Product+2',
        description: 'Mock product for testing UI',
        moq: 50,
        unit: 'piece',
      },
    ];

    return NextResponse.json({
      success: true,
      products: mockProducts,
      total: mockProducts.length,
      page: 1,
      pageSize: 20,
      message: 'Using mock data. Configure API credentials to fetch real products.',
    });
  }
}

