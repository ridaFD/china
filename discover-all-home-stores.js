/**
 * COMPREHENSIVE HOME DECOR STORE DISCOVERY
 * Find ALL real 1688.com stores for home decor, furniture, kitchen categories
 * Extract complete store information
 */

const https = require('https');
const fs = require('fs');

const RAPIDAPI_KEY = '46b8092e0dmsh4608b3761d133cep1d3661jsn400867a11bd8';
const RAPIDAPI_HOST = '1688-datahub.p.rapidapi.com';

// Home-related keywords in Chinese (pinyin and variations)
const homeKeywords = [
  // Furniture & Home Decor
  'jiaju', 'jiajushop', 'jiajugongchang', 'jiajustore',
  'jiashi', 'jiashishop', 'jiashigongchang',
  'zhuangshi', 'zhuangshishop', 'decoration', 'decor',
  'furniture', 'furniturestore', 'furnitureshop',
  'home', 'homestore', 'homedecor', 'homefurniture',
  
  // Kitchen & Dining
  'chuju', 'chujushop', 'kitchen', 'kitchenware',
  'canju', 'dining', 'tableware', 'cookware',
  
  // Lighting
  'dengju', 'dengshi', 'lighting', 'lamp', 'light',
  'chandelier', 'dengshishop',
  
  // Candles & Fragrances
  'lazhu', 'lazhushop', 'candle', 'xiangxun',
  'aromatherapy', 'fragrance', 'scent',
  
  // Vases & Planters
  'huaping', 'huapingshop', 'vase', 'planter',
  'huapen', 'pottery', 'ceramic',
  
  // Bathroom
  'weiyuju', 'bathroom', 'sanitaryware', 'weisheng',
  
  // Bedding & Textiles
  'chuangpin', 'bedding', 'textile', 'jiafang',
  'linen', 'towel', 'sheet',
  
  // Storage & Organization
  'shounuo', 'storage', 'organization', 'container',
  
  // Garden
  'yuanyi', 'garden', 'outdoor', 'patio',
];

// Generate comprehensive store ID patterns
function generateStoreIds() {
  const storeIds = new Set();
  
  // Add home keywords directly
  homeKeywords.forEach(keyword => {
    storeIds.add(keyword);
    storeIds.add(`${keyword}888`);
    storeIds.add(`${keyword}666`);
    storeIds.add(`${keyword}168`);
    storeIds.add(`${keyword}shop`);
    storeIds.add(`${keyword}store`);
    storeIds.add(`${keyword}factory`);
    storeIds.add(`${keyword}gongchang`);
  });
  
  // Pattern: b2b-221XXXXXXXX (common 1688 pattern)
  // Test numbers 10-99
  for (let i = 10; i <= 99; i++) {
    // Generate 3 random variations per number
    for (let j = 0; j < 3; j++) {
      const suffix = Math.random().toString(36).substring(2, 15);
      storeIds.add(`b2b-221${i}${suffix}`);
    }
  }
  
  return Array.from(storeIds).slice(0, 300); // Test 300 IDs
}

async function testStoreId(storeId) {
  return new Promise((resolve) => {
    const options = {
      method: 'GET',
      hostname: RAPIDAPI_HOST,
      path: `/store_item_search?storeId=${encodeURIComponent(storeId)}&page=1&pageSize=5&sort=default`,
      headers: {
        'x-rapidapi-host': RAPIDAPI_HOST,
        'x-rapidapi-key': RAPIDAPI_KEY
      },
      timeout: 10000,
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          const resultList = jsonData?.result?.resultList || [];
          
          if (resultList.length > 0) {
            const totalResults = jsonData?.result?.base?.totalResults || resultList.length;
            const firstItem = resultList[0]?.item || {};
            
            resolve({
              storeId,
              working: true,
              productCount: totalResults,
              shopName: firstItem.shopName || firstItem.sellerNick || 'Unknown Store',
              sampleProduct: firstItem.title || '',
              // Try to extract more info from first product
              location: firstItem.location || firstItem.province || '',
              verified: firstItem.verified || false,
            });
          } else {
            resolve({ storeId, working: false });
          }
        } catch (error) {
          resolve({ storeId, working: false });
        }
      });
    });

    req.on('error', () => resolve({ storeId, working: false }));
    req.on('timeout', () => {
      req.destroy();
      resolve({ storeId, working: false });
    });

    req.end();
  });
}

async function getStoreDetails(storeId) {
  return new Promise((resolve) => {
    const options = {
      method: 'GET',
      hostname: RAPIDAPI_HOST,
      path: `/company_contact?storeId=${encodeURIComponent(storeId)}`,
      headers: {
        'x-rapidapi-host': RAPIDAPI_HOST,
        'x-rapidapi-key': RAPIDAPI_KEY
      },
      timeout: 10000,
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (error) {
          resolve(null);
        }
      });
    });

    req.on('error', () => resolve(null));
    req.on('timeout', () => {
      req.destroy();
      resolve(null);
    });

    req.end();
  });
}

async function discoverAllHomeStores() {
  console.log('🏠 COMPREHENSIVE HOME DECOR STORE DISCOVERY\n');
  console.log('='.repeat(80));
  console.log('Target Categories:');
  console.log('  - Home Decor & Furniture');
  console.log('  - Kitchen & Dining');
  console.log('  - Lighting & Lamps');
  console.log('  - Candles & Fragrances');
  console.log('  - Vases & Planters');
  console.log('  - Bathroom Fixtures');
  console.log('  - Bedding & Textiles');
  console.log('  - Storage & Organization');
  console.log('  - Garden & Outdoor\n');
  
  const storeIds = generateStoreIds();
  console.log(`📦 Testing ${storeIds.length} potential store IDs...\n`);
  
  const workingStores = [];
  let tested = 0;
  
  for (const storeId of storeIds) {
    tested++;
    process.stdout.write(`\rProgress: ${tested}/${storeIds.length} | Found: ${workingStores.length} | Testing: ${storeId.substring(0, 30).padEnd(30)}...`);
    
    const result = await testStoreId(storeId);
    
    if (result.working) {
      console.log(`\n  ✅ FOUND! ${result.storeId}`);
      console.log(`     Products: ${result.productCount}`);
      console.log(`     Shop: ${result.shopName}`);
      console.log(`     Sample: ${result.sampleProduct.substring(0, 60)}...\n`);
      
      workingStores.push(result);
    }
    
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 200));
  }
  
  console.log('\n\n' + '='.repeat(80));
  console.log(`\n🎉 DISCOVERY COMPLETE!\n`);
  console.log(`✅ Found ${workingStores.length} working home-related stores!\n`);
  
  // Now get detailed info for each store
  console.log('📊 Fetching detailed store information...\n');
  
  for (let i = 0; i < workingStores.length; i++) {
    const store = workingStores[i];
    console.log(`  [${i + 1}/${workingStores.length}] Getting details for ${store.storeId}...`);
    
    const details = await getStoreDetails(store.storeId);
    if (details) {
      store.contactInfo = details;
    }
    
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  // Save to file
  const outputFile = 'home-stores-database.json';
  const storeDatabase = {
    generatedAt: new Date().toISOString(),
    totalStores: workingStores.length,
    categories: ['Home Decor', 'Furniture', 'Kitchen', 'Lighting', 'Bathroom', 'Bedding', 'Garden'],
    stores: workingStores.map(store => ({
      storeId: store.storeId,
      storeName_EN: store.shopName,
      storeName_ZH: store.shopName, // API doesn't separate, usually returns Chinese
      productCount: store.productCount,
      location: store.location || 'China',
      verified: store.verified,
      storeUrl: `https://shop${store.storeId}.1688.com`,
      apiStoreId: store.storeId,
      sampleProduct: store.sampleProduct,
    }))
  };
  
  fs.writeFileSync(outputFile, JSON.stringify(storeDatabase, null, 2));
  console.log(`\n💾 Store database saved to: ${outputFile}\n`);
  
  // Display summary
  console.log('='.repeat(80));
  console.log('\n📋 STORE DATABASE SUMMARY:\n');
  
  storeDatabase.stores.forEach((store, i) => {
    console.log(`${i + 1}. ${store.storeName_EN}`);
    console.log(`   ID: ${store.storeId}`);
    console.log(`   Products: ${store.productCount}`);
    console.log(`   Location: ${store.location}`);
    console.log(`   URL: ${store.storeUrl}`);
    console.log(`   Verified: ${store.verified ? '✅' : '❌'}\n`);
  });
  
  return storeDatabase;
}

console.log('🚀 Starting comprehensive home store discovery...\n');
discoverAllHomeStores()
  .then((database) => {
    console.log(`\n✨ Complete! Found ${database.totalStores} home-related stores.`);
    console.log('\n📝 Next steps:');
    console.log('1. Review home-stores-database.json');
    console.log('2. Update your store data with these real stores');
    console.log('3. Each store has real products and working API access!');
  })
  .catch(console.error);

