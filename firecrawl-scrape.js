const FirecrawlApp = require('@mendable/firecrawl-js').default;

const app = new FirecrawlApp({
  apiKey: 'fc-0ca141a7b6d943bd9e931a78d88ee7a8'
});

async function scrape() {
  try {
    console.log('Scraping https://www.weigaoholding.com/...');
    const result = await app.scrapeUrl('https://www.weigaoholding.com/', {
      formats: ['markdown', 'html'],
      waitFor: 5000
    });
    
    console.log('\n=== MARKDOWN CONTENT ===\n');
    console.log(result.markdown?.slice(0, 10000));
    
    console.log('\n=== HTML CONTENT (first 5000 chars) ===\n');
    console.log(result.html?.slice(0, 5000));
    
    // Save full results
    const fs = require('fs');
    fs.writeFileSync('/Users/liangfengpei/danilai-medical/docs/weigao-scrape.json', JSON.stringify(result, null, 2));
    console.log('\nFull results saved to docs/weigao-scrape.json');
  } catch (error) {
    console.error('Scrape error:', error.message);
  }
}

scrape();
