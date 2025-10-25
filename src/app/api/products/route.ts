/**
 * API Route: GET /api/products
 * Fetch products from 1688.com via RapidAPI using store_item_search
 */

import { NextRequest, NextResponse } from 'next/server';
import { searchStoreProducts } from '@/lib/rapidapi-1688';
import { Product, ProductListResponse } from '@/types/product';
import { defaultStoreId } from '@/data/featured-stores';

/**
 * Transform store search response to Product format
 */
function transformStoreProduct(item: any): Product {
  // Process images - ensure they have https:// protocol
  const processImageUrl = (url: string) => {
    if (!url) return 'https://via.placeholder.com/400';
    if (url.startsWith('http')) return url;
    return `https:${url}`;
  };

  const imageUrl = processImageUrl(item.image || item.mainPic || '');

  // Parse price from SKU or direct price field
  let price = 0;
  let priceRange;
  
  // Priority: sku.def.price > price > priceRange
  if (item.sku?.def?.price) {
    price = parseFloat(item.sku.def.price);
  } else if (item.price) {
    price = parseFloat(item.price);
  } else if (item.priceRange) {
    const priceStr = item.priceRange;
    if (typeof priceStr === 'string' && priceStr.includes('-')) {
      const [min, max] = priceStr.split('-').map((p: string) => parseFloat(p.trim()));
      price = min;
      priceRange = { min, max };
    } else {
      price = parseFloat(priceStr);
    }
  }

  return {
    id: item.itemId || item.id,
    productID: item.itemId || item.id,
    subject: item.title || 'Product',
    price,
    priceRange,
    currency: 'CNY',
    imageUrl,
    images: [imageUrl],
    description: item.description || '',
    supplierName: item.shopName || item.sellerNick || 'Supplier',
    supplierId: item.storeId || item.shopId,
    moq: parseInt(item.sku?.def?.minOrder || item.moq || 1),
    unit: item.sku?.def?.unit || item.unit || 'piece',
    saleInfo: {
      soldQuantity: parseInt(item.sales || 0),
      reviewCount: 0,
    },
    categoryId: item.rootCatId || item.catId,
  };
}

/**
 * Map display store IDs to real API store IDs
 */
function mapToApiStoreId(displayId: string): string {
  // Map display IDs to actual 1688.com store IDs (5 stores total)
  if (displayId.startsWith('fashion-')) {
    return 'b2b-22129686061252fa5d'; // Fashion store (161 products)
  } else if (displayId.startsWith('xingtaisp-')) {
    return 'xingtaisp'; // Crafts/Decor store (232 products)
  } else if (displayId.startsWith('jiaju-')) {
    return 'jiaju'; // Home/Furniture store (1071 products)
  } else if (displayId.startsWith('vase-')) {
    return 'vase'; // Vases/Planters store (103 products) 🏺 NEW!
  } else if (displayId.startsWith('electronics-')) {
    return 'b2b-221162226231463a5d'; // Electronics store (501 products)
  }
  
  // If it's already a real store ID, use it as-is
  return displayId;
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const displayStoreId = searchParams.get('storeId') || searchParams.get('categoryId') || defaultStoreId;
    const storeId = mapToApiStoreId(displayStoreId); // Map to real API store ID
    const keyword = searchParams.get('keyword') || '';
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '20');

    console.log(`Fetching products from store: ${displayStoreId} (API: ${storeId}), keyword: "${keyword}", page: ${page}`);

    // Call RapidAPI store_item_search endpoint with keyword support
    const response = await searchStoreProducts({
      storeId,
      keyword,  // Pass keyword to search within store
      page,
      pageSize,
    });

    // Check if API returned error
    if (response?.result?.status?.code !== 200) {
      console.error('Store search failed:', response?.result?.status);
      throw new Error('Store search failed');
    }

    // Extract products from response
    // Response structure: result.resultList[].item
    const resultList = response.result?.resultList || [];
    const products = resultList.map((result: any) => transformStoreProduct(result.item));

    // Get total from base
    const total = response.result?.base?.totalResults || products.length;
    const totalPages = response.result?.base?.totalPages || 1;

    console.log(`✅ Fetched ${products.length} real products from store ${storeId}!`);

    const message = keyword 
      ? `Found ${products.length} products matching "${keyword}" in store`
      : `Showing products from 1688.com store via RapidAPI`;

    const result: ProductListResponse = {
      success: true,
      products,
      total: parseInt(total),
      page,
      pageSize,
      totalPages,
      message,
      isRealData: true,
      storeId: displayStoreId, // Use display ID for frontend
      keyword: keyword || undefined,
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in /api/products:', error);
    
    const searchParams = request.nextUrl.searchParams;
    const displayStoreId = searchParams.get('storeId') || defaultStoreId;
    const page = parseInt(searchParams.get('page') || '1');

    // Generate helpful fallback products with clear messaging
    const mockProducts: Product[] = Array.from({ length: 10 }, (_, i) => {
      const productNum = (page - 1) * 10 + i + 1;
      return {
        id: `sample-${productNum}`,
        productID: `sample-${productNum}`,
        subject: `Sample Product ${productNum} - API Error, showing fallback data`,
        price: Math.floor(Math.random() * 500) + 10,
        priceRange: {
          min: Math.floor(Math.random() * 300) + 10,
          max: Math.floor(Math.random() * 500) + 300,
        },
        currency: 'CNY',
        imageUrl: `https://picsum.photos/seed/${productNum}/400/400`,
        images: [`https://picsum.photos/seed/${productNum}/400/400`],
        description: 'Sample product. The store_item_search API encountered an error.',
        supplierName: `Store ${displayStoreId}`,
        supplierId: displayStoreId,
        moq: 50,
        unit: 'piece',
        saleInfo: {
          soldQuantity: Math.floor(Math.random() * 1000),
          reviewCount: Math.floor(Math.random() * 100),
        },
      };
    });

    return NextResponse.json({
      success: true,
      products: mockProducts,
      total: mockProducts.length,
      page,
      pageSize: mockProducts.length,
      message: '⚠️ API Error: Showing sample products. Please check your API connection.',
      isRealData: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
