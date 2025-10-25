/**
 * Test: Can we extract useful store information from product data?
 * Even if we can't discover NEW stores, maybe we can get REAL store names/info
 */

const https = require('https');

const RAPIDAPI_KEY = '46b8092e0dmsh4608b3761d133cep1d3661jsn400867a11bd8';
const RAPIDAPI_HOST = '1688-datahub.p.rapidapi.com';

const knownStores = [
  { id: 'b2b-22129686061252fa5d', category: 'Fashion' },
  { id: 'b2b-221162226231463a5d', category: 'Electronics' },
  { id: 'xingtaisp', category: 'Crafts' },
];

async function getStoreProducts(storeId) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      hostname: RAPIDAPI_HOST,
      path: `/store_item_search?storeId=${encodeURIComponent(storeId)}&page=1&pageSize=5&sort=default`,
      headers: {
        'x-rapidapi-host': RAPIDAPI_HOST,
        'x-rapidapi-key': RAPIDAPI_KEY
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', reject);
    req.end();
  });
}

async function extractStoreInfo() {
  console.log('🔍 Extracting REAL store information from products...\n');
  
  for (const store of knownStores) {
    console.log(`\n${'='.repeat(80)}`);
    console.log(`📦 Store ID: ${store.id} (${store.category})`);
    console.log('='.repeat(80));
    
    try {
      const response = await getStoreProducts(store.id);
      
      if (response?.result?.resultList) {
        const items = response.result.resultList;
        
        if (items.length > 0) {
          const firstItem = items[0].item;
          
          console.log('\n📊 Extracted Store Information:');
          console.log(`   Store ID: ${firstItem.storeId || 'N/A'}`);
          console.log(`   Shop Name: ${firstItem.shopName || 'N/A'}`);
          console.log(`   Seller Nick: ${firstItem.sellerNick || 'N/A'}`);
          console.log(`   Shop ID: ${firstItem.shopId || 'N/A'}`);
          console.log(`   Company Name: ${firstItem.companyName || 'N/A'}`);
          
          console.log(`\n🛍️  Sample Products (${items.length}):`);
          items.slice(0, 3).forEach((item, i) => {
            console.log(`   ${i + 1}. ${item.item.title}`);
          });
          
          console.log(`\n✅ This store has ${response.result.base?.totalResults || items.length} products!`);
        }
      } else {
        console.log('   ⚠️  No products found');
      }
      
    } catch (error) {
      console.log(`   ❌ Error: ${error.message}`);
    }
    
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log('\n\n' + '='.repeat(80));
  console.log('💡 CONCLUSION:');
  console.log('='.repeat(80));
  console.log('We CAN extract real store names from product data!');
  console.log('BUT we still can\'t discover NEW store IDs without global search.');
  console.log('\n🎯 Best approach: Manually collect more store IDs from 1688.com');
}

extractStoreInfo().catch(console.error);

