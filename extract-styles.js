const { chromium } = require('playwright');

async function extractStyles() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  
  await page.goto('https://www.weigaoholding.com/', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000);
  
  // Extract global styles and section structure
  const data = await page.evaluate(() => {
    const getStyles = (el) => {
      const cs = getComputedStyle(el);
      return {
        fontSize: cs.fontSize,
        fontWeight: cs.fontWeight,
        fontFamily: cs.fontFamily,
        lineHeight: cs.lineHeight,
        color: cs.color,
        backgroundColor: cs.backgroundColor,
        padding: cs.padding,
        margin: cs.margin,
        borderRadius: cs.borderRadius,
        display: cs.display,
        flexDirection: cs.flexDirection,
        justifyContent: cs.justifyContent,
        alignItems: cs.alignItems,
        gap: cs.gap,
        maxWidth: cs.maxWidth,
        width: cs.width,
        height: cs.height,
        position: cs.position,
        zIndex: cs.zIndex,
        opacity: cs.opacity,
        transform: cs.transform,
        transition: cs.transition,
        letterSpacing: cs.letterSpacing,
        textTransform: cs.textTransform
      };
    };
    
    // Get header/nav styles
    const header = document.querySelector('header, nav, .header, .nav');
    const headerStyles = header ? getStyles(header) : null;
    
    // Get hero section
    const hero = document.querySelector('.home-swiper, .banner, [class*="hero"]');
    const heroStyles = hero ? getStyles(hero) : null;
    
    // Get all sections
    const sections = [];
    document.querySelectorAll('section, [class*="section"]').forEach((el, i) => {
      if (el.offsetHeight > 50 && i < 15) {
        sections.push({
          classes: el.className?.toString().slice(0, 100),
          tag: el.tagName,
          styles: getStyles(el),
          childCount: el.children.length,
          height: el.offsetHeight
        });
      }
    });
    
    // Get buttons
    const buttons = [];
    document.querySelectorAll('a[class*="btn"], button, [class*="button"]').forEach((el, i) => {
      if (i < 5) {
        buttons.push({
          text: el.textContent?.trim().slice(0, 50),
          classes: el.className?.toString().slice(0, 80),
          styles: getStyles(el)
        });
      }
    });
    
    // Get color palette
    const colors = new Set();
    document.querySelectorAll('*').forEach((el, i) => {
      if (i < 500) {
        const cs = getComputedStyle(el);
        if (cs.color && cs.color !== 'rgb(0, 0, 0)') colors.add(cs.color);
        if (cs.backgroundColor && cs.backgroundColor !== 'rgba(0, 0, 0, 0)' && cs.backgroundColor !== 'rgb(255, 255, 255)') {
          colors.add(cs.backgroundColor);
        }
      }
    });
    
    return {
      title: document.title,
      headerStyles,
      heroStyles,
      sections: sections.slice(0, 10),
      buttons,
      colors: [...colors].slice(0, 20),
      bodyFont: getComputedStyle(document.body).fontFamily,
      bodyColor: getComputedStyle(document.body).color,
      bodyBg: getComputedStyle(document.body).backgroundColor
    };
  });
  
  console.log(JSON.stringify(data, null, 2));
  require('fs').writeFileSync('docs/weigao-styles.json', JSON.stringify(data, null, 2));
  console.log('\nSaved to docs/weigao-styles.json');
  
  await browser.close();
}

extractStyles();
