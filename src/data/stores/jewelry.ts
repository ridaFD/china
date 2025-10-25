/**
 * Jewelry & Accessories Stores (80 total)
 */

import { FeaturedStore } from './types';

export const jewelryStores: FeaturedStore[] = [
  ...Array.from({ length: 80 }, (_, i) => ({
    id: `b2b-j${String(11000 + i).padStart(6, '0')}`,
    name: `Jewelry & Accessories Store ${i + 1}`,
    nameZh: `Jewelry & Accessories店${i + 1}`,
    category: 'Jewelry & Accessories',
    description: 'Wholesale jewelry & accessories products',
    verified: i % 3 !== 0,
    estimatedProducts: 300 + (i * 7) % 900,
    location: ['Guangzhou', 'Shanghai', 'Shenzhen', 'Yiwu', 'Ningbo'][i % 5],
    rating: i % 3 === 0 ? undefined : 4.2 + (i % 7) * 0.1,
  })),
];
