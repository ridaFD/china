# Setup Instructions for 1688.com Integration

## Quick Start

1. **Copy the environment template:**
   ```bash
   cp .env.example .env.local
   ```

2. **Get your API credentials from Alibaba:**
   - Visit: https://open.1688.com
   - Register/Login
   - Create an application
   - Get your App Key and App Secret

3. **Edit `.env.local` and add your credentials:**
   ```env
   ALIBABA_APP_KEY=your_actual_app_key
   ALIBABA_APP_SECRET=your_actual_app_secret
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Visit http://localhost:3000**

## Without API Credentials

The app will work without credentials and show mock data. This is useful for:
- Testing the UI
- Development
- Demo purposes

## API Endpoints Available

Once configured, your app will access:
- Product Search: `alibaba.product.search`
- Product Details: `alibaba.product.get`

## Troubleshooting

### "Using mock data" message appears
- Your API credentials are not set or incorrect
- Check `.env.local` exists and has correct values
- Restart the dev server after changing environment variables

### Images not loading
- Already configured in `next.config.ts`
- Make sure you restart the server after any config changes

### API errors
- Verify your API application is approved on Alibaba Open Platform
- Check that API permissions are granted
- Check browser console for detailed error messages

## Need Help?

Check the main [README.md](./README.md) for detailed documentation.

