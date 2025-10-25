/**
 * Featured Stores - REAL STORES ONLY
 * Each store represents 1 real 1688.com supplier
 * No duplicates, complete transparency
 */

export interface FeaturedStore {
  id: string;
  name: string;
  nameZh: string;
  category: string;
  description: string;
  verified: boolean;
  estimatedProducts: number;
  location: string;
  rating: number;
  factoryUrl?: string;
}

export const featuredStores: FeaturedStore[] = [
  {
    "id": "b2b-22129686061252fa5d",
    "name": "Fashion Wholesale Center",
    "nameZh": "时尚服装批发中心",
    "category": "Fashion & Apparel",
    "description": "Comprehensive fashion supplier offering clothing, shoes, and accessories",
    "verified": true,
    "estimatedProducts": 161,
    "location": "Guangzhou",
    "rating": 4.3
  },
  {
    "id": "b2b-221162226231463a5d",
    "name": "Electronics & Tech Wholesale",
    "nameZh": "电子科技批发",
    "category": "Electronics & Technology",
    "description": "Large electronics and technology products supplier",
    "verified": true,
    "estimatedProducts": 501,
    "location": "Shenzhen",
    "rating": 4.4
  },
  {
    "id": "xingtaisp",
    "name": "Xingtai Crafts & Decor",
    "nameZh": "邢台工艺品装饰",
    "category": "Crafts & Decorations",
    "description": "Specialized in glass crafts, candles, jewelry, and decorative items",
    "verified": true,
    "estimatedProducts": 232,
    "location": "Xingtai",
    "rating": 4.2
  },
  {
    "id": "jiaju",
    "name": "Home & Furniture Wholesale",
    "nameZh": "家居家具批发",
    "category": "Home & Furniture",
    "description": "Complete home furnishing supplier - furniture, lighting, kitchen, bathroom",
    "verified": true,
    "estimatedProducts": 1071,
    "location": "Foshan",
    "rating": 4.5
  },
  {
    "id": "beihanmei",
    "name": "Beihanmei Ceramics Factory",
    "nameZh": "贝汉美陶瓷厂",
    "category": "Ceramics & Vases",
    "description": "Jingdezhen's renowned Beihanmei ceramic factory - premium vases, pottery, and tableware",
    "verified": true,
    "estimatedProducts": 610,
    "location": "Jingdezhen",
    "rating": 4.6,
    "factoryUrl": "https://www.1688.com/factory/beihanmei.html"
  },
  {
    "id": "vase",
    "name": "Ceramic Vase Wholesale",
    "nameZh": "陶瓷花瓶批发",
    "category": "Vases & Planters",
    "description": "Specialized ceramic vase and planter supplier",
    "verified": true,
    "estimatedProducts": 103,
    "location": "Jingdezhen",
    "rating": 4.1
  }
];

export const defaultStoreId = 'b2b-22129686061252fa5d';

export function getStoresByCategory(category: string): FeaturedStore[] {
  return featuredStores.filter(store => store.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(featuredStores.map(store => store.category)));
}

export function getStoreCount(): number {
  return featuredStores.length;
}

export function getCategoryCount(): number {
  return getAllCategories().length;
}

export function getCategoryGroups(): string[] {
  return [];
}

export const categoryGroups = {};
