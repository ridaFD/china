/**
 * Search for Home Decor Related Store IDs
 * Test various patterns that might be home decor stores
 */

const https = require('https');

const RAPIDAPI_KEY = '46b8092e0dmsh4608b3761d133cep1d3661jsn400867a11bd8';
const RAPIDAPI_HOST = '1688-datahub.p.rapidapi.com';

// Common Chinese words related to home decor
const homeDecorKeywords = [
  'jiaju',      // 家居 (home)
  'zhuangshi',  // 装饰 (decoration)
  'lazhu',      // 蜡烛 (candles)
  'huaping',    // 花瓶 (vases)
  'dengju',     // 灯具 (lighting)
  'jiafang',    // 家纺 (home textiles)
  'chuju',      // 厨具 (kitchenware)
  'shouye',     // 守夜 (home items)
];

// Generate potential store IDs based on common patterns
function generatePotentialStoreIds() {
  const storeIds = [];
  
  // Pattern 1: b2b-221XXXXXXXX (common pattern)
  for (let i = 30; i <= 99; i++) {
    const randomSuffix = Math.random().toString(36).substring(2, 15);
    storeIds.push(`b2b-221${i}${randomSuffix}`);
  }
  
  // Pattern 2: Store names with home decor keywords
  homeDecorKeywords.forEach(keyword => {
    storeIds.push(keyword);
    storeIds.push(`${keyword}shop`);
    storeIds.push(`${keyword}factory`);
    storeIds.push(`${keyword}store`);
  });
  
  // Pattern 3: Random common store name patterns
  const commonNames = [
    'homedecor', 'decoration', 'candle', 'vase', 'lamp',
    'furniture', 'textile', 'kitchen', 'bathroom', 'living'
  ];
  
  commonNames.forEach(name => {
    storeIds.push(name);
    storeIds.push(`${name}123`);
    storeIds.push(`${name}shop`);
    storeIds.push(`${name}888`);
  });
  
  return storeIds.slice(0, 100); // Test first 100
}

async function testStoreId(storeId) {
  return new Promise((resolve) => {
    const options = {
      method: 'GET',
      hostname: RAPIDAPI_HOST,
      path: `/store_item_search?storeId=${encodeURIComponent(storeId)}&page=1&pageSize=3&sort=default`,
      headers: {
        'x-rapidapi-host': RAPIDAPI_HOST,
        'x-rapidapi-key': RAPIDAPI_KEY
      },
      timeout: 8000,
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
            const sampleProduct = resultList[0]?.item?.title || '';
            
            resolve({
              storeId,
              working: true,
              productCount: totalResults,
              sampleProduct
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

async function findHomeDecorStores() {
  console.log('🏠 Searching for Home Decor Store IDs...\n');
  
  const storeIds = generatePotentialStoreIds();
  console.log(`📦 Testing ${storeIds.length} potential store IDs\n`);
  
  const workingStores = [];
  
  for (let i = 0; i < storeIds.length; i++) {
    const storeId = storeIds[i];
    process.stdout.write(`\rProgress: ${i + 1}/${storeIds.length} - Testing: ${storeId.substring(0, 30).padEnd(30)}...`);
    
    const result = await testStoreId(storeId);
    
    if (result.working) {
      console.log(`\n  ✅ FOUND! ${result.storeId} - ${result.productCount} products`);
      console.log(`     Sample: ${result.sampleProduct}\n`);
      workingStores.push(result);
    }
    
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 300));
  }
  
  console.log('\n\n' + '='.repeat(80));
  console.log('📊 RESULTS:\n');
  
  if (workingStores.length > 0) {
    console.log(`✅ Found ${workingStores.length} working store IDs!\n`);
    console.log('const homeDecorStoreIds = [');
    workingStores.forEach((store, i) => {
      console.log(`  "${store.storeId}", // ${store.productCount} products - ${i + 1}`);
    });
    console.log('];\n');
  } else {
    console.log('❌ No new working store IDs found.\n');
    console.log('💡 The 3 existing store IDs are still the best we have.');
  }
  
  return workingStores;
}

console.log('🚀 Starting Home Decor Store Discovery...\n');
findHomeDecorStores()
  .then((stores) => {
    console.log(`\n✨ Discovery complete! Found ${stores.length} new stores.`);
  })
  .catch(console.error);

