import FirecrawlApp from '@mendable/firecrawl-js';
import fs from 'fs';

const app = new FirecrawlApp({
  apiKey: process.env.FIRECRAWL_API_KEY || 'fc-0ca141a7b6d943bd9e931a78d88ee7a8'
});

// Remaining fields to scrape
const remainingFields = [
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
    console.log(`Scraping: ${field.name}`);
    
    const result = await app.scrapeUrl(url, {
      formats: ['markdown'],
      waitFor: 3000
    });
    
    fs.writeFileSync(`docs/products/${field.id}.json`, JSON.stringify({
      ...field,
      markdown: result.markdown,
      success: true
    }, null, 2));
    
    console.log(`  ✓ Done`);
    return true;
  } catch (error) {
    console.error(`  ✗ Failed: ${error.message}`);
    return false;
  }
}

async function scrapeAll() {
  for (const field of remainingFields) {
    await scrapeField(field);
    await new Promise(r => setTimeout(r, 1500));
  }
  console.log('\nDone!');
}

scrapeAll();
