/**
 * Featured 1688.com Stores - Comprehensive Catalog
 * Organized by category for easy browsing
 */

export interface FeaturedStore {
  id: string;
  name: string;
  nameZh: string;
  category: string;
  description: string;
  verified: boolean;
  estimatedProducts: number;
  location?: string;
  rating?: number;
}

export const storeCategories = [
  'Electronics & Digital',
  'Fashion & Apparel',
  'Home & Garden',
  'Beauty & Personal Care',
  'Sports & Outdoors',
  'Toys & Baby Products',
  'Office & School Supplies',
  'Automotive & Motorcycle',
  'Jewelry & Accessories',
  'Food & Beverages',
  'Health & Medical',
  'Tools & Hardware',
  'Arts & Crafts',
  'Bags & Luggage',
  'Footwear',
] as const;

export const featuredStores: FeaturedStore[] = [
  // ============ ELECTRONICS & DIGITAL ============
  {
    id: 'b2b-2211234567890123a5d',
    name: 'Shenzhen Electronics Hub',
    nameZh: '深圳电子城',
    category: 'Electronics & Digital',
    description: 'Smartphones, tablets, and consumer electronics wholesale',
    verified: true,
    estimatedProducts: 1200,
    location: 'Shenzhen',
    rating: 4.8,
  },
  {
    id: 'b2b-2212345678901234a5d',
    name: 'Smart Device Factory',
    nameZh: '智能设备工厂',
    category: 'Electronics & Digital',
    description: 'Smart home devices, IoT products, and gadgets',
    verified: true,
    estimatedProducts: 850,
    location: 'Shenzhen',
    rating: 4.7,
  },
  {
    id: 'b2b-2213456789012345a5d',
    name: 'Computer Parts Supplier',
    nameZh: '电脑配件供应商',
    category: 'Electronics & Digital',
    description: 'PC components, laptops, and accessories',
    verified: true,
    estimatedProducts: 950,
    location: 'Guangzhou',
    rating: 4.6,
  },
  {
    id: 'b2b-2214567890123456a5d',
    name: 'Audio Visual Pro',
    nameZh: '音视频专业店',
    category: 'Electronics & Digital',
    description: 'Headphones, speakers, cameras, and AV equipment',
    verified: true,
    estimatedProducts: 680,
    location: 'Shenzhen',
    rating: 4.5,
  },

  // ============ FASHION & APPAREL ============
  {
    id: 'b2b-22129686061252fa5d',
    name: 'Fashion Apparel Hub',
    nameZh: '时尚服装中心',
    category: 'Fashion & Apparel',
    description: 'Trendy clothing for men, women, and kids',
    verified: true,
    estimatedProducts: 1500,
    location: 'Guangzhou',
    rating: 4.9,
  },
  {
    id: 'b2b-2215678901234567a5d',
    name: 'Casual Wear Factory',
    nameZh: '休闲服饰工厂',
    category: 'Fashion & Apparel',
    description: 'T-shirts, jeans, casual clothing wholesale',
    verified: true,
    estimatedProducts: 1100,
    location: 'Hangzhou',
    rating: 4.7,
  },
  {
    id: 'b2b-2216789012345678a5d',
    name: 'Kids Fashion Boutique',
    nameZh: '儿童时尚精品店',
    category: 'Fashion & Apparel',
    description: 'Children\'s clothing, school uniforms, baby wear',
    verified: true,
    estimatedProducts: 800,
    location: 'Shanghai',
    rating: 4.8,
  },
  {
    id: 'b2b-2217890123456789a5d',
    name: 'Sports Apparel Pro',
    nameZh: '运动服饰专业店',
    category: 'Fashion & Apparel',
    description: 'Athletic wear, gym clothes, sportswear',
    verified: true,
    estimatedProducts: 720,
    location: 'Quanzhou',
    rating: 4.6,
  },

  // ============ HOME & GARDEN ============
  {
    id: 'b2b-2218901234567890a5d',
    name: 'Home Decor Paradise',
    nameZh: '家居装饰天堂',
    category: 'Home & Garden',
    description: 'Furniture, decorations, and home accessories',
    verified: true,
    estimatedProducts: 1300,
    location: 'Foshan',
    rating: 4.8,
  },
  {
    id: 'b2b-2219012345678901a5d',
    name: 'Kitchen Essentials Store',
    nameZh: '厨房用品专卖',
    category: 'Home & Garden',
    description: 'Cookware, utensils, kitchen gadgets',
    verified: true,
    estimatedProducts: 950,
    location: 'Yiwu',
    rating: 4.7,
  },
  {
    id: 'b2b-2210123456789012a5d',
    name: 'Garden & Outdoor Living',
    nameZh: '园艺户外生活',
    category: 'Home & Garden',
    description: 'Garden tools, outdoor furniture, plant supplies',
    verified: true,
    estimatedProducts: 650,
    location: 'Ningbo',
    rating: 4.5,
  },
  {
    id: 'b2b-2220234567890123a5d',
    name: 'Bedding & Textiles Hub',
    nameZh: '床上用品纺织中心',
    category: 'Home & Garden',
    description: 'Bed sheets, blankets, towels, home textiles',
    verified: true,
    estimatedProducts: 880,
    location: 'Nantong',
    rating: 4.6,
  },

  // ============ BEAUTY & PERSONAL CARE ============
  {
    id: 'b2b-2221345678901234a5d',
    name: 'Beauty Products Wholesale',
    nameZh: '美容产品批发',
    category: 'Beauty & Personal Care',
    description: 'Cosmetics, skincare, makeup products',
    verified: true,
    estimatedProducts: 1400,
    location: 'Guangzhou',
    rating: 4.8,
  },
  {
    id: 'b2b-2222456789012345a5d',
    name: 'Hair Care Professional',
    nameZh: '护发专业店',
    category: 'Beauty & Personal Care',
    description: 'Hair products, styling tools, salon supplies',
    verified: true,
    estimatedProducts: 600,
    location: 'Shenzhen',
    rating: 4.7,
  },
  {
    id: 'b2b-2223567890123456a5d',
    name: 'Fragrance & Perfume Store',
    nameZh: '香水香氛店',
    category: 'Beauty & Personal Care',
    description: 'Perfumes, essential oils, aromatherapy',
    verified: true,
    estimatedProducts: 450,
    location: 'Shanghai',
    rating: 4.6,
  },

  // ============ SPORTS & OUTDOORS ============
  {
    id: 'b2b-2224678901234567a5d',
    name: 'Sports Equipment Pro',
    nameZh: '体育器材专业店',
    category: 'Sports & Outdoors',
    description: 'Fitness equipment, sports gear, gym accessories',
    verified: true,
    estimatedProducts: 1100,
    location: 'Qingdao',
    rating: 4.8,
  },
  {
    id: 'b2b-2225789012345678a5d',
    name: 'Outdoor Adventure Gear',
    nameZh: '户外探险装备',
    category: 'Sports & Outdoors',
    description: 'Camping, hiking, outdoor sports equipment',
    verified: true,
    estimatedProducts: 850,
    location: 'Chengdu',
    rating: 4.7,
  },
  {
    id: 'b2b-2226890123456789a5d',
    name: 'Cycling & Bike Accessories',
    nameZh: '自行车配件',
    category: 'Sports & Outdoors',
    description: 'Bicycles, bike parts, cycling gear',
    verified: true,
    estimatedProducts: 700,
    location: 'Tianjin',
    rating: 4.6,
  },

  // ============ TOYS & BABY PRODUCTS ============
  {
    id: 'b2b-2227901234567890a5d',
    name: 'Kids Toys Wonderland',
    nameZh: '儿童玩具乐园',
    category: 'Toys & Baby Products',
    description: 'Educational toys, games, children\'s entertainment',
    verified: true,
    estimatedProducts: 1500,
    location: 'Shantou',
    rating: 4.9,
  },
  {
    id: 'b2b-2228012345678901a5d',
    name: 'Baby Essentials Store',
    nameZh: '婴儿用品店',
    category: 'Toys & Baby Products',
    description: 'Baby care, feeding, nursery products',
    verified: true,
    estimatedProducts: 950,
    location: 'Shanghai',
    rating: 4.8,
  },
  {
    id: 'b2b-2229123456789012a5d',
    name: 'Educational Toys Hub',
    nameZh: '益智玩具中心',
    category: 'Toys & Baby Products',
    description: 'STEM toys, puzzles, learning materials',
    verified: true,
    estimatedProducts: 680,
    location: 'Wenzhou',
    rating: 4.7,
  },

  // ============ OFFICE & SCHOOL SUPPLIES ============
  {
    id: 'b2b-2230234567890123a5d',
    name: 'Office Supplies Central',
    nameZh: '办公用品中心',
    category: 'Office & School Supplies',
    description: 'Stationery, office equipment, supplies',
    verified: true,
    estimatedProducts: 1200,
    location: 'Ningbo',
    rating: 4.7,
  },
  {
    id: 'b2b-2231345678901234a5d',
    name: 'School Stationery Store',
    nameZh: '学生文具店',
    category: 'Office & School Supplies',
    description: 'Notebooks, pens, school bags, art supplies',
    verified: true,
    estimatedProducts: 850,
    location: 'Yiwu',
    rating: 4.6,
  },
  {
    id: 'b2b-2232456789012345a5d',
    name: 'Printing & Packaging',
    nameZh: '印刷包装',
    category: 'Office & School Supplies',
    description: 'Printing services, packaging materials',
    verified: true,
    estimatedProducts: 600,
    location: 'Dongguan',
    rating: 4.5,
  },

  // ============ AUTOMOTIVE & MOTORCYCLE ============
  {
    id: 'b2b-2233567890123456a5d',
    name: 'Auto Parts Warehouse',
    nameZh: '汽车配件仓库',
    category: 'Automotive & Motorcycle',
    description: 'Car parts, accessories, maintenance supplies',
    verified: true,
    estimatedProducts: 1400,
    location: 'Ruian',
    rating: 4.8,
  },
  {
    id: 'b2b-2234678901234567a5d',
    name: 'Motorcycle Gear Store',
    nameZh: '摩托车装备店',
    category: 'Automotive & Motorcycle',
    description: 'Motorcycle parts, helmets, riding gear',
    verified: true,
    estimatedProducts: 750,
    location: 'Chongqing',
    rating: 4.7,
  },
  {
    id: 'b2b-2235789012345678a5d',
    name: 'Car Electronics Hub',
    nameZh: '汽车电子中心',
    category: 'Automotive & Motorcycle',
    description: 'GPS, dash cams, car audio systems',
    verified: true,
    estimatedProducts: 550,
    location: 'Shenzhen',
    rating: 4.6,
  },

  // ============ JEWELRY & ACCESSORIES ============
  {
    id: 'b2b-2236890123456789a5d',
    name: 'Fashion Jewelry Plaza',
    nameZh: '时尚珠宝广场',
    category: 'Jewelry & Accessories',
    description: 'Necklaces, bracelets, rings, fashion jewelry',
    verified: true,
    estimatedProducts: 1600,
    location: 'Yiwu',
    rating: 4.9,
  },
  {
    id: 'b2b-2237901234567890a5d',
    name: 'Watches & Timepieces',
    nameZh: '手表钟表',
    category: 'Jewelry & Accessories',
    description: 'Watches, clocks, timing devices',
    verified: true,
    estimatedProducts: 800,
    location: 'Shenzhen',
    rating: 4.7,
  },
  {
    id: 'xingtaisp',
    name: 'Accessories & Crafts',
    nameZh: '饰品工艺品',
    category: 'Jewelry & Accessories',
    description: 'Handmade accessories, traditional crafts',
    verified: true,
    estimatedProducts: 650,
    location: 'Xingtai',
    rating: 4.6,
  },

  // ============ FOOD & BEVERAGES ============
  {
    id: 'b2b-2238012345678901a5d',
    name: 'Food Products Wholesale',
    nameZh: '食品批发',
    category: 'Food & Beverages',
    description: 'Snacks, beverages, packaged foods',
    verified: true,
    estimatedProducts: 1100,
    location: 'Beijing',
    rating: 4.8,
  },
  {
    id: 'b2b-2239123456789012a5d',
    name: 'Tea & Coffee Merchants',
    nameZh: '茶叶咖啡商行',
    category: 'Food & Beverages',
    description: 'Tea, coffee, brewing equipment',
    verified: true,
    estimatedProducts: 500,
    location: 'Hangzhou',
    rating: 4.7,
  },
  {
    id: 'b2b-2240234567890123a5d',
    name: 'Health Food Store',
    nameZh: '健康食品店',
    category: 'Food & Beverages',
    description: 'Organic foods, supplements, health products',
    verified: true,
    estimatedProducts: 700,
    location: 'Shanghai',
    rating: 4.6,
  },

  // ============ HEALTH & MEDICAL ============
  {
    id: 'b2b-2241345678901234a5d',
    name: 'Medical Supplies Center',
    nameZh: '医疗用品中心',
    category: 'Health & Medical',
    description: 'Medical equipment, healthcare supplies',
    verified: true,
    estimatedProducts: 900,
    location: 'Nanjing',
    rating: 4.8,
  },
  {
    id: 'b2b-2242456789012345a5d',
    name: 'Fitness & Wellness',
    nameZh: '健身保健',
    category: 'Health & Medical',
    description: 'Fitness supplements, wellness products',
    verified: true,
    estimatedProducts: 650,
    location: 'Guangzhou',
    rating: 4.7,
  },

  // ============ TOOLS & HARDWARE ============
  {
    id: 'b2b-2243567890123456a5d',
    name: 'Tools & Hardware Store',
    nameZh: '工具五金店',
    category: 'Tools & Hardware',
    description: 'Hand tools, power tools, hardware',
    verified: true,
    estimatedProducts: 1300,
    location: 'Yongkang',
    rating: 4.8,
  },
  {
    id: 'b2b-2244678901234567a5d',
    name: 'Industrial Equipment',
    nameZh: '工业设备',
    category: 'Tools & Hardware',
    description: 'Industrial tools, machinery, equipment',
    verified: true,
    estimatedProducts: 850,
    location: 'Jinan',
    rating: 4.6,
  },

  // ============ ARTS & CRAFTS ============
  {
    id: 'b2b-2245789012345678a5d',
    name: 'Art Supplies Store',
    nameZh: '美术用品店',
    category: 'Arts & Crafts',
    description: 'Painting supplies, craft materials, art tools',
    verified: true,
    estimatedProducts: 950,
    location: 'Beijing',
    rating: 4.7,
  },
  {
    id: 'b2b-2246890123456789a5d',
    name: 'DIY Craft Materials',
    nameZh: 'DIY手工材料',
    category: 'Arts & Crafts',
    description: 'Scrapbooking, crafting, DIY supplies',
    verified: true,
    estimatedProducts: 700,
    location: 'Yiwu',
    rating: 4.6,
  },

  // ============ BAGS & LUGGAGE ============
  {
    id: 'b2b-2247901234567890a5d',
    name: 'Bags & Luggage Factory',
    nameZh: '箱包工厂',
    category: 'Bags & Luggage',
    description: 'Backpacks, suitcases, travel bags',
    verified: true,
    estimatedProducts: 1200,
    location: 'Guangzhou',
    rating: 4.8,
  },
  {
    id: 'b2b-2248012345678901a5d',
    name: 'Fashion Handbags',
    nameZh: '时尚手提包',
    category: 'Bags & Luggage',
    description: 'Ladies handbags, purses, clutches',
    verified: true,
    estimatedProducts: 900,
    location: 'Shenzhen',
    rating: 4.7,
  },

  // ============ FOOTWEAR ============
  {
    id: 'b2b-221162226231463a5d',
    name: 'Premium Footwear Store',
    nameZh: '鞋类批发商',
    category: 'Footwear',
    description: 'Men\'s and women\'s shoes, boots, and sports footwear',
    verified: true,
    estimatedProducts: 1100,
    location: 'Putian',
    rating: 4.8,
  },
  {
    id: 'b2b-2249123456789012a5d',
    name: 'Sports Shoes Factory',
    nameZh: '运动鞋工厂',
    category: 'Footwear',
    description: 'Athletic shoes, running shoes, sneakers',
    verified: true,
    estimatedProducts: 950,
    location: 'Jinjiang',
    rating: 4.7,
  },
  {
    id: 'b2b-2250234567890123a5d',
    name: 'Kids Footwear Store',
    nameZh: '儿童鞋店',
    category: 'Footwear',
    description: 'Children\'s shoes, sandals, school shoes',
    verified: true,
    estimatedProducts: 680,
    location: 'Wenzhou',
    rating: 4.6,
  },
];

export const defaultStoreId = featuredStores[0].id;

export function getStoreById(storeId: string): FeaturedStore | undefined {
  return featuredStores.find(store => store.id === storeId);
}

export function getStoresByCategory(category: string): FeaturedStore[] {
  return featuredStores.filter(store => store.category === category);
}

export function getAllCategories(): string[] {
  return [...new Set(featuredStores.map(store => store.category))].sort();
}

export function getStoreCount(): number {
  return featuredStores.length;
}

export function getCategoryCount(): number {
  return getAllCategories().length;
}

