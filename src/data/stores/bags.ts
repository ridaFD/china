/**
 * Bags & Luggage Stores (60 total)
 */

import { FeaturedStore } from './types';

export const bagsStores: FeaturedStore[] = [
  ...Array.from({ length: 60 }, (_, i) => ({
    id: `b2b-bl${String(16000 + i).padStart(6, '0')}`,
    name: `Bags & Luggage Store ${i + 1}`,
    nameZh: `Bags & Luggage店${i + 1}`,
    category: 'Bags & Luggage',
    description: 'Wholesale bags & luggage products',
    verified: i % 3 !== 0,
    estimatedProducts: 300 + (i * 7) % 900,
    location: ['Guangzhou', 'Shanghai', 'Shenzhen', 'Yiwu', 'Ningbo'][i % 5],
    rating: i % 3 === 0 ? undefined : 4.2 + (i % 7) * 0.1,
  })),
];
