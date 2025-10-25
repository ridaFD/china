/**
 * API Route: POST /api/search/image
 * Image-based product search via RapidAPI
 */

import { NextRequest, NextResponse } from 'next/server';
import { searchByImage } from '@/lib/rapidapi-1688';
import { transformSearchResponse } from '@/lib/transform-rapidapi-data';
import { ImageSearchResponse } from '@/types/product';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const imageFile = formData.get('image') as File | null;
    const imageUrl = formData.get('imageUrl') as string | null;

    if (!imageFile && !imageUrl) {
      return NextResponse.json(
        {
          success: false,
          products: [],
          total: 0,
          message: 'Image file or URL is required',
        },
        { status: 400 }
      );
    }

    let searchUrl = imageUrl;

    // If image file is provided, we need to upload it first
    // For now, we'll only support URL-based search as per RapidAPI docs
    if (imageFile && !imageUrl) {
      return NextResponse.json(
        {
          success: false,
          products: [],
          total: 0,
          message: 'Please provide an image URL. File upload requires additional processing.',
        },
        { status: 400 }
      );
    }

    console.log(`Searching products by image: ${searchUrl}`);

    // Call RapidAPI image search
    const response = await searchByImage(searchUrl!, 1);

    // Transform RapidAPI response to our format
    const { products, total } = transformSearchResponse(response);

    console.log(`✅ Found ${products.length} products matching the image!`);

    const imageSearchResponse: ImageSearchResponse = {
      success: true,
      products,
      total,
      message: 'Real image search results from 1688.com via RapidAPI',
      isRealData: true,
    };

    return NextResponse.json(imageSearchResponse);
  } catch (error) {
    console.error('Error in /api/search/image:', error);
    
    return NextResponse.json(
      {
        success: false,
        products: [],
        total: 0,
        message: 'Image search failed',
      },
      { status: 500 }
    );
  }
}

