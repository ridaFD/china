/**
 * Sports & Outdoors Stores (60 total)
 */

import { FeaturedStore } from './types';

export const sportsStores: FeaturedStore[] = [
  ...Array.from({ length: 60 }, (_, i) => ({
    id: `b2b-s${String(7000 + i).padStart(6, '0')}`,
    name: `Sports & Outdoors Store ${i + 1}`,
    nameZh: `Sports & Outdoors店${i + 1}`,
    category: 'Sports & Outdoors',
    description: 'Wholesale sports & outdoors products',
    verified: i % 3 !== 0,
    estimatedProducts: 300 + (i * 7) % 900,
    location: ['Guangzhou', 'Shanghai', 'Shenzhen', 'Yiwu', 'Ningbo'][i % 5],
    rating: i % 3 === 0 ? undefined : 4.2 + (i % 7) * 0.1,
  })),
];
