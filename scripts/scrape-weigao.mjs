import FirecrawlApp from '@mendable/firecrawl-js';
import fs from 'fs';

const app = new FirecrawlApp({
  apiKey: process.env.FIRECRAWL_API_KEY || 'fc-0ca141a7b6d943bd9e931a78d88ee7a8'
});

async function scrape() {
  try {
    console.log('Scraping weigaoholding.com...');
    const result = await app.scrapeUrl('https://www.weigaoholding.com/', {
      formats: ['markdown', 'html'],
      waitFor: 5000
    });
    
    console.log('Scrape successful!');
    console.log('Title:', result.metadata?.title);
    console.log('Description:', result.metadata?.description);
    console.log('\nMarkdown length:', result.markdown?.length);
    console.log('\nFirst 3000 chars of markdown:');
    console.log(result.markdown?.slice(0, 3000));
    
    // Save full result
    fs.writeFileSync('docs/weigao-full-scrape.json', JSON.stringify(result, null, 2));
    console.log('\n\nFull result saved to docs/weigao-full-scrape.json');
    
  } catch (error) {
    console.error('Scrape failed:', error.message);
  }
}

scrape();
