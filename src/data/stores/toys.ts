/**
 * Toys & Baby Products Stores (60 total)
 */

import { FeaturedStore } from './types';

export const toysStores: FeaturedStore[] = [
  ...Array.from({ length: 60 }, (_, i) => ({
    id: `b2b-t${String(8000 + i).padStart(6, '0')}`,
    name: `Toys & Baby Products Store ${i + 1}`,
    nameZh: `Toys & Baby Products店${i + 1}`,
    category: 'Toys & Baby Products',
    description: 'Wholesale toys & baby products products',
    verified: i % 3 !== 0,
    estimatedProducts: 300 + (i * 7) % 900,
    location: ['Guangzhou', 'Shanghai', 'Shenzhen', 'Yiwu', 'Ningbo'][i % 5],
    rating: i % 3 === 0 ? undefined : 4.2 + (i % 7) * 0.1,
  })),
];
