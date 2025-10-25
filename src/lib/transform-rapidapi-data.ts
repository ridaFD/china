/**
 * Transform RapidAPI 1688-datahub responses to our app's Product format
 */

import { Product, SupplierInfo } from '@/types/product';

/**
 * Transform RapidAPI product item to our Product format
 * Handles 1688-datahub API response structure
 */
export function transformProduct(item: any): Product {
  // Handle price from SKU definition or direct price
  let price = 0;
  let priceRange;
  
  if (item.sku?.def?.price) {
    const priceStr = item.sku.def.price;
    if (typeof priceStr === 'string' && priceStr.includes('-')) {
      const [min, max] = priceStr.split('-').map((p: string) => parseFloat(p.trim()));
      price = min;
      priceRange = { min, max };
    } else {
      price = parseFloat(priceStr);
    }
  } else {
    price = parseFloat(item.price || item.salePrice || item.priceNow || 0);
  }

  // Process images - ensure they have https:// protocol
  const processImageUrl = (url: string) => {
    if (!url) return 'https://via.placeholder.com/400';
    if (url.startsWith('http')) return url;
    return `https:${url}`;
  };

  const images = (item.images || item.pics || []).map(processImageUrl);
  const imageUrl = images[0] || processImageUrl(item.image || item.mainPic || item.pic || '');

  return {
    id: item.itemId || item.id || String(item.item_id),
    productID: item.itemId || item.id || String(item.item_id),
    subject: item.title || item.subject || item.name || 'Product',
    price,
    priceRange,
    currency: 'CNY',
    imageUrl,
    images,
    description: item.description?.url || item.desc || item.description || item.detail || '',
    supplierName: item.shop?.name || item.sellerNick || item.seller || item.supplierName || item.shopName || 'Supplier',
    supplierId: item.shop?.id || item.sellerId || item.storeId || item.shopId,
    supplierInfo: item.shop ? {
      id: item.shop.id || item.shop.userId || '',
      name: item.shop.name || item.shop.title || 'Supplier',
      isVerified: item.shop.isVerified || item.shop.isTrustMember || false,
      verificationLevel: (item.shop.verificationLevel || 'basic') as any,
      rating: parseFloat(item.shop.rating || item.shop.score || 0),
      totalTransactions: parseInt(item.shop.totalTrans || item.shop.soldQuantity || 0),
      responseRate: parseInt(item.shop.responseRate || 0),
      responseTime: item.shop.responseTime,
      location: item.shop.location || item.shop.area,
    } : undefined,
    moq: parseInt(item.sku?.def?.minOrder || item.moq || item.minOrderQty || item.minOrder || 1),
    unit: item.sku?.def?.unit || item.unit || item.unitName || 'piece',
    saleInfo: {
      soldQuantity: parseInt(item.sales || item.soldQuantity || item.sold || 0),
      reviewCount: parseInt(item.reviewCount || item.reviews || item.commentCount || 0),
    },
    categoryId: item.rootCatId || item.categoryId || item.catId,
    categoryName: item.categoryName || item.catName,
  };
}

/**
 * Transform RapidAPI search response
 * Handles 1688-datahub API response structure
 */
export function transformSearchResponse(response: any): {
  products: Product[];
  total: number;
} {
  // Handle 1688-datahub response structure
  // Response: { result: { items: [...], settings: { totalResults: X } } }
  const result = response.result || response;
  const items = result.items || result.data?.items || [];
  const total = result.settings?.totalResults || result.total || result.data?.total || items.length;

  const products = items.map((item: any) => transformProduct(item));

  return {
    products,
    total,
  };
}

/**
 * Transform product detail response
 * Handles 1688-datahub API response structure
 */
export function transformProductDetail(response: any): Product {
  // Handle 1688-datahub response: { result: { item: {...} } }
  const item = response.result?.item || response.item || response.data || response.result || response;
  return transformProduct(item);
}

