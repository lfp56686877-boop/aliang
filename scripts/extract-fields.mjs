import fs from 'fs';

const data = JSON.parse(fs.readFileSync('docs/weigao-products-scrape.json', 'utf8'));
const markdown = data.markdown;

// Find the product fields section
const fieldsSection = markdown.match(/全部领域\n([\s\S]*?)(?:或\n立即搜索)/);

if (fieldsSection) {
  const fieldsText = fieldsSection[1];
  const fieldLines = fieldsText.split('\n').filter(line => 
    line.includes('[') && line.includes('Product/index.html')
  );
  
  console.log('Product Fields:');
  const fields = [];
  fieldLines.forEach(line => {
    const match = line.match(/\[([^\]\\]+)/);
    if (match) {
      const name = match[1].trim();
      fields.push(name);
      console.log(`- ${name}`);
    }
  });
  
  fs.writeFileSync('docs/product-fields.json', JSON.stringify(fields, null, 2));
  console.log(`\nTotal fields: ${fields.length}`);
} else {
  console.log('Fields section not found');
  
  // Try alternative extraction
  const allText = markdown;
  const fieldPattern = /([^\[\]\n]{2,20})\s*\\?\s*\\?\s*\\?\s*\\?\s*\]\(https:\/\/www\.weigaoholding\.com\/Product\/index\.html\?cate=\d+/g;
  let match;
  const fields = [];
  
  while ((match = fieldPattern.exec(allText)) !== null) {
    const name = match[1].replace(/\\/g, '').trim();
    if (name && !name.includes('http') && name.length < 30) {
      fields.push(name);
    }
  }
  
  console.log('Alternative extraction found:');
  [...new Set(fields)].forEach(f => console.log(`- ${f}`));
}
