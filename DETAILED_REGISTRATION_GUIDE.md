# 🔐 Detailed Registration Guide: 1688.com Open Platform

## Complete Step-by-Step Tutorial to Get API Credentials

This guide provides **detailed instructions with exact steps** for registering on 1688.com Open Platform and obtaining your API credentials.

---

## 📋 Before You Start

### What You'll Need:

- ✅ **Email Address** (valid and accessible)
- ✅ **Phone Number** (for SMS verification)
- ✅ **Company Information** (optional but recommended)
  - Company Name
  - Business License Number (for business accounts)
  - Tax ID or Business Registration
- ✅ **Chinese Language Support** (use browser translation)
- ✅ **Valid Payment Method** (for premium features, optional)

### Time Required:
- **Registration:** 10-15 minutes
- **Application Creation:** 10 minutes
- **Approval Wait:** 1-3 business days
- **API Permission Requests:** 1-3 business days per API

---

## 🌐 Part 1: Account Registration

### Step 1.1: Navigate to 1688.com Open Platform

**URL:** https://open.1688.com

**What you'll see:**
- Chinese language interface (use Google Translate)
- Main navigation with "首页" (Home), "文档" (Docs), "控制台" (Console)
- Login/Register buttons in top-right corner

### Step 1.2: Click Register Button

**Look for:**
- Button text: **"注册"** (Register) or **"免费注册"** (Free Register)
- Usually in top-right corner
- Blue or orange colored button

**Alternative paths:**
1. Click "控制台" (Console) → Redirects to login → Click register link
2. Direct URL: https://account.1688.com/member/join.htm

### Step 1.3: Choose Account Type

**You'll see 2 options:**

#### **Option A: Personal Account (个人账户)**
- ✅ Faster approval
- ✅ Easier verification
- ❌ Limited API access
- ❌ Lower rate limits
- **Best for:** Testing and small projects

#### **Option B: Business Account (企业账户)** ⭐ RECOMMENDED
- ✅ Full API access
- ✅ Higher rate limits
- ✅ All API methods available
- ❌ Requires business verification
- ❌ Needs business license
- **Best for:** Production applications

**Click your preferred option.**

### Step 1.4: Fill Registration Form (Personal Account)

**Required Fields:**

1. **手机号** (Phone Number):
   ```
   Format: +86 followed by your number
   Example: +86 13812345678
   ```
   - Must be able to receive SMS
   - One number per account

2. **短信验证码** (SMS Verification Code):
   ```
   - Click "获取验证码" (Get Code)
   - Enter 6-digit code from SMS
   - Valid for 5 minutes
   ```

3. **密码** (Password):
   ```
   Requirements:
   - 8-20 characters
   - Include: letters + numbers
   - Recommended: letters + numbers + symbols
   - Example: MyPass123!
   ```

4. **确认密码** (Confirm Password):
   ```
   - Re-enter same password
   - Must match exactly
   ```

5. **邮箱** (Email):
   ```
   Format: your.email@example.com
   - Must be valid and accessible
   - Will receive verification link
   - One email per account
   ```

6. **真实姓名** (Real Name):
   ```
   - Your legal name
   - Can be in English or Chinese
   - Example: John Smith or 张三
   ```

7. **同意条款** (Agree to Terms):
   ```
   - Check the box: "我已阅读并同意"
   - Translates to: "I have read and agree"
   ```

**Click:** "提交注册" (Submit Registration)

### Step 1.5: Fill Registration Form (Business Account)

**Additional Required Fields:**

1. **企业名称** (Company Name):
   ```
   - Full legal business name
   - Example: ABC Trading Company Ltd.
   ```

2. **统一社会信用代码** (Business License Number):
   ```
   - 18-digit code from business license
   - Example: 91110000MA001234XX
   - Required for Chinese companies
   ```

3. **营业执照** (Business License Upload):
   ```
   - Upload clear photo or scan
   - Format: JPG, PNG
   - Max size: 5MB
   - Must be valid/not expired
   ```

4. **法人姓名** (Legal Representative):
   ```
   - Name of company legal representative
   - Must match business license
   ```

5. **联系人** (Contact Person):
   ```
   - Name of person managing account
   - Can be different from legal rep
   ```

6. **职位** (Position/Title):
   ```
   - Your job title
   - Example: IT Manager, Developer, CEO
   ```

**Click:** "提交注册" (Submit Registration)

### Step 1.6: Email Verification

**Check your email inbox:**

1. Look for email from **noreply@1688.com**
2. Subject: "1688开放平台邮箱验证" (1688 Open Platform Email Verification)
3. Click verification link in email
4. Link valid for 24 hours

**Email content example:**
```
您好，

请点击以下链接验证您的邮箱：
[验证链接]

链接24小时内有效。

1688开放平台
```

**If you don't receive email:**
- Check spam/junk folder
- Wait 5-10 minutes
- Click "重新发送" (Resend) on registration page
- Verify email address is correct

### Step 1.7: Phone Verification (if required)

**You may receive a verification call:**

1. Answer phone call from Chinese number
2. Automated voice will say verification code
3. Enter code on verification page
4. Code valid for 10 minutes

**Alternative:**
- SMS verification code
- Enter on the page shown after email verification

### Step 1.8: Complete Profile Setup

**After verification, you'll be redirected to profile setup:**

**Additional Information:**

1. **行业** (Industry):
   ```
   Choose from dropdown:
   - 电子商务 (E-commerce)
   - 软件开发 (Software Development)
   - 批发零售 (Wholesale/Retail)
   - 其他 (Other)
   ```

2. **公司规模** (Company Size):
   ```
   - 1-10人 (1-10 employees)
   - 11-50人 (11-50)
   - 51-200人 (51-200)
   - 200人以上 (200+)
   ```

3. **公司网站** (Company Website):
   ```
   - Optional but recommended
   - Example: https://www.yourcompany.com
   - Can use: "暂无" (None yet)
   ```

4. **使用场景** (Use Case):
   ```
   Select purpose:
   - 商品展示 (Product Display)
   - 订单管理 (Order Management)
   - 数据分析 (Data Analysis)
   - 其他 (Other)
   ```

**Click:** "完成" (Complete)

---

## 🚀 Part 2: Creating an Application

### Step 2.1: Access Developer Console

**After registration, navigate to:**

**URL:** https://open.1688.com/console

**Or:**
1. From homepage: Click "控制台" (Console)
2. Login with your credentials
3. You'll see the dashboard

**Dashboard sections:**
- 我的应用 (My Applications)
- API管理 (API Management)
- 数据统计 (Data Statistics)
- 账户信息 (Account Information)

### Step 2.2: Navigate to Application Management

**Look for menu items:**

1. Click **"应用管理"** (Application Management)
   - Left sidebar or top menu
   - Icon: 📱 or similar

2. Or click **"我的应用"** (My Applications)
   - Shows list of your apps
   - Initially empty

**You'll see:**
- List of applications (empty if first time)
- "创建应用" (Create Application) button
- Orange or blue button, prominently displayed

### Step 2.3: Click "Create Application"

**Button text:** "创建应用" or "新建应用"

**What happens:**
- Modal/popup window opens
- Or redirect to application creation form
- Form with multiple fields

### Step 2.4: Fill Application Details

**Form Fields Explained:**

#### 1. **应用名称** (Application Name) ⭐ REQUIRED
```
Guidelines:
- 4-20 characters
- Letters, numbers, Chinese characters allowed
- No special characters
- Must be unique

Examples:
✅ "MyStoreAPI"
✅ "产品浏览平台" (Product Browsing Platform)
✅ "Wholesale Manager 2024"
❌ "App" (too short)
❌ "My@App#123" (special characters)
```

#### 2. **应用类型** (Application Type) ⭐ REQUIRED
```
Select from dropdown:

Option 1: Web应用 (Web Application) ⭐ CHOOSE THIS
- For websites and web apps
- URL-based authentication
- Callback URL required

Option 2: 移动应用 (Mobile Application)
- For iOS/Android apps
- Different authentication flow

Option 3: 服务端应用 (Server Application)
- For backend services
- Direct API access

Recommended: Choose "Web应用"
```

#### 3. **应用网址** (Application URL) ⭐ REQUIRED
```
Format: Full URL with protocol

Examples:
Development:
✅ http://localhost:3000
✅ http://127.0.0.1:3000

Production:
✅ https://www.yoursite.com
✅ https://yourdomain.com

❌ localhost (missing protocol)
❌ www.site.com (needs http/https)
❌ yoursite (not complete URL)
```

#### 4. **回调地址** (Callback URL) ⭐ REQUIRED
```
Used for OAuth authentication

Format: Your domain + callback path

Examples:
✅ http://localhost:3000/api/callback
✅ http://localhost:3000/auth/callback
✅ https://yoursite.com/api/auth/1688/callback

Multiple callbacks (if allowed):
- One per line
- Or comma-separated

Note: Must match your application URL domain
```

#### 5. **应用描述** (Application Description)
```
150-500 characters
Explain your app's purpose

Example (English):
"E-commerce platform for browsing and sourcing wholesale products from 1688.com. Allows users to search products, view details, compare prices, and contact suppliers."

Example (Chinese):
"用于浏览和采购1688.com批发产品的电商平台。允许用户搜索产品、查看详情、比较价格和联系供应商。"

Tips:
- Be specific about functionality
- Mention data you'll access
- Explain user benefits
```

#### 6. **应用图标** (Application Icon) - Optional
```
Requirements:
- Format: JPG, PNG
- Size: 200x200 pixels minimum
- Max file size: 500KB
- Square image recommended

If you don't have:
- Skip for now
- Can add later in app settings
```

#### 7. **联系人信息** (Contact Information)
```
Contact Name: Your name or team contact
Contact Email: Valid email for communications
Contact Phone: Phone number with country code
```

#### 8. **使用场景** (Use Case/Scenario)
```
Select all that apply:
☑ 商品搜索 (Product Search)
☑ 商品详情 (Product Details)
☑ 图片搜索 (Image Search)
☑ 供应商信息 (Supplier Information)
☑ 类目查询 (Category Query)
☐ 订单管理 (Order Management) - if needed
☐ 其他 (Other)
```

#### 9. **预计调用量** (Expected API Call Volume)
```
Select estimated daily API calls:

- 100次以下 (Less than 100/day)
- 100-1000次 (100-1000/day)
- 1000-10000次 (1000-10000/day)
- 10000次以上 (More than 10000/day)

Tip: Start with conservative estimate
Can upgrade later if needed
```

### Step 2.5: Submit Application

1. **Review all fields** - Make sure everything is correct
2. **Check agreement box** - "我已阅读并同意《开发者协议》"
3. **Click:** "提交申请" (Submit Application)

**What happens next:**
- Success message appears
- Application goes into review
- Status shown as: "审核中" (Under Review)
- Notification email sent

### Step 2.6: Wait for Approval

**Timeline:**
- **Fast track:** 1 business day (personal accounts)
- **Standard:** 2-3 business days (business accounts)
- **Delayed:** Up to 5 days (if issues)

**Check status:**
1. Go to Console → My Applications
2. Look for status badge:
   - 🟡 **审核中** (Under Review) - Wait
   - 🟢 **已通过** (Approved) - Success!
   - 🔴 **未通过** (Rejected) - See reason

**Rejection reasons:**
- Incomplete information
- Invalid business license
- Suspicious use case
- Duplicate application
- Violation of terms

**If rejected:**
1. Read rejection reason
2. Fix the issues
3. Resubmit application

**Email notifications:**
- Approval: "您的应用已通过审核"
- Rejection: "您的应用审核未通过"

---

## 🔑 Part 3: Getting Your API Credentials

### Step 3.1: Access Approved Application

**After approval:**

1. Go to: https://open.1688.com/console
2. Click **"应用管理"** (Application Management)
3. You'll see your approved application with green checkmark ✅

**Application card shows:**
- Application name
- Application type
- Status: "已启用" (Enabled)
- Creation date

### Step 3.2: View Application Details

**Click on your application name or "查看详情" (View Details) button**

**You'll see a page with tabs:**
- 基本信息 (Basic Information) ⭐ START HERE
- API权限 (API Permissions)
- 数据统计 (Data Statistics)
- 应用设置 (Application Settings)

### Step 3.3: Find Your Credentials

**In "基本信息" (Basic Information) tab:**

**You'll see a section labeled "应用凭证" (Application Credentials):**

```
┌─────────────────────────────────────────┐
│  应用凭证 (Application Credentials)      │
├─────────────────────────────────────────┤
│                                          │
│  App Key: 12345678                      │
│  [复制] (Copy button)                   │
│                                          │
│  App Secret: ********************       │
│  [显示] (Show) [复制] (Copy)            │
│                                          │
└─────────────────────────────────────────┘
```

### Step 3.4: Copy App Key

**App Key (应用Key):**

1. **Locate:** Usually 8-digit number
2. **Example:** `12345678` or `23456789`
3. **Click:** "复制" (Copy) button next to App Key
4. **Or:** Manually select and copy the number

**Save this in a secure location!**

```
My App Key: 12345678
```

### Step 3.5: Reveal and Copy App Secret

**App Secret (应用密钥):**

**Initially hidden:**
- Shows as: `********************`
- Or: `••••••••••••••••••••`

**To reveal:**

1. **Click:** "显示" (Show) or eye icon 👁️
2. **May require:** Re-enter your password for security
3. **After authentication:** Full secret is revealed

**App Secret format:**
- Usually 16-40 character alphanumeric string
- Mix of letters (a-z, A-Z) and numbers (0-9)
- Example: `1a2b3c4d5e6f7g8h9i0j1k2l3m4n`

**Copy the secret:**
1. **Click:** "复制" (Copy) button
2. **Or:** Select all and copy manually (Ctrl+C / Cmd+C)

**Save immediately:**
```
My App Secret: 1a2b3c4d5e6f7g8h9i0j1k2l3m4n
```

### Step 3.6: Security Best Practices

⚠️ **IMPORTANT - Keep These Safe!**

**DO:**
- ✅ Save in password manager
- ✅ Store in `.env.local` file (gitignored)
- ✅ Keep backups in secure location
- ✅ Treat like passwords - never share publicly

**DON'T:**
- ❌ Commit to Git/GitHub
- ❌ Share in public forums
- ❌ Include in frontend code
- ❌ Send via unencrypted email
- ❌ Share screenshots with credentials visible

**If compromised:**
1. Go to Application Settings
2. Click "重置密钥" (Reset Secret)
3. Generate new credentials
4. Update your .env.local file

---

## 🔐 Part 4: Requesting API Permissions

### Step 4.1: Navigate to API Permissions

**In your application details:**

1. Click **"API权限"** (API Permissions) tab
2. Or: Console → API管理 → 我的API权限

**You'll see:**
- List of available APIs
- Your current permissions (initially none)
- "申请权限" (Apply for Permission) buttons

### Step 4.2: Required APIs for Product Browsing

**Apply for these APIs:**

#### **1. Product Search API (商品搜索接口)**
```
API Name: alibaba.cross.search
or: alibaba.product.search

Purpose: Search products by keyword
Status: Must apply
Approval: 1-3 days

Click: "申请权限" (Apply)
```

#### **2. Product Details API (商品详情接口)**
```
API Name: alibaba.cross.detail
or: alibaba.product.get

Purpose: Get detailed product information
Status: Must apply
Approval: 1-3 days

Click: "申请权限" (Apply)
```

#### **3. Product Images API (商品图片接口)**
```
API Name: alibaba.cross.image.query

Purpose: Fetch product images
Status: Usually included with details
Approval: 1-3 days

Click: "申请权限" (Apply)
```

#### **4. Category API (类目接口)** - Optional
```
API Name: alibaba.category.get

Purpose: Get product categories
Status: Optional for now
Approval: 1-3 days
```

### Step 4.3: Fill Permission Application Form

**For each API, you'll need to fill:**

**1. 申请原因** (Application Reason):
```
Explain why you need this API

Example:
"我们的应用需要搜索和展示1688商品信息，为用户提供批发采购服务。"

Translation:
"Our application needs to search and display 1688 product information to provide wholesale purchasing services to users."
```

**2. 预计调用量** (Expected Call Volume):
```
Daily/Monthly estimates
- Be realistic
- Can request increase later

Example:
- 每日调用量: 500次 (500 calls/day)
- 每月调用量: 15000次 (15000 calls/month)
```

**3. 使用场景** (Use Case):
```
Describe specific features

Example:
"用户搜索功能、商品详情页展示、价格比较工具"

Translation:
"User search function, product detail page display, price comparison tool"
```

### Step 4.4: Submit and Wait for API Approval

**After submitting each API request:**

**Status tracking:**
- 待审核 (Pending) - Just submitted
- 审核中 (Under Review) - Being processed
- 已通过 (Approved) - ✅ Granted!
- 已拒绝 (Rejected) - ❌ Denied

**Timeline:**
- Standard: 1-3 business days per API
- Expedited: Contact support (for business accounts)
- Holiday delays: Add 2-3 days during Chinese holidays

**Check status:**
1. API权限 tab in your application
2. Email notifications
3. Console dashboard

---

## ✅ Part 5: Configure Your Application

### Step 5.1: Verify You Have All Credentials

**Checklist:**
- ✅ App Key (8-digit number)
- ✅ App Secret (long alphanumeric string)
- ✅ At least one API permission approved
- ✅ Application status: "已启用" (Enabled)

### Step 5.2: Create .env.local File

**Open terminal and navigate to your project:**

```bash
cd /Users/ridafakherlden/www/china
```

**Create the file:**

```bash
touch .env.local
```

**Or create manually in your IDE/editor**

### Step 5.3: Add Credentials

**Open .env.local and add:**

```env
# 1688.com API Credentials
ALIBABA_APP_KEY=12345678
ALIBABA_APP_SECRET=1a2b3c4d5e6f7g8h9i0j1k2l3m4n

# API Configuration
ALIBABA_API_URL=https://gw.open.1688.com/openapi
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Replace with YOUR actual credentials:**
- `12345678` → Your App Key
- `1a2b3c4d5e6f7g8h9i0j1k2l3m4n` → Your App Secret

**Save the file** (Cmd+S / Ctrl+S)

### Step 5.4: Verify .env.local is Gitignored

**Check .gitignore file includes:**

```
.env*
!.env.example
```

This prevents accidentally committing your credentials!

### Step 5.5: Restart Development Server

**Stop current server:**
- Press `Ctrl+C` in terminal

**Start again:**
```bash
npm run dev
```

**You should see:**
```
✓ Ready on http://localhost:3000
```

---

## 🧪 Part 6: Test Your Setup

### Step 6.1: Check API Status Page

**Visit:** http://localhost:3000/api-status

**Expected results:**
- ✅ App Key: Configured
- ✅ App Secret: Configured
- ✅ Status: configured
- ✅ Message: "API credentials are configured!"

### Step 6.2: Test Product Listing

**Visit:** http://localhost:3000/products

**Look for:**
- Real product titles (Chinese or English)
- Actual product images (not picsum.photos)
- Real supplier names
- Authentic pricing in CNY

**Banner should show:**
- ✅ "Fetching real data from 1688.com"
- NOT: "⚠️ Using mock data"

### Step 6.3: Check Browser Console

**Open Developer Tools:**
- Chrome/Edge: F12 or Cmd+Option+I
- Firefox: F12
- Safari: Cmd+Option+I

**Look for:**
```
✓ Connected to 1688.com API
✓ Fetched 20 products
✓ Category: electronics
```

**Should NOT see:**
```
⚠️ MOCK DATA: API credentials not configured
```

### Step 6.4: Test Search Functionality

**Try searching:**
1. Visit homepage
2. Search for: "手机" (phone) or "laptop"
3. Click search
4. Should see real results from 1688.com

### Step 6.5: Test Category Filtering

**Try categories:**
1. Click any category icon
2. Should see products from that category
3. Real products, not mock data

---

## 🆘 Troubleshooting

### Issue: "Access token invalid"

**Causes:**
- Wrong App Key
- Wrong App Secret
- Typo in credentials

**Solutions:**
1. Double-check credentials in console
2. Copy again carefully
3. Check for extra spaces
4. Verify .env.local syntax

### Issue: "API permission denied"

**Causes:**
- API permission not approved yet
- Wrong API method name
- Account doesn't have access

**Solutions:**
1. Check API权限 tab
2. Verify all needed APIs are approved
3. Wait for approval if pending
4. Contact support if rejected

### Issue: "Signature verification failed"

**Causes:**
- App Secret is wrong
- Parameter encoding issue
- Timestamp problem

**Solutions:**
1. Re-copy App Secret
2. Check for special characters
3. Verify .env.local has no quotes around values
4. Restart server after changes

### Issue: Still seeing mock data

**Causes:**
- .env.local not created
- Server not restarted
- Wrong file location
- Credentials not saved

**Solutions:**
1. Verify .env.local exists in project root
2. Restart dev server
3. Clear browser cache
4. Check /api-status page

---

## 📞 Getting Help

### Official Support

**1688 Customer Service:**
- Phone: +86 571-8502-2088
- Email: api-support@1688.com
- Hours: 9:00-18:00 Beijing Time (Mon-Fri)

**Developer Forum:**
- URL: https://openclub.1688.com
- Post questions (in Chinese)
- Community support

### Language Assistance

**If you don't speak Chinese:**

1. **Use Google Translate:**
   - Install Chrome extension
   - Right-click → Translate to English
   - Or: translate.google.com

2. **Translation Apps:**
   - Google Translate app
   - Microsoft Translator
   - Baidu Translate

3. **Hire Translator:**
   - Fiverr, Upwork for professional help
   - Chinese-speaking friend or colleague

### Alternative Solutions

**Can't get 1688 API access?**

**Option 1: Third-Party API Services:**
- APISpace (https://www.apispace.com)
- RapidAPI (search "1688" or "Alibaba")
- DataFire marketplace

**Option 2: Contact Agent/Sourcing Company:**
- Alibaba sourcing agents
- They have API access
- Can set up for you (fee-based)

**Option 3: Continue with Mock Data:**
- Perfect for development/testing
- All features work
- No cost

---

## ✅ Success Checklist

After completing this guide, you should have:

- ✅ Registered 1688 account
- ✅ Created application
- ✅ Application approved
- ✅ Got App Key (8 digits)
- ✅ Got App Secret (long string)
- ✅ API permissions approved
- ✅ Created .env.local file
- ✅ Added credentials correctly
- ✅ Restarted server
- ✅ Seeing real products!

---

## 🎉 Congratulations!

You now have **real 1688.com data** flowing into your application!

**Next steps:**
- Explore real products
- Test all features
- Build your e-commerce platform
- Monitor API usage
- Consider upgrading plan if needed

**Questions?**
- Check TROUBLESHOOTING.md
- Visit /api-status page
- Contact support
- Open GitHub issue

---

**Last Updated:** October 24, 2025  
**Author:** Development Team  
**Version:** 2.0

