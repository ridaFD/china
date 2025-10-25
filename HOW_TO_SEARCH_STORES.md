# 🔍 How to Search Within Stores - User Guide

## 📍 **Where to Find Store Search**

Your website has **TWO ways** to search within stores:

---

## 🏠 **METHOD 1: Search from Homepage** (Default Store)

### **Steps:**
1. Go to homepage: `http://localhost:3000`
2. Use the search bar at the top
3. Type your keyword (e.g., 鞋, 桌子, 手机)
4. Click "Search" button

**Result:** Searches in the **default store** (Premium Footwear Store)

### **Example:**
```
Homepage → Search Bar → Type "鞋" → Click Search
Result: Shows shoes from default store
```

---

## 🏪 **METHOD 2: Search in Specific Store** (Recommended!)

### **Steps:**
1. **Go to Stores Page:**
   - Click "Browse Stores" on homepage
   - Or visit: `http://localhost:3000/stores`

2. **Choose a Store:**
   - See 3 featured stores
   - Click the store you want to search in
   - Example: "Premium Footwear Store" (501 products)

3. **Search Within That Store:**
   - You'll be on: `/products?storeId=xxx`
   - Use the search bar at the top
   - Type your keyword
   - Click "Search"

**Result:** Searches **ONLY in that specific store!** ✅

---

## 🎯 **VISUAL FLOW**

### **Step-by-Step with Screenshots:**

```
┌─────────────────────────────────────┐
│         HOMEPAGE                    │
│  [Search Bar: Type keyword...]      │
│                                     │
│  OR click "Browse Stores" 🏪        │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│        STORES PAGE (/stores)        │
│                                     │
│  🏪 Premium Footwear Store          │
│     501+ Products → [Click]         │
│                                     │
│  🏪 Quality Goods Supplier          │
│     500+ Products → [Click]         │
│                                     │
│  🏪 Xingtai Specialty Store         │
│     300+ Products → [Click]         │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│  PRODUCTS PAGE (/products?storeId=) │
│  [Search Bar: Type keyword...]      │
│                                     │
│  Filter Badge: 🏪 Store: xxx        │
│                                     │
│  [Product Grid - Filtered Results]  │
└─────────────────────────────────────┘
```

---

## 💡 **EXAMPLE USE CASES**

### **Use Case 1: Find Shoes in Footwear Store**
```
1. Homepage → Click "Browse Stores"
2. Click "Premium Footwear Store"
3. In search bar, type: 运动鞋 (sports shoes)
4. Click Search
5. See: Sports shoes from that store! ✅
```

### **Use Case 2: Find Tables in General Store**
```
1. Homepage → Click "Browse Stores"
2. Click "Quality Goods Supplier"
3. In search bar, type: 桌子 (table)
4. Click Search
5. See: Tables from that store! ✅
```

### **Use Case 3: Quick Search (Default Store)**
```
1. Stay on homepage
2. Type in search bar: 鞋 (shoe)
3. Click Search
4. See: Shoes from default store ✅
```

---

## 🎨 **UI ELEMENTS TO LOOK FOR**

### **On Homepage:**
```
┌──────────────────────────────────────────┐
│  🔍 [Search for products on 1688.com...] │  ← THIS!
└──────────────────────────────────────────┘
```

### **On Stores Page:**
```
┌─────────────────────────────────────┐
│  🏪 Premium Footwear Store          │
│     Category: Footwear              │  ← CLICK THESE!
│     501+ Products                   │
│     [Browse Store →]                │
└─────────────────────────────────────┘
```

### **On Products Page (After Clicking Store):**
```
┌──────────────────────────────────────────┐
│  🔍 [Search for products on 1688.com...] │  ← SEARCH HERE!
└──────────────────────────────────────────┘

🏪 Store: b2b-221162226231463a5d... [×]  ← YOU'RE IN A STORE!

🏪 Store Products
Found 501 products
```

---

## 📊 **WHICH STORE AM I SEARCHING IN?**

### **How to Tell:**
Look for the **green badge** under the search bar:

```
If you see:
  🏪 Store: b2b-221162226231463a5d... [×]
  
Then you're searching in: That specific store
```

```
If you DON'T see any store badge:

Then you're searching in: Default store
```

### **To Change Stores:**
1. Click the [×] on the store badge
2. Go back to /stores
3. Choose a different store

---

## 🔄 **SEARCH WORKFLOW**

### **Recommended Workflow:**

```
Step 1: Choose Your Store
├─ Visit /stores
└─ Pick store based on category

Step 2: Browse or Search
├─ Browse all products (scroll)
└─ OR search for specific items

Step 3: Refine Search
├─ Try different keywords
└─ Check different stores
```

---

## 🎯 **SEARCH TIPS**

### **1. Choose the Right Store First**
```
Looking for shoes? → Premium Footwear Store
Looking for general items? → Quality Goods Supplier
Looking for crafts? → Xingtai Specialty Store
```

### **2. Use Simple Keywords**
```
✅ Good: 鞋 (shoe)
✅ Good: 桌子 (table)
❌ Too specific: 红色真皮女士高跟鞋38码
```

### **3. Try Different Stores**
If you don't find what you want:
```
Store A has no tables? → Try Store B
Store B has no results? → Try Store C
```

---

## 📱 **MOBILE EXPERIENCE**

### **On Mobile:**
1. Tap "Browse Stores" (menu icon)
2. Scroll through stores
3. Tap to open a store
4. Use search bar at top
5. Type keyword and tap Search

Same functionality, optimized for mobile! 📱

---

## ⚙️ **ADVANCED: URL Parameters**

### **Direct Links:**

**Search in specific store:**
```
http://localhost:3000/products?storeId=b2b-221162226231463a5d&keyword=鞋
```

**Just browse a store:**
```
http://localhost:3000/products?storeId=b2b-221162226231463a5d
```

**Search in default store:**
```
http://localhost:3000/products?keyword=鞋
```

---

## 🆘 **TROUBLESHOOTING**

### **Problem: Search shows same results**
**Solution:** Make sure you're in different stores!
```
1. Check the store badge (🏪 Store: xxx)
2. Try clicking a different store from /stores
```

### **Problem: No results found**
**Solution:** Try different keywords or stores
```
1. Some stores don't have all products
2. Try simpler keywords
3. Browse instead of searching
```

### **Problem: Can't find store badge**
**Solution:** You might be on homepage
```
1. Click "Browse Stores"
2. Choose a store
3. Now you'll see the store badge
```

---

## 🎊 **QUICK REFERENCE**

| Page | URL | Search Behavior |
|------|-----|-----------------|
| **Homepage** | `/` | Searches default store |
| **Stores List** | `/stores` | Browse stores (no search) |
| **Store Products** | `/products?storeId=xxx` | **Searches THAT store** ✅ |
| **Search Results** | `/products?keyword=xxx` | Shows search results |

---

## 📝 **SUMMARY**

### **Where is Store Search?**
✅ **Products page** (`/products?storeId=xxx`)

### **How to Access It?**
1. Visit `/stores` (Browse Stores)
2. Click any store
3. Use search bar on products page

### **How to Know Which Store?**
Look for: `🏪 Store: xxx` badge below search bar

### **How to Change Store?**
1. Click [×] on store badge
2. Go to /stores
3. Pick different store

---

## 🚀 **TRY IT NOW!**

### **Quick Test:**
```bash
1. Visit: http://localhost:3000/stores
2. Click: "Premium Footwear Store"
3. Type: 运动 (sport)
4. Click: Search
5. Result: Sports-related products from that store! ✅
```

---

**You now know how to search within stores!** 🎉

**Remember:** Each store has different products, so try searching in different stores for best results!

