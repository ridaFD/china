/**
 * Featured 1688.com Stores
 * These stores have verified products and work with the free RapidAPI tier
 */

export interface FeaturedStore {
  id: string;
  name: string;
  nameZh: string;
  category: string;
  description: string;
  verified: boolean;
  estimatedProducts: number;
}

export const featuredStores: FeaturedStore[] = [
  {
    id: 'b2b-221162226231463a5d',
    name: 'Premium Footwear Store',
    nameZh: '鞋类批发商',
    category: 'Footwear',
    description: 'Men\'s and women\'s shoes, boots, and sports footwear',
    verified: true,
    estimatedProducts: 501,
  },
  {
    id: 'b2b-22129686061252fa5d',
    name: 'Quality Goods Supplier',
    nameZh: '优质商品供应商',
    category: 'General Merchandise',
    description: 'Wide variety of quality wholesale products',
    verified: true,
    estimatedProducts: 500,
  },
  {
    id: 'xingtaisp',
    name: 'Xingtai Specialty Store',
    nameZh: '邢台特产店',
    category: 'Accessories & Crafts',
    description: 'Traditional crafts, accessories, and specialty items',
    verified: true,
    estimatedProducts: 300,
  },
];

export const defaultStoreId = featuredStores[0].id;

export function getStoreById(storeId: string): FeaturedStore | undefined {
  return featuredStores.find(store => store.id === storeId);
}

export function getStoresByCategory(category: string): FeaturedStore[] {
  return featuredStores.filter(store => store.category === category);
}

