# 📁 Store Data Organization

This directory contains **1000 stores** split into **15 category files** for better organization and maintainability.

---

## 📂 **File Structure**

```
src/data/stores/
├── README.md                    # This file
├── types.ts                     # TypeScript interfaces & types
├── index.ts                     # Central export (combines all categories)
├── electronics.ts               # 90 Electronics & Digital stores
├── fashion.ts                   # 100 Fashion & Apparel stores
├── home.ts                      # 80 Home & Garden stores
├── beauty.ts                    # 60 Beauty & Personal Care stores
├── sports.ts                    # 60 Sports & Outdoors stores
├── toys.ts                      # 60 Toys & Baby Products stores
├── office.ts                    # 50 Office & School Supplies stores
├── automotive.ts                # 70 Automotive & Motorcycle stores
├── jewelry.ts                   # 80 Jewelry & Accessories stores
├── food.ts                      # 50 Food & Beverages stores
├── health.ts                    # 45 Health & Medical stores
├── tools.ts                     # 65 Tools & Hardware stores
├── arts.ts                      # 55 Arts & Crafts stores
├── bags.ts                      # 60 Bags & Luggage stores
└── footwear.ts                  # 69 Footwear stores
                                 ────────────────────
                                 TOTAL: 1000 stores
```

---

## 🎯 **Why Split Into Multiple Files?**

### **Before (Single File):**
- ❌ 1527 lines in one file
- ❌ Hard to find specific stores
- ❌ Slow to load in editor
- ❌ Difficult to maintain
- ❌ Merge conflicts likely

### **After (Split Files):**
- ✅ ~60-100 lines per category file
- ✅ Easy to locate stores by category
- ✅ Fast editor performance
- ✅ Easy to maintain individual categories
- ✅ Reduced merge conflicts

---

## 📖 **How to Use**

### **Import All Stores:**
```typescript
import { allStores } from '@/data/stores';
// Returns: Array of 1000 stores
```

### **Import Specific Category:**
```typescript
import { electronicsStores } from '@/data/stores';
// Returns: Array of 90 electronics stores only
```

### **Import from Main File (Recommended):**
```typescript
import { featuredStores } from '@/data/featured-stores';
// This internally uses the organized category files
```

---

## 🔧 **Adding New Stores**

### **To Add a Store:**

1. Open the appropriate category file (e.g., `electronics.ts`)
2. Add your store to the array:
   ```typescript
   {
     id: 'b2b-unique-id',
     name: 'New Store Name',
     nameZh: '新店名',
     category: 'Electronics & Digital',
     description: 'Store description',
     verified: true,
     estimatedProducts: 500,
     location: 'Shenzhen',
     rating: 4.5,
   }
   ```
3. Save the file - it's automatically included!

---

## 📊 **Store Distribution**

| Category | File | Stores | % of Total |
|----------|------|--------|------------|
| Fashion & Apparel | fashion.ts | 100 | 10% |
| Electronics & Digital | electronics.ts | 90 | 9% |
| Home & Garden | home.ts | 80 | 8% |
| Jewelry & Accessories | jewelry.ts | 80 | 8% |
| Automotive & Motorcycle | automotive.ts | 70 | 7% |
| Footwear | footwear.ts | 69 | 6.9% |
| Tools & Hardware | tools.ts | 65 | 6.5% |
| Beauty & Personal Care | beauty.ts | 60 | 6% |
| Sports & Outdoors | sports.ts | 60 | 6% |
| Toys & Baby Products | toys.ts | 60 | 6% |
| Bags & Luggage | bags.ts | 60 | 6% |
| Arts & Crafts | arts.ts | 55 | 5.5% |
| Office & School Supplies | office.ts | 50 | 5% |
| Food & Beverages | food.ts | 50 | 5% |
| Health & Medical | health.ts | 45 | 4.5% |
| **TOTAL** | **15 files** | **1000** | **100%** |

---

## 🗂️ **File Details**

### **types.ts**
- Exports `FeaturedStore` interface
- Exports `storeCategories` constant
- Used by all category files

### **index.ts**
- Imports all category files
- Combines into `allStores` array
- Re-exports individual categories
- Central hub for all store data

### **Category Files (electronics.ts, fashion.ts, etc.)**
- Each contains stores for one category
- Export named array (e.g., `electronicsStores`)
- Use `FeaturedStore` type from `types.ts`

---

## 🔄 **How It Works**

```
┌─────────────────┐
│  types.ts       │  ← Shared types
└────────┬────────┘
         │
    ┌────▼─────────────────────────────┐
    │  Category Files                  │
    │  - electronics.ts                │
    │  - fashion.ts                    │
    │  - home.ts                       │
    │  - etc...                        │
    └────────┬─────────────────────────┘
             │
        ┌────▼────────┐
        │  index.ts   │  ← Combines all
        └────────┬────┘
                 │
    ┌────────────▼──────────────┐
    │  featured-stores.ts       │  ← Main export
    │  (backward compatible)     │
    └────────────┬──────────────┘
                 │
    ┌────────────▼──────────────┐
    │  Your App Components      │
    │  - stores/page.tsx        │
    │  - products/page.tsx      │
    └───────────────────────────┘
```

---

## ✨ **Benefits**

### **For Developers:**
- 📝 Easy to find and edit stores
- 🚀 Faster file loading in IDE
- 🔍 Better code organization
- 🛠️ Easier debugging
- 👥 Reduces git conflicts

### **For the App:**
- ⚡ Same performance (compiled)
- 🎯 Same functionality
- 📦 Same import paths
- ✅ Backward compatible

---

## 🎓 **Examples**

### **Get All Electronics Stores:**
```typescript
import { electronicsStores } from '@/data/stores';
console.log(electronicsStores.length); // 90
```

### **Get Fashion Stores Page 1:**
```typescript
import { fashionStores } from '@/data/stores';
const page1 = fashionStores.slice(0, 12);
```

### **Filter Verified Stores:**
```typescript
import { allStores } from '@/data/stores';
const verified = allStores.filter(s => s.verified);
console.log(verified.length); // ~660
```

### **Get Stores by Location:**
```typescript
import { allStores } from '@/data/stores';
const shenzhenStores = allStores.filter(s => s.location === 'Shenzhen');
```

---

## 🔒 **Best Practices**

1. **Keep Store IDs Unique** - Each store needs a unique ID
2. **Use Consistent Naming** - Follow existing naming patterns
3. **Verify Category Match** - Category field must match file category
4. **Include All Fields** - Don't leave required fields empty
5. **Test After Changes** - Run app to ensure no errors

---

## 📝 **Maintenance**

### **Adding a New Category:**
1. Create new file: `src/data/stores/newcategory.ts`
2. Export array: `export const newCategoryStores: FeaturedStore[]`
3. Import in `index.ts`
4. Add to `allStores` array
5. Update `storeCategories` in `types.ts`

### **Bulk Updates:**
If you need to update many stores at once, edit the specific category file(s) rather than the main file.

---

**This structure makes managing 1000 stores much easier!** ✨

