/**
 * Beauty & Personal Care Stores (60 total)
 */

import { FeaturedStore } from './types';

export const beautyStores: FeaturedStore[] = [
  ...Array.from({ length: 60 }, (_, i) => ({
    id: `b2b-b${String(6000 + i).padStart(6, '0')}`,
    name: `Beauty & Personal Care Store ${i + 1}`,
    nameZh: `Beauty & Personal Care店${i + 1}`,
    category: 'Beauty & Personal Care',
    description: 'Wholesale beauty & personal care products',
    verified: i % 3 !== 0,
    estimatedProducts: 300 + (i * 7) % 900,
    location: ['Guangzhou', 'Shanghai', 'Shenzhen', 'Yiwu', 'Ningbo'][i % 5],
    rating: i % 3 === 0 ? undefined : 4.2 + (i % 7) * 0.1,
  })),
];
