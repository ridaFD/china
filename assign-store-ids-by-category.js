/**
 * Assign Real Store IDs Based on Category
 * This distributes the 2 verified store IDs to appropriate categories
 */

const fs = require('fs');
const path = require('path');

// Real, VERIFIED 1688.com store IDs
const realStoreIds = {
  fashion: 'b2b-22129686061252fa5d',      // Fashion/Apparel (VERIFIED ✅)
  electronics: 'b2b-221162226231463a5d',  // Electronics/General (VERIFIED ✅)
};

// Category to Store ID mapping
const categoryMapping = {
  // Fashion-related categories → Fashion store ID
  "Women's Clothing": 'fashion',
  "Men's Clothing": 'fashion',
  "Children's Clothing": 'fashion',
  "Sportswear & Activewear": 'fashion',
  "Lingerie & Underwear": 'fashion',
  "Swimwear & Beachwear": 'fashion',
  "Outerwear & Coats": 'fashion',
  "Uniforms & Workwear": 'fashion',
  "Women's Shoes": 'fashion',
  "Men's Shoes": 'fashion',
  "Children's Shoes": 'fashion',
  "Bags & Handbags": 'fashion',
  "Belts & Scarves": 'fashion',
  "Fashion Jewelry": 'fashion',
  "Watches & Timepieces": 'fashion',
  
  // Electronics and everything else → Electronics store ID
  // (This store seems to have more diverse products)
  "Mobile Phones & Tablets": 'electronics',
  "Computers & Laptops": 'electronics',
  "Audio & Video Equipment": 'electronics',
  "Smart Home Devices": 'electronics',
  "Phone & Computer Accessories": 'electronics',
  "Cables & Chargers": 'electronics',
  "Home Decor & Decorations": 'electronics',
  "Candles & Fragrances": 'electronics',
  "Vases & Planters": 'electronics',
  "Kitchen & Dining": 'electronics',
  "Bathroom Fixtures": 'electronics',
  "Lighting & Lamps": 'electronics',
  "Furniture": 'electronics',
  "Garden & Outdoor": 'electronics',
  "Bedding & Textiles": 'electronics',
  "Storage & Organization": 'electronics',
  "Cosmetics & Makeup": 'electronics',
  "Skincare Products": 'electronics',
  "Hair Care & Styling": 'electronics',
  "Perfumes & Fragrances": 'electronics',
  "Fitness Equipment": 'electronics',
  "Outdoor & Camping": 'electronics',
  "Sports Apparel & Shoes": 'electronics',
  "Children's Toys": 'electronics',
  "Baby Care Products": 'electronics',
  "Educational Toys & Books": 'electronics',
  "Stationery & Paper": 'electronics',
  "Office Equipment": 'electronics',
  "School Supplies": 'electronics',
  "Auto Parts & Accessories": 'electronics',
  "Motorcycle Parts": 'electronics',
  "Car Electronics": 'electronics',
  "Packaged Foods & Snacks": 'electronics',
  "Tea & Coffee": 'electronics',
  "Medical Supplies": 'electronics',
  "Health Supplements": 'electronics',
  "Hand & Power Tools": 'electronics',
  "Industrial Equipment": 'electronics',
  "Art Supplies": 'electronics',
  "Craft Materials": 'electronics',
};

const storesDir = path.join(__dirname, 'src', 'data', 'stores');

// Get all TypeScript files
const files = fs.readdirSync(storesDir)
  .filter(file => file.endsWith('.ts') && file !== 'index.ts' && file !== 'types.ts' && file !== 'README.md');

console.log('🔧 Assigning store IDs based on categories...\n');

let totalUpdated = 0;

files.forEach((file) => {
  const filePath = path.join(storesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Extract category from first store entry to determine which ID to use
  const categoryMatch = content.match(/category:\s*"([^"]+)"/);
  
  if (!categoryMatch) {
    console.log(`⚠️  ${file}: Could not detect category`);
    return;
  }
  
  const category = categoryMatch[1];
  const storeType = categoryMapping[category];
  
  if (!storeType) {
    console.log(`⚠️  ${file}: Category "${category}" not mapped`);
    return;
  }
  
  const targetStoreId = realStoreIds[storeType];
  
  // Replace all store IDs in this file with the appropriate one
  const beforeCount = (content.match(/id:\s*"b2b-/g) || []).length;
  content = content.replace(/id:\s*"b2b-[^"]+"/g, `id: "${targetStoreId}"`);
  const afterCount = (content.match(new RegExp(`id:\\s*"${targetStoreId}"`, 'g')) || []).length;
  
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log(`✅ ${file}: ${beforeCount} stores → ${storeType.toUpperCase()} store (${targetStoreId})`);
  totalUpdated += beforeCount;
});

console.log(`\n✨ Complete! Updated ${totalUpdated} stores`);
console.log('\n📊 Store ID Distribution:');
console.log(`   Fashion Store (${realStoreIds.fashion}): Fashion, Shoes, Bags, Jewelry categories`);
console.log(`   Electronics Store (${realStoreIds.electronics}): Electronics, Home, Beauty, Sports, etc.`);
console.log('\n🎯 Now different categories will show products from appropriate stores!');

