/**
 * 1688.com API integration utilities
 * This handles authentication and API calls to Alibaba's Open Platform
 */

import crypto from 'crypto';

interface AlibabaApiParams {
  [key: string]: string | number | boolean;
}

/**
 * Generate signature for Alibaba API request
 * Uses HMAC-MD5 algorithm as per Alibaba's specification
 */
function generateSignature(
  secret: string,
  params: AlibabaApiParams
): string {
  // Sort parameters alphabetically
  const sortedKeys = Object.keys(params).sort();
  
  // Concatenate all parameters
  let stringToSign = '';
  sortedKeys.forEach(key => {
    stringToSign += key + params[key];
  });
  
  // Generate HMAC-MD5 signature
  const hmac = crypto.createHmac('md5', secret);
  hmac.update(stringToSign);
  const signature = hmac.digest('hex').toUpperCase();
  
  return signature;
}

/**
 * Make authenticated request to Alibaba API
 */
export async function alibabaApiRequest(
  method: string,
  params: AlibabaApiParams = {}
): Promise<any> {
  const appKey = process.env.ALIBABA_APP_KEY;
  const appSecret = process.env.ALIBABA_APP_SECRET;
  const apiUrl = process.env.ALIBABA_API_URL || 'https://gw.open.1688.com/openapi';

  if (!appKey || !appSecret) {
    throw new Error('Alibaba API credentials not configured');
  }

  // Build request parameters
  const timestamp = new Date().getTime().toString();
  const requestParams: AlibabaApiParams = {
    method,
    app_key: appKey,
    timestamp,
    format: 'json',
    v: '1',
    sign_method: 'md5',
    ...params,
  };

  // Generate signature
  const signature = generateSignature(appSecret, requestParams);
  requestParams.sign = signature;

  // Build query string
  const queryString = Object.keys(requestParams)
    .map(key => `${key}=${encodeURIComponent(requestParams[key])}`)
    .join('&');

  const url = `${apiUrl}/param2/1/${method}/${appKey}?${queryString}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Alibaba API request error:', error);
    throw error;
  }
}

/**
 * Fetch products from 1688.com
 */
export async function fetchProducts(params: {
  keyword?: string;
  page?: number;
  pageSize?: number;
}) {
  try {
    // Using the search API method (this is an example - actual method name may vary)
    const response = await alibabaApiRequest('alibaba.product.search', {
      keyword: params.keyword || '',
      page: params.page || 1,
      pageSize: params.pageSize || 20,
    });

    return response;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

/**
 * Fetch single product details
 */
export async function fetchProductDetail(productId: string) {
  try {
    // Using the product detail API method
    const response = await alibabaApiRequest('alibaba.product.get', {
      productId,
    });

    return response;
  } catch (error) {
    console.error('Error fetching product detail:', error);
    throw error;
  }
}

/**
 * Currency conversion helper (CNY to other currencies)
 */
export function convertCurrency(
  amount: number,
  fromCurrency: string = 'CNY',
  toCurrency: string = 'USD',
  rate?: number
): number {
  // Default CNY to USD rate (you should fetch real-time rates)
  const defaultRate = 0.14; // 1 CNY ≈ 0.14 USD
  const conversionRate = rate || defaultRate;
  
  if (fromCurrency === 'CNY' && toCurrency === 'USD') {
    return Math.round(amount * conversionRate * 100) / 100;
  }
  
  return amount;
}

/**
 * Format price for display
 */
export function formatPrice(
  amount: number,
  currency: string = 'CNY',
  locale: string = 'zh-CN'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
}

