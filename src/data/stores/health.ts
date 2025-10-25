/**
 * Health & Medical Stores (45 total)
 */

import { FeaturedStore } from './types';

export const healthStores: FeaturedStore[] = [
  ...Array.from({ length: 45 }, (_, i) => ({
    id: `b2b-hm${String(13000 + i).padStart(6, '0')}`,
    name: `Health & Medical Store ${i + 1}`,
    nameZh: `Health & Medical店${i + 1}`,
    category: 'Health & Medical',
    description: 'Wholesale health & medical products',
    verified: i % 3 !== 0,
    estimatedProducts: 300 + (i * 7) % 900,
    location: ['Guangzhou', 'Shanghai', 'Shenzhen', 'Yiwu', 'Ningbo'][i % 5],
    rating: i % 3 === 0 ? undefined : 4.2 + (i % 7) * 0.1,
  })),
];
