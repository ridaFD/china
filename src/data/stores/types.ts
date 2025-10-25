/**
 * Store type definitions shared across all category files
 */

export interface FeaturedStore {
  id: string;
  name: string;
  nameZh: string;
  category: string;
  description: string;
  verified: boolean;
  estimatedProducts: number;
  location?: string;
  rating?: number;
}

export const storeCategories = [
  'Electronics & Digital',
  'Fashion & Apparel',
  'Home & Garden',
  'Beauty & Personal Care',
  'Sports & Outdoors',
  'Toys & Baby Products',
  'Office & School Supplies',
  'Automotive & Motorcycle',
  'Jewelry & Accessories',
  'Food & Beverages',
  'Health & Medical',
  'Tools & Hardware',
  'Arts & Crafts',
  'Bags & Luggage',
  'Footwear',
] as const;

