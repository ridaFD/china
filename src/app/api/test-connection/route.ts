/**
 * API Route: GET /api/test-connection
 * Test RapidAPI 1688-datahub connection
 */

import { NextResponse } from 'next/server';
import { rapidAPIRequest } from '@/lib/rapidapi-1688';

export async function GET() {
  try {
    // Test with a simple search request
    const response = await rapidAPIRequest({
      method: 'GET',
      endpoint: '/item_search',
      params: {
        q: 'test',
        page: 1,
        pageSize: 1,
      },
    });
    
    if (response) {
      return NextResponse.json({
        success: true,
        message: '✅ RapidAPI 1688-datahub connection successful!',
        status: 'connected',
        provider: 'RapidAPI (1688-datahub)',
      });
    } else {
      return NextResponse.json({
        success: false,
        message: '❌ API credentials not configured or invalid',
        status: 'disconnected',
        help: {
          message: 'Please configure your RapidAPI credentials',
          steps: [
            '1. Subscribe to 1688-datahub API on RapidAPI',
            '2. Get your RapidAPI key',
            '3. Add credentials to .env.local file',
            '4. See RAPIDAPI_SETUP_COMPLETE.md for detailed instructions',
          ],
        },
      });
    }
  } catch (error) {
    console.error('Error testing connection:', error);
    
    return NextResponse.json({
      success: false,
      message: '❌ API connection test failed',
      error: error instanceof Error ? error.message : 'Unknown error',
      status: 'error',
      help: {
        message: 'Check your RapidAPI credentials',
        steps: [
          '1. Verify RAPIDAPI_KEY in .env.local',
          '2. Verify RAPIDAPI_HOST is 1688-datahub.p.rapidapi.com',
          '3. Make sure you subscribed to 1688-datahub API',
          '4. Restart the dev server',
        ],
      },
    });
  }
}
