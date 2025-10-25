/**
 * RapidAPI 1688 Integration
 * Using 1688-product2 API from RapidAPI
 */

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
const RAPIDAPI_HOST = '1688-product2.p.rapidapi.com';
const RAPIDAPI_BASE_URL = `https://${RAPIDAPI_HOST}`;

interface RapidAPIOptions {
  method?: 'GET' | 'POST';
  endpoint: string;
  params?: Record<string, any>;
  body?: Record<string, any>;
}

/**
 * Make request to RapidAPI 1688 service
 */
async function rapidAPIRequest(options: RapidAPIOptions): Promise<any> {
  const { method = 'GET', endpoint, params, body } = options;

  if (!RAPIDAPI_KEY) {
    throw new Error('RapidAPI key not configured. Add RAPIDAPI_KEY to .env.local');
  }

  // Build URL with query parameters for GET requests
  let url = `${RAPIDAPI_BASE_URL}${endpoint}`;
  if (method === 'GET' && params) {
    const queryString = new URLSearchParams(
      Object.entries(params).map(([key, value]) => [key, String(value)])
    ).toString();
    url += `?${queryString}`;
  }

  const headers: Record<string, string> = {
    'x-rapidapi-host': RAPIDAPI_HOST,
    'x-rapidapi-key': RAPIDAPI_KEY,
  };

  const requestOptions: RequestInit = {
    method,
    headers,
  };

  // Add body for POST requests
  if (method === 'POST' && body) {
    headers['Content-Type'] = 'application/json';
    requestOptions.body = JSON.stringify(body);
  }

  try {
    console.log(`RapidAPI Request: ${method} ${url}`);
    
    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('RapidAPI Error:', response.status, errorText);
      throw new Error(`RapidAPI request failed: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('RapidAPI Response received');
    
    return data;
  } catch (error) {
    console.error('RapidAPI request error:', error);
    throw error;
  }
}

/**
 * Search products on 1688
 * Note: Update endpoint based on actual API documentation
 */
export async function searchProducts(params: {
  keyword?: string;
  categoryId?: string;
  page?: number;
  pageSize?: number;
}): Promise<any> {
  try {
    // TODO: Update endpoint based on actual API documentation
    // Common endpoints: /1688/product/search or /api/product/search
    const response = await rapidAPIRequest({
      method: 'GET', // or 'POST' depending on API
      endpoint: '/1688/product/search',
      params: {
        keyword: params.keyword || '',
        page: params.page || 1,
        pageSize: params.pageSize || 20,
        ...(params.categoryId && { categoryId: params.categoryId }),
      },
    });

    return response;
  } catch (error) {
    console.error('Error searching products:', error);
    throw error;
  }
}

/**
 * Get product details
 */
export async function getProductDetail(productId: string): Promise<any> {
  try {
    const response = await rapidAPIRequest({
      method: 'GET',
      endpoint: '/1688/product/detail',
      params: {
        productId,
      },
    });

    return response;
  } catch (error) {
    console.error('Error fetching product detail:', error);
    throw error;
  }
}

/**
 * Convert image URL (you already have this endpoint!)
 */
export async function convertImageUrl(imageUrl: string): Promise<any> {
  try {
    const response = await rapidAPIRequest({
      method: 'POST',
      endpoint: '/1688/tools/image/convert_url',
      body: {
        url: imageUrl,
      },
    });

    return response;
  } catch (error) {
    console.error('Error converting image URL:', error);
    throw error;
  }
}

/**
 * Image search by URL
 * Note: Update endpoint based on actual API documentation
 */
export async function searchByImage(imageUrl: string): Promise<any> {
  try {
    // First convert the image URL
    const convertedImage = await convertImageUrl(imageUrl);
    
    // Then search using the converted URL
    // TODO: Update endpoint based on actual API documentation
    const response = await rapidAPIRequest({
      method: 'POST',
      endpoint: '/1688/tools/image/search',
      body: {
        imageUrl: convertedImage.url || imageUrl,
      },
    });

    return response;
  } catch (error) {
    console.error('Error in image search:', error);
    throw error;
  }
}

/**
 * Get categories
 */
export async function getCategories(): Promise<any> {
  try {
    const response = await rapidAPIRequest({
      method: 'GET',
      endpoint: '/1688/category/list',
    });

    return response;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}

/**
 * Test API connection
 */
export async function testConnection(): Promise<boolean> {
  try {
    // Try a simple search to test connection
    await searchProducts({ keyword: 'test', page: 1, pageSize: 1 });
    return true;
  } catch (error) {
    console.error('API connection test failed:', error);
    return false;
  }
}

