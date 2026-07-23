import FirecrawlApp from '@mendable/firecrawl-js';
import fs from 'fs';

const app = new FirecrawlApp({
  apiKey: process.env.FIRECRAWL_API_KEY || 'fc-0ca141a7b6d943bd9e931a78d88ee7a8'
});

// Product field URLs from Weigao
const productFields = [
  { id: 'general', name: 'General Supplies', cateId: 9 },
  { id: 'endocrinology', name: 'Endocrinology', cateId: 51 },
  { id: 'medical-it', name: 'Medical IT', cateId: 53 },
  { id: 'orthopedics', name: 'Orthopedics', cateId: 42 },
  { id: 'dental', name: 'Dental', cateId: 56 },
  { id: 'tissue-repair', name: 'Tissue Repair', cateId: 59 },
  { id: 'blood-purification', name: 'Blood Purification', cateId: 61 },
  { id: 'packaging', name: 'Packaging Materials', cateId: 69 },
  { id: 'surgery', name: 'Surgery', cateId: 73 },
  { id: 'robotics', name: 'Surgical Robots', cateId: 80 },
  { id: 'blood-collection', name: 'Blood Collection', cateId: 82 },
  { id: 'interventional', name: 'Interventional', cateId: 86 },
  { id: 'ivd', name: 'In Vitro Diagnostics', cateId: 88 },
  { id: 'assisted-reproduction', name: 'Assisted Reproduction', cateId: 90 },
  { id: 'medical-equipment', name: 'Medical Equipment', cateId: 92 },
  { id: 'rehabilitation', name: 'Rehabilitation', cateId: 94 },
  { id: 'endoscopy', name: 'Endoscopy', cateId: 96 },
];

async function scrapeField(field) {
  try {
    const url = `https://www.weigaoholding.com/Product/index.html?cate=${field.cateId}`;
    console.log(`Scraping: ${field.name} (${url})`);
    
    const result = await app.scrapeUrl(url, {
      formats: ['markdown'],
      waitFor: 3000
    });
    
    return {
      ...field,
      url,
      markdown: result.markdown,
      success: true
    };
  } catch (error) {
    console.error(`Failed to scrape ${field.name}:`, error.message);
    return {
      ...field,
      markdown: '',
      success: false,
      error: error.message
    };
  }
}

async function scrapeAll() {
  console.log('Starting to scrape all 17 product fields...\n');
  
  const results = [];
  
  // Scrape sequentially to avoid rate limits
  for (const field of productFields) {
    const result = await scrapeField(field);
    results.push(result);
    
    // Save individual result
    fs.writeFileSync(`docs/products/${field.id}.json`, JSON.stringify(result, null, 2));
    
    // Extract subcategories from markdown
    const subcats = extractSubcategories(result.markdown);
    console.log(`  Found ${subcats.length} subcategories`);
    
    // Small delay between requests
    await new Promise(r => setTimeout(r, 1000));
  }
  
  // Save all results
  fs.writeFileSync('docs/all-products-scraped.json', JSON.stringify(results, null, 2));
  
  console.log('\n=== Summary ===');
  console.log(`Total fields scraped: ${results.length}`);
  console.log(`Successful: ${results.filter(r => r.success).length}`);
  console.log(`Failed: ${results.filter(r => !r.success).length}`);
}

function extractSubcategories(markdown) {
  if (!markdown) return [];
  
  const subcats = [];
  const lines = markdown.split('\n');
  
  for (const line of lines) {
    // Look for product links
    const match = line.match(/\[([^\]]+)\]\(https:\/\/www\.weigaoholding\.com\/Product\/index\.html\?cate=\d+/);
    if (match) {
      const name = match[1].replace(/\\/g, '').trim();
      if (name && name.length > 1 && name.length < 50 && !name.includes('svg')) {
        subcats.push(name);
      }
    }
  }
  
  return [...new Set(subcats)];
}

// Create directory
fs.mkdirSync('docs/products', { recursive: true });

scrapeAll();
