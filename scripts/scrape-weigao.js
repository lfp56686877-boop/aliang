const { FirecrawlApp } = require('@mendable/firecrawl-js');

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
    console.log('Title:', result.data.metadata?.title);
    console.log('Description:', result.data.metadata?.description);
    console.log('\nMarkdown length:', result.data.markdown?.length);
    console.log('\nFirst 2000 chars of markdown:');
    console.log(result.data.markdown?.slice(0, 2000));
    
    // Save full result
    const fs = require('fs');
    fs.writeFileSync('docs/weigao-full-scrape.json', JSON.stringify(result.data, null, 2));
    console.log('\nFull result saved to docs/weigao-full-scrape.json');
    
  } catch (error) {
    console.error('Scrape failed:', error.message);
  }
}

scrape();
