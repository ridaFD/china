/**
 * Store type definitions shared across all category files
 * Updated with specific subcategories matching real 1688.com
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

/**
 * Comprehensive list of specific subcategories (40+ categories)
 * Matching real 1688.com marketplace structure
 */
export const storeCategories = [
  // Home & Living (10 subcategories)
  'Home Decor & Decorations',
  'Candles & Fragrances',
  'Vases & Planters',
  'Kitchen & Dining',
  'Bathroom Fixtures',
  'Lighting & Lamps',
  'Furniture',
  'Garden & Outdoor',
  'Bedding & Textiles',
  'Storage & Organization',
  
  // Fashion & Clothing (8 subcategories)
  'Women\'s Clothing',
  'Men\'s Clothing',
  'Children\'s Clothing',
  'Sportswear & Activewear',
  'Lingerie & Underwear',
  'Swimwear & Beachwear',
  'Outerwear & Coats',
  'Uniforms & Workwear',
  
  // Electronics & Tech (6 subcategories)
  'Mobile Phones & Tablets',
  'Computers & Laptops',
  'Audio & Video Equipment',
  'Smart Home Devices',
  'Phone & Computer Accessories',
  'Cables & Chargers',
  
  // Beauty & Personal Care (4 subcategories)
  'Cosmetics & Makeup',
  'Skincare Products',
  'Hair Care & Styling',
  'Perfumes & Fragrances',
  
  // Sports & Fitness (3 subcategories)
  'Fitness Equipment',
  'Outdoor & Camping',
  'Sports Apparel & Shoes',
  
  // Toys & Baby (3 subcategories)
  'Children\'s Toys',
  'Baby Care Products',
  'Educational Toys & Books',
  
  // Office & School (3 subcategories)
  'Stationery & Paper',
  'Office Equipment',
  'School Supplies',
  
  // Automotive (3 subcategories)
  'Auto Parts & Accessories',
  'Motorcycle Parts',
  'Car Electronics',
  
  // Jewelry & Fashion Accessories (4 subcategories)
  'Fashion Jewelry',
  'Watches & Timepieces',
  'Bags & Handbags',
  'Belts & Scarves',
  
  // Footwear (3 subcategories)
  'Women\'s Shoes',
  'Men\'s Shoes',
  'Children\'s Shoes',
  
  // Food & Beverage (2 subcategories)
  'Packaged Foods & Snacks',
  'Tea & Coffee',
  
  // Health & Medical (2 subcategories)
  'Medical Supplies',
  'Health Supplements',
  
  // Tools & Hardware (2 subcategories)
  'Hand & Power Tools',
  'Industrial Equipment',
  
  // Arts & Crafts (2 subcategories)
  'Art Supplies',
  'Craft Materials',
] as const;

/**
 * Main category groups for filtering
 */
export const categoryGroups = {
  'Home & Living': [
    'Home Decor & Decorations',
    'Candles & Fragrances',
    'Vases & Planters',
    'Kitchen & Dining',
    'Bathroom Fixtures',
    'Lighting & Lamps',
    'Furniture',
    'Garden & Outdoor',
    'Bedding & Textiles',
    'Storage & Organization',
  ],
  'Fashion & Clothing': [
    'Women\'s Clothing',
    'Men\'s Clothing',
    'Children\'s Clothing',
    'Sportswear & Activewear',
    'Lingerie & Underwear',
    'Swimwear & Beachwear',
    'Outerwear & Coats',
    'Uniforms & Workwear',
  ],
  'Electronics & Tech': [
    'Mobile Phones & Tablets',
    'Computers & Laptops',
    'Audio & Video Equipment',
    'Smart Home Devices',
    'Phone & Computer Accessories',
    'Cables & Chargers',
  ],
  'Beauty & Personal Care': [
    'Cosmetics & Makeup',
    'Skincare Products',
    'Hair Care & Styling',
    'Perfumes & Fragrances',
  ],
  'Sports & Fitness': [
    'Fitness Equipment',
    'Outdoor & Camping',
    'Sports Apparel & Shoes',
  ],
  'Toys & Baby': [
    'Children\'s Toys',
    'Baby Care Products',
    'Educational Toys & Books',
  ],
  'Office & School': [
    'Stationery & Paper',
    'Office Equipment',
    'School Supplies',
  ],
  'Automotive': [
    'Auto Parts & Accessories',
    'Motorcycle Parts',
    'Car Electronics',
  ],
  'Jewelry & Accessories': [
    'Fashion Jewelry',
    'Watches & Timepieces',
    'Bags & Handbags',
    'Belts & Scarves',
  ],
  'Footwear': [
    'Women\'s Shoes',
    'Men\'s Shoes',
    'Children\'s Shoes',
  ],
  'Food & Beverage': [
    'Packaged Foods & Snacks',
    'Tea & Coffee',
  ],
  'Health & Medical': [
    'Medical Supplies',
    'Health Supplements',
  ],
  'Tools & Hardware': [
    'Hand & Power Tools',
    'Industrial Equipment',
  ],
  'Arts & Crafts': [
    'Art Supplies',
    'Craft Materials',
  ],
} as const;
