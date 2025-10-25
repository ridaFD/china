/**
 * Product types for 1688.com integration
 */

export interface Product {
  id: string;
  productID: string;
  subject: string; // Product title
  price: number;
  priceRange?: {
    min: number;
    max: number;
  };
  currency: string; // Usually CNY
  imageUrl: string;
  images?: string[];
  description?: string;
  supplierName?: string;
  supplierUrl?: string;
  supplierId?: string;
  supplierInfo?: SupplierInfo;
  moq?: number; // Minimum Order Quantity
  unit?: string;
  saleInfo?: {
    soldQuantity?: number;
    reviewCount?: number;
  };
  attributes?: ProductAttribute[];
  shipping?: ShippingInfo;
  categoryId?: string;
  categoryName?: string;
}

export interface ProductAttribute {
  name: string;
  value: string;
}

export interface ShippingInfo {
  availableCountries?: string[];
  estimatedDays?: number;
  cost?: number;
}

export interface ProductListResponse {
  success: boolean;
  products: Product[];
  total: number;
  page: number;
  pageSize: number;
  totalPages?: number;
  message?: string;
  isRealData?: boolean;
  storeId?: string;
  keyword?: string;
  error?: string;
}

export interface ProductDetailResponse {
  success: boolean;
  product?: Product;
  message?: string;
  isRealData?: boolean;
}

export interface SearchParams {
  keyword?: string;
  categoryId?: string;
  page?: number;
  pageSize?: number;
  sortBy?: 'price' | 'sales' | 'newest';
  sortOrder?: 'asc' | 'desc';
  minPrice?: number;
  maxPrice?: number;
  imageUrl?: string; // For image search
}

export interface Category {
  id: string;
  name: string;
  nameEn: string;
  icon: string;
  description?: string;
  productCount?: number;
  subcategories?: Category[];
}

export interface CategoryListResponse {
  success: boolean;
  categories: Category[];
  message?: string;
}

export interface SupplierInfo {
  id: string;
  name: string;
  isVerified: boolean;
  verificationLevel?: 'basic' | 'premium' | 'gold'; // Verification tiers
  rating?: number; // 1-5 stars
  totalTransactions?: number;
  responseRate?: number; // Percentage
  responseTime?: string; // e.g., "within 24 hours"
  yearEstablished?: number;
  location?: string;
  badges?: SupplierBadge[];
}

export interface SupplierBadge {
  type: 'verified' | 'top-seller' | 'fast-shipping' | 'quality-assured' | 'new-supplier';
  label: string;
  description?: string;
}

export interface ImageSearchRequest {
  imageUrl?: string;
  imageFile?: File;
  categoryId?: string;
}

export interface ImageSearchResponse {
  success: boolean;
  products: Product[];
  total: number;
  message?: string;
  isRealData?: boolean;
}

export interface PriceComparisonProduct extends Product {
  pricePerUnit?: number;
  savingsPercentage?: number;
  isBestPrice?: boolean;
}

