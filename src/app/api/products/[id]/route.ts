/**
 * API Route: GET /api/products/[id]
 * Fetch single product details from 1688.com
 */

import { NextRequest, NextResponse } from 'next/server';
import { fetchProductDetail } from '@/lib/alibaba-api';
import { Product, ProductDetailResponse } from '@/types/product';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const productId = params.id;

    if (!productId) {
      return NextResponse.json(
        { success: false, message: 'Product ID is required' },
        { status: 400 }
      );
    }

    // Call 1688 API
    const response = await fetchProductDetail(productId);

    // Transform the response to match our Product interface
    const item = response.result;
    const product: Product = {
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
      attributes: item.attributes || [],
      categoryId: item.categoryId,
      categoryName: item.categoryName,
    };

    const result: ProductDetailResponse = {
      success: true,
      product,
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in /api/products/[id]:', error);
    
    // Return mock data if API fails
    const mockProduct: Product = {
      id: params.id,
      productID: params.id,
      subject: 'Sample Product Details - Configure API to see real data',
      price: 99.99,
      priceRange: { min: 89.99, max: 119.99 },
      currency: 'CNY',
      imageUrl: 'https://via.placeholder.com/600x600?text=Product+Detail',
      images: [
        'https://via.placeholder.com/600x600?text=Image+1',
        'https://via.placeholder.com/600x600?text=Image+2',
        'https://via.placeholder.com/600x600?text=Image+3',
      ],
      description: 'This is a detailed mock product. Configure your 1688 API credentials in .env.local to see real product data from 1688.com',
      supplierName: 'Sample Supplier Co., Ltd',
      moq: 100,
      unit: 'piece',
      saleInfo: {
        soldQuantity: 5420,
        reviewCount: 342,
      },
      attributes: [
        { name: 'Color', value: 'Multiple' },
        { name: 'Material', value: 'High Quality' },
        { name: 'Size', value: 'Customizable' },
      ],
    };

    return NextResponse.json({
      success: true,
      product: mockProduct,
      message: 'Using mock data. Configure API credentials.',
    });
  }
}

