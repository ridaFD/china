# Troubleshooting Guide

## Common Issues and Solutions

### Hydration Warning in Console

**Issue:** You see a warning like:
```
A tree hydrated but some attributes of the server rendered HTML didn't match the client properties.
```

With an attribute like `cz-shortcut-listen="true"` on the `<body>` tag.

**Cause:** This is caused by browser extensions that modify the DOM before React hydrates. Common culprits:
- ColorZilla (adds `cz-shortcut-listen="true"`)
- Grammarly
- LastPass
- Other Chrome/Firefox extensions

**Solution:**
1. **Ignore it** - This warning doesn't affect functionality
2. **Disable extensions** - Turn off browser extensions for localhost
3. **Use Incognito Mode** - Test in private/incognito window without extensions

**Note:** This is NOT a bug in the application code. It's a known Next.js behavior when browser extensions modify the DOM.

Reference: https://nextjs.org/docs/messages/react-hydration-error

---

### Images Not Loading

**Issue:** Product images don't display or show broken image icons.

**Solutions:**

1. **Check next.config.ts** - Ensure image domains are whitelisted:
```typescript
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'picsum.photos' },
    { protocol: 'https', hostname: '**.1688.com' },
    // ... other domains
  ],
}
```

2. **Restart Dev Server** - After changing `next.config.ts`:
```bash
# Stop the server (Ctrl+C)
npm run dev
```

3. **Check Network Tab** - Open browser DevTools > Network to see if images are blocked

4. **CORS Issues** - Some image hosts block cross-origin requests. We use `picsum.photos` for mock data which allows CORS.

---

### Only 2 Products Showing

**Issue:** When clicking categories, only 2 products appear.

**Cause:** You're seeing the old mock data with only 2 products.

**Solution:** 
1. **Clear browser cache** - Hard refresh (Ctrl+Shift+R / Cmd+Shift+R)
2. **Restart dev server**:
```bash
npm run dev
```

**Current Behavior:** 
- Mock data now generates **20 products per page**
- Includes images from picsum.photos
- Shows supplier information with badges
- Has pagination support

---

### Category Filter Not Working

**Issue:** Clicking categories doesn't filter products.

**Fix Applied:** ✅ The API route now handles `categoryId` parameter correctly.

To verify it's working:
1. Click any category icon on homepage
2. URL should show: `/products?categoryId=electronics` (or other category)
3. Should see 20 products related to that category
4. Filter tag should appear showing active category

---

### Supplier Badges Not Showing

**Issue:** Product cards don't show verification badges or ratings.

**Solution:**
1. Ensure you're viewing mock products with supplier info
2. Check that `ProductCard.tsx` is updated
3. Clear browser cache
4. Restart dev server

**Expected Display:**
- Gold (👑), Premium (⭐), or Basic (✓) badge
- Star rating (e.g., 4.5 ★)
- Supplier name

---

### API Configuration Issues

**Issue:** "Configure API credentials" message appears.

**This is Expected!** The app is designed to work without 1688 API credentials by showing realistic mock data.

**To Use Real 1688.com Data:**

1. Register at https://open.1688.com
2. Create an application
3. Get your App Key and App Secret
4. Create `.env.local`:
```env
ALIBABA_APP_KEY=your_actual_app_key
ALIBABA_APP_SECRET=your_actual_app_secret
```
5. Restart server

**Mock Data Features:**
- ✅ 20 products per page
- ✅ Real-looking product images
- ✅ Supplier information with ratings
- ✅ Verification badges
- ✅ Category filtering
- ✅ Pagination support
- ✅ Price ranges and MOQ

---

### Dev Server Not Starting

**Issue:** `npm run dev` fails or shows errors.

**Solutions:**

1. **Delete node_modules and reinstall:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

2. **Check Node version:**
```bash
node --version
# Should be 18.x or higher
```

3. **Check port availability:**
```bash
# If port 3000 is in use
lsof -ti:3000 | xargs kill -9
npm run dev
```

4. **Clear Next.js cache:**
```bash
rm -rf .next
npm run dev
```

---

### TypeScript Errors

**Issue:** TypeScript compilation errors in IDE or build.

**Solutions:**

1. **Restart TypeScript server** (in VS Code):
   - Cmd/Ctrl + Shift + P
   - Type "TypeScript: Restart TS Server"

2. **Check TypeScript version:**
```bash
npx tsc --version
```

3. **Regenerate types:**
```bash
npm run build
```

---

### Image Search Not Working

**Issue:** Uploading image doesn't return results.

**Expected Behavior:**
- Upload image (JPG, PNG, WEBP, max 5MB)
- See loading state
- Redirected to `/products?search=image`
- See 2 mock similar products

**Solutions:**
1. Check file size (must be < 5MB)
2. Use supported formats only
3. Check browser console for errors
4. Clear session storage:
```javascript
// In browser console
sessionStorage.clear()
```

---

### Build Errors

**Issue:** `npm run build` fails.

**Common Causes:**

1. **Linter errors:**
```bash
npm run lint
# Fix any errors shown
```

2. **TypeScript errors:**
```bash
npx tsc --noEmit
```

3. **Missing dependencies:**
```bash
npm install
```

---

### Performance Issues

**Issue:** Slow page loads or laggy interactions.

**Solutions:**

1. **Check Network tab** - See if images are loading slowly
2. **Reduce image quality** - picsum.photos allows size parameters
3. **Enable compression** - Already configured in Next.js
4. **Use production build**:
```bash
npm run build
npm start
```

---

### Mobile/Responsive Issues

**Issue:** Layout breaks on mobile devices.

**Solutions:**

1. **Test in browser DevTools** - Use device emulation
2. **Check Tailwind breakpoints:**
   - `sm:` - 640px
   - `md:` - 768px
   - `lg:` - 1024px
   - `xl:` - 1280px

3. **Clear cache** - Mobile browsers cache aggressively

---

## Still Having Issues?

### Debug Steps:

1. **Check browser console** - Look for JavaScript errors
2. **Check network tab** - See if API calls are failing
3. **Clear all caches:**
```bash
# Clear Next.js cache
rm -rf .next

# Clear browser cache
# Hard refresh: Ctrl+Shift+R / Cmd+Shift+R

# Clear node modules
rm -rf node_modules package-lock.json
npm install
```

4. **Test in incognito mode** - Rules out extension interference

5. **Check GitHub issues** - https://github.com/ridaFD/china/issues

---

## Getting Help

If you're still experiencing issues:

1. **Check README.md** - Full documentation
2. **Check FEATURES.md** - Feature-specific info
3. **Open an issue** - Include:
   - Error message
   - Browser and version
   - Steps to reproduce
   - Screenshots if applicable

---

**Last Updated:** October 24, 2025

