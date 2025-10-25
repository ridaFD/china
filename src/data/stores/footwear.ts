/**
 * Footwear Stores (69 total)
 */

import { FeaturedStore } from './types';

export const footwearStores: FeaturedStore[] = [
  ...Array.from({ length: 69 }, (_, i) => ({
    id: `b2b-fw${String(17000 + i).padStart(6, '0')}`,
    name: `Footwear Store ${i + 1}`,
    nameZh: `Footwear店${i + 1}`,
    category: 'Footwear',
    description: 'Wholesale footwear products',
    verified: i % 3 !== 0,
    estimatedProducts: 300 + (i * 7) % 900,
    location: ['Guangzhou', 'Shanghai', 'Shenzhen', 'Yiwu', 'Ningbo'][i % 5],
    rating: i % 3 === 0 ? undefined : 4.2 + (i % 7) * 0.1,
  })),
];
