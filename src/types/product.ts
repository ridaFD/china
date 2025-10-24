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
  message?: string;
}

export interface ProductDetailResponse {
  success: boolean;
  product?: Product;
  message?: string;
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
}

