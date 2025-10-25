/**
 * Featured 1688.com Stores - Comprehensive Catalog
 * Now organized by 55+ SPECIFIC SUBCATEGORIES matching real 1688.com
 * 
 * Store data is split into subcategories like:
 * 
 * HOME & LIVING (300 stores):
 * - Home Decor & Decorations, Candles & Fragrances, Vases & Planters
 * - Kitchen & Dining, Bathroom Fixtures, Lighting & Lamps, Furniture
 * - Garden & Outdoor, Bedding & Textiles, Storage & Organization
 * 
 * FASHION & CLOTHING (250 stores):
 * - Women's Clothing, Men's Clothing, Children's Clothing
 * - Sportswear & Activewear, Lingerie & Underwear, Swimwear & Beachwear
 * - Outerwear & Coats, Uniforms & Workwear
 * 
 * ELECTRONICS & TECH (150 stores):
 * - Mobile Phones & Tablets, Computers & Laptops, Audio & Video Equipment
 * - Smart Home Devices, Phone & Computer Accessories, Cables & Chargers
 * 
 * And 40+ more specific subcategories...
 * 
 * Total: 1380+ stores across 55+ subcategories (like real 1688.com)
 */

import { allStores, FeaturedStore, storeCategories, categoryGroups } from './stores';

// Re-export types and categories
export type { FeaturedStore };
export { storeCategories, categoryGroups };

// Use stores from organized subcategory files
export const featuredStores: FeaturedStore[] = allStores;

// Default store ID (first store)
export const defaultStoreId = featuredStores[0]?.id || 'b2b-2211234567890123a5d';

/**
 * Get store by ID
 */
export function getStoreById(storeId: string): FeaturedStore | undefined {
  return featuredStores.find(store => store.id === storeId);
}

/**
 * Get stores by subcategory
 */
export function getStoresByCategory(category: string): FeaturedStore[] {
  return featuredStores.filter(store => store.category === category);
}

/**
 * Get stores by main category group (e.g., "Home & Living", "Fashion & Clothing")
 */
export function getStoresByCategoryGroup(groupName: string): FeaturedStore[] {
  const categories = categoryGroups[groupName as keyof typeof categoryGroups] || [];
  return featuredStores.filter(store => (categories as readonly string[]).includes(store.category));
}

/**
 * Get all unique subcategories
 */
export function getAllCategories(): string[] {
  return [...new Set(featuredStores.map(store => store.category))].sort();
}

/**
 * Get all main category groups
 */
export function getCategoryGroups(): string[] {
  return Object.keys(categoryGroups);
}

/**
 * Get total store count
 */
export function getStoreCount(): number {
  return featuredStores.length;
}

/**
 * Get subcategory count
 */
export function getCategoryCount(): number {
  return getAllCategories().length;
}
