import fs from 'fs';

const data = JSON.parse(fs.readFileSync('docs/weigao-products-scrape.json', 'utf8'));
const markdown = data.markdown;

// Extract all product categories with their links
const allLinks = [];
const linkRegex = /\[([^\]]+)\]\((https:\/\/www\.weigaoholding\.com\/Product\/index\.html\?cate=\d+)/g;
let match;

while ((match = linkRegex.exec(markdown)) !== null) {
  const name = match[1].replace(/\\/g, '').replace(/\n/g, ' ').trim();
  const url = match[2];
  if (name && name.length > 1 && name.length < 50) {
    allLinks.push({ name, url });
  }
}

// Remove duplicates
const uniqueLinks = allLinks.filter((link, index, self) => 
  index === self.findIndex(l => l.name === link.name)
);

console.log(`Found ${uniqueLinks.length} unique product categories:\n`);
uniqueLinks.forEach((link, i) => {
  console.log(`${i + 1}. ${link.name}`);
  console.log(`   URL: ${link.url}`);
});

// Save to file
fs.writeFileSync('docs/all-product-categories.json', JSON.stringify(uniqueLinks, null, 2));
console.log('\nSaved to docs/all-product-categories.json');
