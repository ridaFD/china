/**
 * Fashion & Apparel Stores (100 total)
 */

import { FeaturedStore } from './types';

export const fashionStores: FeaturedStore[] = [
  ...Array.from({ length: 100 }, (_, i) => ({
    id: `b2b-f${String(4000 + i).padStart(6, '0')}`,
    name: `Fashion & Apparel Store ${i + 1}`,
    nameZh: `Fashion & Apparel店${i + 1}`,
    category: 'Fashion & Apparel',
    description: 'Wholesale fashion & apparel products',
    verified: i % 3 !== 0,
    estimatedProducts: 300 + (i * 7) % 900,
    location: ['Guangzhou', 'Shanghai', 'Shenzhen', 'Yiwu', 'Ningbo'][i % 5],
    rating: i % 3 === 0 ? undefined : 4.2 + (i % 7) * 0.1,
  })),
];
