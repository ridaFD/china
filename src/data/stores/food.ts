/**
 * Food & Beverages Stores (50 total)
 */

import { FeaturedStore } from './types';

export const foodStores: FeaturedStore[] = [
  ...Array.from({ length: 50 }, (_, i) => ({
    id: `b2b-fb${String(12000 + i).padStart(6, '0')}`,
    name: `Food & Beverages Store ${i + 1}`,
    nameZh: `Food & Beverages店${i + 1}`,
    category: 'Food & Beverages',
    description: 'Wholesale food & beverages products',
    verified: i % 3 !== 0,
    estimatedProducts: 300 + (i * 7) % 900,
    location: ['Guangzhou', 'Shanghai', 'Shenzhen', 'Yiwu', 'Ningbo'][i % 5],
    rating: i % 3 === 0 ? undefined : 4.2 + (i % 7) * 0.1,
  })),
];
