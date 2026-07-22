const { chromium } = require('playwright');

async function takeScreenshots() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();
  
  try {
    console.log('Navigating to Weigao website...');
    await page.goto('https://www.weigaoholding.com/', { 
      waitUntil: 'networkidle',
      timeout: 60000 
    });
    
    // Wait for content to load
    await page.waitForTimeout(3000);
    
    // Take full page screenshot at desktop
    console.log('Taking desktop screenshot (1440px)...');
    await page.screenshot({ 
      path: 'docs/design-references/weigao-desktop-full.png',
      fullPage: true 
    });
    
    // Take viewport screenshot
    await page.screenshot({ 
      path: 'docs/design-references/weigao-desktop-viewport.png'
    });
    
    // Mobile viewport
    console.log('Taking mobile screenshot (390px)...');
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(1000);
    await page.screenshot({ 
      path: 'docs/design-references/weigao-mobile-full.png',
      fullPage: true 
    });
    
    console.log('Screenshots saved!');
    
    // Extract page structure info
    const pageInfo = await page.evaluate(() => {
      const sections = [];
      document.querySelectorAll('section, div[class*="section"], div[class*="swiper"]').forEach(el => {
        if (el.offsetHeight > 100) {
          sections.push({
            tag: el.tagName,
            classes: el.className?.toString().slice(0, 100),
            height: el.offsetHeight,
            childCount: el.children.length
          });
        }
      });
      return {
        title: document.title,
        sections: sections.slice(0, 20),
        fonts: [...new Set([...document.querySelectorAll('*')].slice(0, 100).map(el => 
          getComputedStyle(el).fontFamily
        ))].slice(0, 10)
      };
    });
    
    console.log('\nPage Info:', JSON.stringify(pageInfo, null, 2));
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
}

takeScreenshots();
