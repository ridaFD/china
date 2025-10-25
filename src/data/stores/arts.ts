/**
 * Arts & Crafts Stores (55 total)
 */

import { FeaturedStore } from './types';

export const artsStores: FeaturedStore[] = [
  ...Array.from({ length: 55 }, (_, i) => ({
    id: `b2b-ac${String(15000 + i).padStart(6, '0')}`,
    name: `Arts & Crafts Store ${i + 1}`,
    nameZh: `Arts & Crafts店${i + 1}`,
    category: 'Arts & Crafts',
    description: 'Wholesale arts & crafts products',
    verified: i % 3 !== 0,
    estimatedProducts: 300 + (i * 7) % 900,
    location: ['Guangzhou', 'Shanghai', 'Shenzhen', 'Yiwu', 'Ningbo'][i % 5],
    rating: i % 3 === 0 ? undefined : 4.2 + (i % 7) * 0.1,
  })),
];
