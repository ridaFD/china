/**
 * API Route: GET /api/categories
 * Fetch product categories
 */

import { NextResponse } from 'next/server';
import { categories } from '@/data/categories';
import { CategoryListResponse } from '@/types/product';

export async function GET() {
  try {
    const response: CategoryListResponse = {
      success: true,
      categories,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error in /api/categories:', error);
    
    return NextResponse.json(
      {
        success: false,
        categories: [],
        message: 'Failed to load categories',
      },
      { status: 500 }
    );
  }
}

