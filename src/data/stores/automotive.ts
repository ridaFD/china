/**
 * Automotive & Motorcycle Stores (70 total)
 */

import { FeaturedStore } from './types';

export const automotiveStores: FeaturedStore[] = [
  ...Array.from({ length: 70 }, (_, i) => ({
    id: `b2b-a${String(10000 + i).padStart(6, '0')}`,
    name: `Automotive & Motorcycle Store ${i + 1}`,
    nameZh: `Automotive & Motorcycle店${i + 1}`,
    category: 'Automotive & Motorcycle',
    description: 'Wholesale automotive & motorcycle products',
    verified: i % 3 !== 0,
    estimatedProducts: 300 + (i * 7) % 900,
    location: ['Guangzhou', 'Shanghai', 'Shenzhen', 'Yiwu', 'Ningbo'][i % 5],
    rating: i % 3 === 0 ? undefined : 4.2 + (i % 7) * 0.1,
  })),
];
