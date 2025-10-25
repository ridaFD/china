/**
 * Extract Real Store IDs from 1688.com via RapidAPI
 * This script searches for products and extracts unique real store IDs
 */

const https = require('https');

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY || '46b8092e0dmsh4608b3761d133cep1d3661jsn400867a11bd8';
const RAPIDAPI_HOST = '1688-datahub.p.rapidapi.com';

// Search terms for different categories to get diverse store IDs
const searchTerms = [
  '女装',    // Women's clothing
  '男装',    // Men's clothing
  '童装',    // Children's clothing
  '手机',    // Mobile phones
  '电脑',    // Computers
  '家居',    // Home decor
  '蜡烛',    // Candles
  '花瓶',    // Vases
  '厨具',    // Kitchen items
  '化妆品',  // Cosmetics
  '玩具',    // Toys
  '文具',    // Stationery
  '运动',    // Sports
  '鞋子',    // Shoes
  '包包',    // Bags
];

async function searchProducts(keyword) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      hostname: RAPIDAPI_HOST,
      port: null,
      path: `/item_search?q=${encodeURIComponent(keyword)}&page=1&pageSize=20&sort=default`,
      headers: {
        'x-rapidapi-host': RAPIDAPI_HOST,
        'x-rapidapi-key': RAPIDAPI_KEY
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}

async function extractStoreIds() {
  console.log('🔍 Searching for real 1688.com store IDs...\n');
  
  const storeMap = new Map(); // Map<storeId, {name, category}>
  
  for (const searchTerm of searchTerms) {
    try {
      console.log(`Searching: ${searchTerm}...`);
      const response = await searchProducts(searchTerm);
      
      if (response?.result?.resultList) {
        const items = response.result.resultList;
        
        items.forEach((result) => {
          const item = result.item || result;
          const storeId = item.storeId || item.shopId;
          const storeName = item.shopName || item.sellerNick || 'Unknown Store';
          
          if (storeId && !storeMap.has(storeId)) {
            storeMap.set(storeId, {
              name: storeName,
              category: searchTerm
            });
          }
        });
        
        console.log(`  ✅ Found ${items.length} products, extracted store IDs`);
      } else {
        console.log(`  ⚠️  No results found`);
      }
      
      // Wait a bit between requests to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (error) {
      console.log(`  ❌ Error: ${error.message}`);
    }
  }
  
  console.log(`\n📊 Results:`);
  console.log(`Total unique store IDs found: ${storeMap.size}\n`);
  
  if (storeMap.size > 0) {
    console.log('Real 1688.com Store IDs:\n');
    console.log('const realStoreIds = [');
    
    let index = 0;
    for (const [storeId, info] of storeMap) {
      console.log(`  { id: "${storeId}", name: "${info.name}", category: "${info.category}" }, // ${index + 1}`);
      index++;
      
      // Limit to first 50 to keep output manageable
      if (index >= 50) {
        console.log('  // ... (showing first 50 only)');
        break;
      }
    }
    
    console.log('];\n');
    
    return Array.from(storeMap).map(([id, info]) => ({ id, ...info }));
  } else {
    console.log('⚠️  No store IDs found. Please check your API key and subscription.');
    return [];
  }
}

// Run the extraction
extractStoreIds()
  .then((stores) => {
    if (stores.length > 0) {
      console.log('✅ Store ID extraction complete!');
      console.log(`\n💡 Copy the store IDs above and use them to update your store data files.`);
    }
  })
  .catch((error) => {
    console.error('❌ Fatal error:', error);
  });

