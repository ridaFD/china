/**
 * Home & Garden Stores (80 total)
 */

import { FeaturedStore } from './types';

export const homeStores: FeaturedStore[] = [
  ...Array.from({ length: 80 }, (_, i) => ({
    id: `b2b-h${String(5000 + i).padStart(6, '0')}`,
    name: `Home & Garden Store ${i + 1}`,
    nameZh: `Home & Garden店${i + 1}`,
    category: 'Home & Garden',
    description: 'Wholesale home & garden products',
    verified: i % 3 !== 0,
    estimatedProducts: 300 + (i * 7) % 900,
    location: ['Guangzhou', 'Shanghai', 'Shenzhen', 'Yiwu', 'Ningbo'][i % 5],
    rating: i % 3 === 0 ? undefined : 4.2 + (i % 7) * 0.1,
  })),
];
