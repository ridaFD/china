/**
 * Central export for all store categories
 * Imports from individual category files
 */

import { FeaturedStore } from './types';
import { electronicsStores } from './electronics';
import { fashionStores } from './fashion';
import { homeStores } from './home';
import { beautyStores } from './beauty';
import { sportsStores } from './sports';
import { toysStores } from './toys';
import { officeStores } from './office';
import { automotiveStores } from './automotive';
import { jewelryStores } from './jewelry';
import { foodStores } from './food';
import { healthStores } from './health';
import { toolsStores } from './tools';
import { artsStores } from './arts';
import { bagsStores } from './bags';
import { footwearStores } from './footwear';

/**
 * Combined array of all stores from all categories
 */
export const allStores: FeaturedStore[] = [
  ...electronicsStores,
  ...fashionStores,
  ...homeStores,
  ...beautyStores,
  ...sportsStores,
  ...toysStores,
  ...officeStores,
  ...automotiveStores,
  ...jewelryStores,
  ...foodStores,
  ...healthStores,
  ...toolsStores,
  ...artsStores,
  ...bagsStores,
  ...footwearStores,
];

/**
 * Export individual category stores for granular access
 */
export {
  electronicsStores,
  fashionStores,
  homeStores,
  beautyStores,
  sportsStores,
  toysStores,
  officeStores,
  automotiveStores,
  jewelryStores,
  foodStores,
  healthStores,
  toolsStores,
  artsStores,
  bagsStores,
  footwearStores,
};

/**
 * Export types
 */
export { FeaturedStore, storeCategories } from './types';

