/**
 * Product categories based on 1688.com structure
 */

import { Category } from '@/types/product';

export const categories: Category[] = [
  {
    id: 'electronics',
    name: '电子电器',
    nameEn: 'Electronics & Technology',
    icon: '💻',
    description: 'Computers, phones, and electronic devices',
    productCount: 1250000,
    subcategories: [
      { id: 'computers', name: '电脑及配件', nameEn: 'Computers & Accessories', icon: '🖥️' },
      { id: 'mobile', name: '手机及配件', nameEn: 'Mobile Phones & Accessories', icon: '📱' },
      { id: 'consumer-electronics', name: '消费电子', nameEn: 'Consumer Electronics', icon: '🎧' },
    ],
  },
  {
    id: 'apparel',
    name: '服装服饰',
    nameEn: 'Apparel & Fashion',
    icon: '👕',
    description: 'Clothing, shoes, and fashion accessories',
    productCount: 2100000,
    subcategories: [
      { id: 'womens-clothing', name: '女装', nameEn: "Women's Clothing", icon: '👗' },
      { id: 'mens-clothing', name: '男装', nameEn: "Men's Clothing", icon: '👔' },
      { id: 'shoes', name: '鞋类', nameEn: 'Shoes & Footwear', icon: '👟' },
      { id: 'bags', name: '箱包', nameEn: 'Bags & Luggage', icon: '👜' },
    ],
  },
  {
    id: 'home-garden',
    name: '家居家装',
    nameEn: 'Home & Garden',
    icon: '🏠',
    description: 'Furniture, decor, and home improvement',
    productCount: 980000,
    subcategories: [
      { id: 'furniture', name: '家具', nameEn: 'Furniture', icon: '🛋️' },
      { id: 'home-decor', name: '家居饰品', nameEn: 'Home Decor', icon: '🖼️' },
      { id: 'kitchen', name: '厨房用品', nameEn: 'Kitchen & Dining', icon: '🍽️' },
      { id: 'garden', name: '园艺用品', nameEn: 'Garden Supplies', icon: '🌱' },
    ],
  },
  {
    id: 'beauty',
    name: '美妆个护',
    nameEn: 'Beauty & Personal Care',
    icon: '💄',
    description: 'Cosmetics, skincare, and personal care products',
    productCount: 750000,
    subcategories: [
      { id: 'makeup', name: '彩妆', nameEn: 'Makeup', icon: '💋' },
      { id: 'skincare', name: '护肤品', nameEn: 'Skincare', icon: '🧴' },
      { id: 'fragrance', name: '香水', nameEn: 'Fragrance', icon: '🌸' },
    ],
  },
  {
    id: 'toys',
    name: '玩具母婴',
    nameEn: 'Toys & Baby Products',
    icon: '🧸',
    description: 'Toys, games, and baby care products',
    productCount: 650000,
    subcategories: [
      { id: 'toys', name: '玩具', nameEn: 'Toys & Games', icon: '🎮' },
      { id: 'baby-products', name: '母婴用品', nameEn: 'Baby Products', icon: '👶' },
      { id: 'baby-clothing', name: '婴童服装', nameEn: 'Baby Clothing', icon: '👶' },
    ],
  },
  {
    id: 'sports',
    name: '运动户外',
    nameEn: 'Sports & Outdoors',
    icon: '⚽',
    description: 'Sports equipment and outdoor gear',
    productCount: 520000,
    subcategories: [
      { id: 'sports-equipment', name: '运动器材', nameEn: 'Sports Equipment', icon: '🏋️' },
      { id: 'outdoor-gear', name: '户外装备', nameEn: 'Outdoor Gear', icon: '⛺' },
      { id: 'fitness', name: '健身器材', nameEn: 'Fitness Equipment', icon: '💪' },
    ],
  },
  {
    id: 'food',
    name: '食品饮料',
    nameEn: 'Food & Beverages',
    icon: '🍎',
    description: 'Food, snacks, and beverages',
    productCount: 480000,
    subcategories: [
      { id: 'snacks', name: '零食', nameEn: 'Snacks', icon: '🍪' },
      { id: 'beverages', name: '饮料', nameEn: 'Beverages', icon: '🥤' },
      { id: 'tea-coffee', name: '茶叶咖啡', nameEn: 'Tea & Coffee', icon: '☕' },
    ],
  },
  {
    id: 'office',
    name: '办公文具',
    nameEn: 'Office Supplies',
    icon: '📚',
    description: 'Office equipment and stationery',
    productCount: 420000,
    subcategories: [
      { id: 'stationery', name: '文具', nameEn: 'Stationery', icon: '✏️' },
      { id: 'office-equipment', name: '办公设备', nameEn: 'Office Equipment', icon: '🖨️' },
      { id: 'office-furniture', name: '办公家具', nameEn: 'Office Furniture', icon: '🪑' },
    ],
  },
  {
    id: 'automotive',
    name: '汽车用品',
    nameEn: 'Automotive',
    icon: '🚗',
    description: 'Auto parts and accessories',
    productCount: 380000,
    subcategories: [
      { id: 'auto-parts', name: '汽车配件', nameEn: 'Auto Parts', icon: '🔧' },
      { id: 'auto-accessories', name: '汽车装饰', nameEn: 'Auto Accessories', icon: '🎨' },
      { id: 'auto-electronics', name: '车载电子', nameEn: 'Car Electronics', icon: '📡' },
    ],
  },
  {
    id: 'industrial',
    name: '工业品',
    nameEn: 'Industrial Equipment',
    icon: '⚙️',
    description: 'Industrial machinery and equipment',
    productCount: 920000,
    subcategories: [
      { id: 'machinery', name: '机械设备', nameEn: 'Machinery', icon: '🏭' },
      { id: 'tools', name: '五金工具', nameEn: 'Hardware & Tools', icon: '🔨' },
      { id: 'raw-materials', name: '原材料', nameEn: 'Raw Materials', icon: '📦' },
    ],
  },
  {
    id: 'jewelry',
    name: '珠宝配饰',
    nameEn: 'Jewelry & Accessories',
    icon: '💎',
    description: 'Jewelry, watches, and fashion accessories',
    productCount: 340000,
    subcategories: [
      { id: 'jewelry', name: '珠宝首饰', nameEn: 'Jewelry', icon: '💍' },
      { id: 'watches', name: '手表', nameEn: 'Watches', icon: '⌚' },
      { id: 'accessories', name: '时尚配饰', nameEn: 'Fashion Accessories', icon: '🕶️' },
    ],
  },
  {
    id: 'agriculture',
    name: '农业用品',
    nameEn: 'Agriculture',
    icon: '🌾',
    description: 'Agricultural products and equipment',
    productCount: 280000,
    subcategories: [
      { id: 'farm-equipment', name: '农机设备', nameEn: 'Farm Equipment', icon: '🚜' },
      { id: 'seeds', name: '种子肥料', nameEn: 'Seeds & Fertilizers', icon: '🌱' },
      { id: 'livestock', name: '畜牧用品', nameEn: 'Livestock Supplies', icon: '🐄' },
    ],
  },
];

export const getCategoryById = (id: string): Category | undefined => {
  for (const category of categories) {
    if (category.id === id) {
      return category;
    }
    if (category.subcategories) {
      const subcategory = category.subcategories.find(sub => sub.id === id);
      if (subcategory) {
        return subcategory;
      }
    }
  }
  return undefined;
};

export const getSubcategories = (parentId: string): Category[] => {
  const category = getCategoryById(parentId);
  return category?.subcategories || [];
};

