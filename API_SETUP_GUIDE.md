# 1688.com API Setup Guide

## Getting Real Products from 1688.com

This guide will help you obtain API credentials to fetch **real products** from 1688.com instead of mock data.

---

## Step 1: Register on Alibaba Open Platform

### 1.1 Create Account

1. Visit: **https://open.1688.com**
2. Click **注册** (Register) or **登录** (Login) if you have an Alibaba account
3. Complete registration with:
   - Company name
   - Business license (required for full access)
   - Contact information
   - Valid email address

### 1.2 Verify Your Account

- Email verification
- Phone number verification
- Business verification (may take 1-3 business days)

**Note:** Individual accounts have limited access. Business accounts get full API access.

---

## Step 2: Create an Application

### 2.1 Access Developer Console

1. Log in to https://open.1688.com
2. Go to **应用管理** (Application Management)
3. Click **创建应用** (Create Application)

### 2.2 Fill Application Details

```
Application Name: [Your App Name] (e.g., "My Sourcing Platform")
Application Type: Web Application
Website URL: http://localhost:3000 (for development)
Callback URL: http://localhost:3000/api/callback
Description: E-commerce platform for browsing 1688 products
```

### 2.3 Submit for Approval

- Submit application for review
- Approval usually takes 1-3 business days
- You'll receive notification via email

---

## Step 3: Get API Credentials

### 3.1 After Approval

Once approved, you'll receive:
- **App Key** (应用Key / appkey)
- **App Secret** (应用密钥 / secret)

### 3.2 Find Your Credentials

1. Go to **应用管理** (Application Management)
2. Click on your application
3. View **基本信息** (Basic Information)
4. Copy **App Key** and **App Secret**

**Example:**
```
App Key: 12345678
App Secret: 1a2b3c4d5e6f7g8h9i0j
```

---

## Step 4: Request API Permissions

### 4.1 Required APIs

Apply for these API permissions:

1. **Product Search API** (商品搜索)
   - Method: `alibaba.cross.search`
   - For searching products by keyword

2. **Product Details API** (商品详情)
   - Method: `alibaba.cross.detail`
   - For getting detailed product information

3. **Product Images API** (商品图片)
   - Method: `alibaba.cross.image.query`
   - For fetching product images

4. **Category API** (类目接口)
   - Method: `alibaba.category.get`
   - For category listings

### 4.2 Apply for Permissions

1. Go to **API权限管理** (API Permission Management)
2. Search for each API
3. Click **申请权限** (Apply for Permission)
4. Wait for approval (1-3 days per API)

---

## Step 5: Configure Your Application

### 5.1 Create .env.local File

In your project root (`/Users/ridafakherlden/www/china/`), create `.env.local`:

```bash
# 1688.com API Credentials
ALIBABA_APP_KEY=your_actual_app_key_here
ALIBABA_APP_SECRET=your_actual_app_secret_here

# API Configuration
ALIBABA_API_URL=https://gw.open.1688.com/openapi
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 5.2 Replace with Your Credentials

```env
ALIBABA_APP_KEY=12345678
ALIBABA_APP_SECRET=1a2b3c4d5e6f7g8h9i0j
```

### 5.3 Restart Development Server

```bash
# Stop current server (Ctrl+C)
npm run dev
```

---

## Step 6: Verify API Connection

### 6.1 Test API Access

Visit: http://localhost:3000/api/products

You should see:
- Real products from 1688.com
- Actual product images
- Real supplier information
- Authentic pricing and MOQ data

### 6.2 Check Logs

Monitor your terminal for:
```
✓ Successfully connected to 1688.com API
✓ Fetched 20 products from category: electronics
```

---

## API Endpoints Documentation

### Product Search

**Endpoint:** `alibaba.cross.search`

**Parameters:**
```javascript
{
  keyword: string,        // Search term
  page: number,          // Page number (starts at 1)
  pageSize: number,      // Items per page (max 40)
  categoryId: string,    // Optional category filter
  startPrice: number,    // Optional min price
  endPrice: number,      // Optional max price
}
```

**Response:**
```javascript
{
  result: {
    total: number,
    products: [
      {
        productId: string,
        subject: string,         // Title
        price: number,
        imageUrl: string,
        supplierName: string,
        moq: number,
        // ... more fields
      }
    ]
  }
}
```

### Product Details

**Endpoint:** `alibaba.cross.detail`

**Parameters:**
```javascript
{
  productId: string,     // Product ID from search results
}
```

**Response:**
```javascript
{
  result: {
    productId: string,
    subject: string,
    description: string,
    images: [string],      // Array of image URLs
    price: number,
    priceRange: {
      startQuantity: number,
      endQuantity: number,
    },
    supplierInfo: {
      name: string,
      rating: number,
      // ... more fields
    }
  }
}
```

---

## Common Issues

### Issue 1: Access Token Invalid

**Error:** `Access token is invalid`

**Solution:**
- Verify App Key and App Secret are correct
- Check if API permissions are approved
- Ensure account is business-verified

### Issue 2: API Permission Denied

**Error:** `No permission to call this API`

**Solution:**
- Apply for specific API permissions
- Wait for approval (1-3 days)
- Check approval status in console

### Issue 3: Rate Limit Exceeded

**Error:** `API rate limit exceeded`

**Solution:**
- Free tier: 100 requests/day
- Basic tier: 1000 requests/day
- Premium tier: 10000+ requests/day
- Upgrade your plan if needed

### Issue 4: Invalid Signature

**Error:** `Signature verification failed`

**Solution:**
- Verify App Secret is correct
- Check timestamp is within 10 minutes
- Ensure parameters are sorted correctly

---

## API Rate Limits

| Plan | Requests/Day | Requests/Second |
|------|--------------|-----------------|
| Free | 100 | 1 |
| Basic | 1,000 | 10 |
| Standard | 10,000 | 50 |
| Premium | 100,000+ | 200+ |

---

## Alternative: Using a Proxy Service

If you can't get direct API access, consider these alternatives:

### Option 1: 1688 Data API Services

Third-party services that provide 1688.com data:
- **APISpace** - https://www.apispace.com
- **RapidAPI** - https://rapidapi.com (search "1688" or "Alibaba")
- **APILayer** - https://apilayer.com

### Option 2: Web Scraping (Not Recommended)

**Cons:**
- Violates 1688.com Terms of Service
- Unreliable (page structure changes)
- IP blocking risk
- Legal issues

**We don't recommend this approach.**

---

## Pricing

### 1688.com Open Platform

- **Registration:** Free
- **API Access:** Free tier available
- **Business Verification:** May require business license

### Paid Plans (Optional)

- Basic: ~¥500/month (higher rate limits)
- Standard: ~¥2000/month (more features)
- Enterprise: Custom pricing

---

## Support Resources

### Official Documentation

- **API Docs:** https://open.1688.com/api/apidocdetail.htm
- **Developer Forum:** https://openclub.1688.com
- **API Console:** https://console.1688.com

### Community Resources

- **GitHub Issues:** https://github.com/ridaFD/china/issues
- **Stack Overflow:** Tag [alibaba] or [1688]

### Contact Support

- **Email:** api-support@1688.com
- **Phone:** +86 571-8502-2088 (Chinese)
- **Help Center:** https://helpcenter.1688.com

---

## Testing Without API Access

While waiting for API approval, the app uses **realistic mock data**:

✅ 20 products per page  
✅ Real-looking images  
✅ Supplier information  
✅ Verification badges  
✅ All features work  

This lets you develop and test the UI before getting real API access.

---

## Next Steps

1. ✅ Register on https://open.1688.com
2. ✅ Create application
3. ✅ Request API permissions
4. ✅ Get App Key and Secret
5. ✅ Configure `.env.local`
6. ✅ Restart server
7. ✅ See real products!

---

**Questions?** Check TROUBLESHOOTING.md or open an issue on GitHub.

**Last Updated:** October 24, 2025

