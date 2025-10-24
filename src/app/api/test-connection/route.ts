/**
 * API Route: GET /api/test-connection
 * Test 1688.com API connection and credentials
 */

import { NextResponse } from 'next/server';

export async function GET() {
  const appKey = process.env.ALIBABA_APP_KEY;
  const appSecret = process.env.ALIBABA_APP_SECRET;
  
  const results = {
    configured: false,
    hasAppKey: false,
    hasAppSecret: false,
    status: '',
    message: '',
    nextSteps: [] as string[],
  };

  // Check if credentials are configured
  results.hasAppKey = !!appKey && appKey !== 'your_app_key_here';
  results.hasAppSecret = !!appSecret && appSecret !== 'your_app_secret_here';
  results.configured = results.hasAppKey && results.hasAppSecret;

  if (!results.configured) {
    results.status = 'not_configured';
    results.message = '1688.com API credentials are not configured. The app is currently using mock data.';
    results.nextSteps = [
      '1. Register at https://open.1688.com',
      '2. Create an application',
      '3. Get your App Key and App Secret',
      '4. Create .env.local file in project root',
      '5. Add: ALIBABA_APP_KEY=your_key',
      '6. Add: ALIBABA_APP_SECRET=your_secret',
      '7. Restart the development server',
      '8. See API_SETUP_GUIDE.md for detailed instructions',
    ];
  } else {
    results.status = 'configured';
    results.message = '✅ API credentials are configured! The app should be fetching real data from 1688.com.';
    results.nextSteps = [
      'If you still see mock data:',
      '1. Check that your API application is approved',
      '2. Verify API permissions are granted',
      '3. Check browser console for error messages',
      '4. See TROUBLESHOOTING.md for more help',
    ];
  }

  return NextResponse.json(results, {
    headers: {
      'Cache-Control': 'no-store',
    },
  });
}

