/**
 * Office & School Supplies Stores (50 total)
 */

import { FeaturedStore } from './types';

export const officeStores: FeaturedStore[] = [
  ...Array.from({ length: 50 }, (_, i) => ({
    id: `b2b-o${String(9000 + i).padStart(6, '0')}`,
    name: `Office & School Supplies Store ${i + 1}`,
    nameZh: `Office & School Supplies店${i + 1}`,
    category: 'Office & School Supplies',
    description: 'Wholesale office & school supplies products',
    verified: i % 3 !== 0,
    estimatedProducts: 300 + (i * 7) % 900,
    location: ['Guangzhou', 'Shanghai', 'Shenzhen', 'Yiwu', 'Ningbo'][i % 5],
    rating: i % 3 === 0 ? undefined : 4.2 + (i % 7) * 0.1,
  })),
];
