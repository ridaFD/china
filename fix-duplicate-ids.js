/**
 * Fix Duplicate Store IDs by Making Them Unique
 * Keep track of which API store ID to use via a mapping
 */

const fs = require('fs');
const path = require('path');

// Mapping: category → API store ID to use
const categoryToApiStoreId = {
  // Fashion categories
  "Women's Clothing": 'b2b-22129686061252fa5d',
  "Men's Clothing": 'b2b-22129686061252fa5d',
  "Children's Clothing": 'b2b-22129686061252fa5d',
  "Sportswear & Activewear": 'b2b-22129686061252fa5d',
  "Lingerie & Underwear": 'b2b-22129686061252fa5d',
  "Swimwear & Beachwear": 'b2b-22129686061252fa5d',
  "Outerwear & Coats": 'b2b-22129686061252fa5d',
  "Uniforms & Workwear": 'b2b-22129686061252fa5d',
  "Women's Shoes": 'b2b-22129686061252fa5d',
  "Men's Shoes": 'b2b-22129686061252fa5d',
  "Children's Shoes": 'b2b-22129686061252fa5d',
  "Sports Apparel & Shoes": 'b2b-22129686061252fa5d',
  
  // Crafts/Decor categories
  "Home Decor & Decorations": 'xingtaisp',
  "Candles & Fragrances": 'xingtaisp',
  "Vases & Planters": 'xingtaisp',
  "Art Supplies": 'xingtaisp',
  "Craft Materials": 'xingtaisp',
  "Fashion Jewelry": 'xingtaisp',
  "Watches & Timepieces": 'xingtaisp',
  "Bags & Handbags": 'xingtaisp',
  "Belts & Scarves": 'xingtaisp',
  "Lighting & Lamps": 'xingtaisp',
  "Children's Toys": 'xingtaisp',
  "Educational Toys & Books": 'xingtaisp',
  "Stationery & Paper": 'xingtaisp',
  "School Supplies": 'xingtaisp',
  
  // Everything else → Electronics store
};

const storesDir = path.join(__dirname, 'src', 'data', 'stores');
const files = fs.readdirSync(storesDir)
  .filter(file => file.endsWith('.ts') && file !== 'index.ts' && file !== 'types.ts' && file !== 'README.md');

console.log('🔧 Fixing duplicate store IDs...\n');

let totalFixed = 0;

files.forEach((file) => {
  const filePath = path.join(storesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Extract category
  const categoryMatch = content.match(/category:\s*"([^"]+)"/);
  if (!categoryMatch) return;
  
  const category = categoryMatch[1];
  const apiStoreId = categoryToApiStoreId[category] || 'b2b-221162226231463a5d';
  
  // Generate unique IDs by appending a counter
  let counter = 0;
  content = content.replace(/id:\s*"([^"]+)"/g, (match, currentId) => {
    // Create unique ID based on API store ID + counter
    let uniqueId;
    if (apiStoreId === 'xingtaisp') {
      uniqueId = `xingtaisp-${String(counter).padStart(4, '0')}`;
    } else if (apiStoreId === 'b2b-22129686061252fa5d') {
      uniqueId = `fashion-${String(counter).padStart(4, '0')}`;
    } else {
      uniqueId = `electronics-${String(counter).padStart(4, '0')}`;
    }
    counter++;
    totalFixed++;
    return `id: "${uniqueId}"`;
  });
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ ${file}: Generated ${counter} unique IDs → ${apiStoreId}`);
});

console.log(`\n✨ Complete! Fixed ${totalFixed} stores with unique IDs`);
console.log('\n📝 Next Step: Update API route to map display IDs to real API store IDs');

