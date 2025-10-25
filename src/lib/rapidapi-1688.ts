/**
 * RapidAPI 1688 Integration
 * Using 1688-product2 API from RapidAPI
 */

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
const RAPIDAPI_HOST = '1688-datahub.p.rapidapi.com';
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
export async function rapidAPIRequest(options: RapidAPIOptions): Promise<any> {
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
 * Endpoint: GET /item_search
 */
export async function searchProducts(params: {
  keyword?: string;
  categoryId?: string;
  page?: number;
  pageSize?: number;
}): Promise<any> {
  try {
    const response = await rapidAPIRequest({
      method: 'GET',
      endpoint: '/item_search',
      params: {
        q: params.keyword || '',
        page: params.page || 1,
        pageSize: params.pageSize || 20,
        sort: 'default',
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
 * Endpoint: GET /item_detail
 */
export async function getProductDetail(itemId: string): Promise<any> {
  try {
    const response = await rapidAPIRequest({
      method: 'GET',
      endpoint: '/item_detail',
      params: {
        itemId,
      },
    });

    return response;
  } catch (error) {
    console.error('Error fetching product detail:', error);
    throw error;
  }
}

/**
 * Image search by URL
 * Endpoint: GET /item_search_image
 */
export async function searchByImage(imageUrl: string, page: number = 1): Promise<any> {
  try {
    const response = await rapidAPIRequest({
      method: 'GET',
      endpoint: '/item_search_image',
      params: {
        imgUrl: imageUrl,
        page,
        sort: 'default',
      },
    });

    return response;
  } catch (error) {
    console.error('Error in image search:', error);
    throw error;
  }
}

/**
 * Get supplier/company contact information
 * Endpoint: GET /company_contact
 */
export async function getCompanyContact(storeId: string): Promise<any> {
  try {
    const response = await rapidAPIRequest({
      method: 'GET',
      endpoint: '/company_contact',
      params: {
        storeId,
      },
    });

    return response;
  } catch (error) {
    console.error('Error fetching company contact:', error);
    throw error;
  }
}

/**
 * Get product reviews
 * Endpoint: GET /item_review
 */
export async function getProductReviews(params: {
  itemId: string;
  sellerTitle: string;
  page?: number;
  pageSize?: number;
}): Promise<any> {
  try {
    const response = await rapidAPIRequest({
      method: 'GET',
      endpoint: '/item_review',
      params: {
        itemId: params.itemId,
        sellerTitle: params.sellerTitle,
        page: params.page || 1,
        pageSize: params.pageSize || 10,
        filter: 'allReviews',
        sort: 'default',
        source: 'item',
      },
    });

    return response;
  } catch (error) {
    console.error('Error fetching product reviews:', error);
    throw error;
  }
}

/**
 * Search products in a specific store
 * Endpoint: GET /store_item_search
 */
export async function searchStoreProducts(params: {
  storeId: string;
  keyword?: string;
  page?: number;
  pageSize?: number;
}): Promise<any> {
  try {
    const requestParams: any = {
      storeId: params.storeId,
      page: params.page || 1,
      pageSize: params.pageSize || 30,
      sort: 'default',
    };

    // Add keyword if provided
    if (params.keyword && params.keyword.trim()) {
      requestParams.q = params.keyword.trim();
    }

    const response = await rapidAPIRequest({
      method: 'GET',
      endpoint: '/store_item_search',
      params: requestParams,
    });

    return response;
  } catch (error) {
    console.error('Error searching store products:', error);
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

