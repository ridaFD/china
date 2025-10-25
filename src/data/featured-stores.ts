/**
 * Featured 1688.com Stores - Comprehensive Catalog
 * Now organized in separate files by category for better maintainability
 * 
 * Store data is split into:
 * - src/data/stores/electronics.ts (90 stores)
 * - src/data/stores/fashion.ts (100 stores)
 * - src/data/stores/home.ts (80 stores)
 * - src/data/stores/beauty.ts (60 stores)
 * - src/data/stores/sports.ts (60 stores)
 * - src/data/stores/toys.ts (60 stores)
 * - src/data/stores/office.ts (50 stores)
 * - src/data/stores/automotive.ts (70 stores)
 * - src/data/stores/jewelry.ts (80 stores)
 * - src/data/stores/food.ts (50 stores)
 * - src/data/stores/health.ts (45 stores)
 * - src/data/stores/tools.ts (65 stores)
 * - src/data/stores/arts.ts (55 stores)
 * - src/data/stores/bags.ts (60 stores)
 * - src/data/stores/footwear.ts (69 stores)
 * 
 * Total: 1000 stores across 15 categories
 */

import { allStores, FeaturedStore, storeCategories } from './stores';

// Re-export types for backward compatibility
export type { FeaturedStore };
export { storeCategories };

// Use stores from organized category files
export const featuredStores: FeaturedStore[] = allStores;

// Default store ID (first electronics store)
export const defaultStoreId = featuredStores[0]?.id || 'b2b-2211234567890123a5d';

/**
 * Get store by ID
 */
export function getStoreById(storeId: string): FeaturedStore | undefined {
  return featuredStores.find(store => store.id === storeId);
}

/**
 * Get stores by category
 */
export function getStoresByCategory(category: string): FeaturedStore[] {
  return featuredStores.filter(store => store.category === category);
}

/**
 * Get all unique categories
 */
export function getAllCategories(): string[] {
  return [...new Set(featuredStores.map(store => store.category))].sort();
}

/**
 * Get total store count
 */
export function getStoreCount(): number {
  return featuredStores.length;
}

/**
 * Get category count
 */
export function getCategoryCount(): number {
  return getAllCategories().length;
}
