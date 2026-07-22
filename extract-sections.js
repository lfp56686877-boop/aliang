const { chromium } = require('playwright');

async function extractSections() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  
  await page.goto('https://www.weigaoholding.com/', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000);
  
  // Scroll through page to load all content
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(2000);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);
  
  const sections = await page.evaluate(() => {
    const getStyles = (el) => {
      if (!el) return null;
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
        letterSpacing: cs.letterSpacing
      };
    };
    
    const result = {};
    
    // 1. Navigation/Header
    const nav = document.querySelector('header, nav, .header');
    if (nav) {
      const logo = nav.querySelector('img, [class*="logo"]');
      const links = [...nav.querySelectorAll('a')].map(a => ({
        text: a.textContent?.trim(),
        href: a.href
      }));
      result.nav = {
        styles: getStyles(nav),
        logo: logo ? { src: logo.src || logo.querySelector('img')?.src, alt: logo.alt } : null,
        links: links.filter(l => l.text).slice(0, 10)
      };
    }
    
    // 2. Hero/Banner section
    const hero = document.querySelector('.banner, .home-swiper, [class*="hero"]');
    if (hero) {
      const slides = [...hero.querySelectorAll('.swiper-slide')].map(slide => {
        const title = slide.querySelector('h1, h2, [class*="title"]');
        const subtitle = slide.querySelector('p, [class*="subtitle"], [class*="desc"]');
        const btn = slide.querySelector('a[class*="btn"], button');
        const img = slide.querySelector('img, video');
        return {
          title: title?.textContent?.trim(),
          subtitle: subtitle?.textContent?.trim(),
          btnText: btn?.textContent?.trim(),
          btnHref: btn?.href,
          media: img ? { type: img.tagName === 'VIDEO' ? 'video' : 'image', src: img.src || img.poster } : null
        };
      });
      result.hero = {
        styles: getStyles(hero),
        slides: slides.filter(s => s.title || s.subtitle)
      };
    }
    
    // 3. About section
    const about = document.querySelector('[class*="about"], [class*="concerning"]');
    if (about && about !== hero) {
      const title = about.querySelector('h2, h3, [class*="title"]');
      const desc = about.querySelector('p, [class*="desc"]');
      const btn = about.querySelector('a[class*="btn"]');
      const stats = [...about.querySelectorAll('[class*="stat"], [class*="number"]')].map(s => ({
        label: s.querySelector('[class*="label"]')?.textContent?.trim(),
        value: s.querySelector('[class*="value"], [class*="num"]')?.textContent?.trim()
      }));
      result.about = {
        styles: getStyles(about),
        title: title?.textContent?.trim(),
        description: desc?.textContent?.trim(),
        btnText: btn?.textContent?.trim(),
        stats: stats.filter(s => s.label || s.value)
      };
    }
    
    // 4. Products section
    const products = document.querySelector('[class*="product"], [class*="domain"]');
    if (products) {
      const title = products.querySelector('h2, h3, [class*="title"]');
      const categories = [...products.querySelectorAll('[class*="item"], [class*="card"], li')].slice(0, 12).map(item => ({
        name: item.querySelector('[class*="name"], h4, h5')?.textContent?.trim(),
        desc: item.querySelector('[class*="desc"], p')?.textContent?.trim(),
        link: item.querySelector('a')?.href,
        icon: item.querySelector('img, svg')?.src
      }));
      result.products = {
        styles: getStyles(products),
        title: title?.textContent?.trim(),
        categories: categories.filter(c => c.name)
      };
    }
    
    // 5. News section
    const news = document.querySelector('[class*="news"], [class*="media"]');
    if (news) {
      const title = news.querySelector('h2, h3, [class*="title"]');
      const items = [...news.querySelectorAll('[class*="item"], article')].slice(0, 6).map(item => ({
        title: item.querySelector('h4, h5, [class*="title"]')?.textContent?.trim(),
        date: item.querySelector('[class*="date"], time')?.textContent?.trim(),
        image: item.querySelector('img')?.src,
        link: item.querySelector('a')?.href
      }));
      result.news = {
        styles: getStyles(news),
        title: title?.textContent?.trim(),
        items: items.filter(i => i.title)
      };
    }
    
    // 6. Footer
    const footer = document.querySelector('footer, [class*="footer"]');
    if (footer) {
      const columns = [...footer.querySelectorAll('[class*="col"], [class*="column"]')].map(col => ({
        title: col.querySelector('h4, h5, [class*="title"]')?.textContent?.trim(),
        links: [...col.querySelectorAll('a')].map(a => ({
          text: a.textContent?.trim(),
          href: a.href
        })).filter(l => l.text).slice(0, 8)
      }));
      result.footer = {
        styles: getStyles(footer),
        columns: columns.filter(c => c.title || c.links.length > 0),
        copyright: footer.querySelector('[class*="copyright"]')?.textContent?.trim()
      };
    }
    
    return result;
  });
  
  console.log(JSON.stringify(sections, null, 2));
  require('fs').writeFileSync('docs/weigao-sections.json', JSON.stringify(sections, null, 2));
  console.log('\nSaved to docs/weigao-sections.json');
  
  await browser.close();
}

extractSections();
