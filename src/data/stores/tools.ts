/**
 * Tools & Hardware Stores (65 total)
 */

import { FeaturedStore } from './types';

export const toolsStores: FeaturedStore[] = [
  ...Array.from({ length: 65 }, (_, i) => ({
    id: `b2b-th${String(14000 + i).padStart(6, '0')}`,
    name: `Tools & Hardware Store ${i + 1}`,
    nameZh: `Tools & Hardware店${i + 1}`,
    category: 'Tools & Hardware',
    description: 'Wholesale tools & hardware products',
    verified: i % 3 !== 0,
    estimatedProducts: 300 + (i * 7) % 900,
    location: ['Guangzhou', 'Shanghai', 'Shenzhen', 'Yiwu', 'Ningbo'][i % 5],
    rating: i % 3 === 0 ? undefined : 4.2 + (i % 7) * 0.1,
  })),
];
