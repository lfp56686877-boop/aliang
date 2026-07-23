import fs from 'fs';

const productFields = [
  'general', 'endocrinology', 'medical-it', 'orthopedics', 'dental',
  'tissue-repair', 'blood-purification', 'packaging', 'surgery',
  'robotics', 'blood-collection', 'interventional', 'ivd',
  'assisted-reproduction', 'medical-equipment', 'rehabilitation', 'endoscopy'
];

const allProducts = {};

for (const field of productFields) {
  try {
    const data = JSON.parse(fs.readFileSync(`docs/products/${field}.json`, 'utf8'));
    const markdown = data.markdown || '';
    
    // Extract subcategories
    const subcats = [];
    const lines = markdown.split('\n');
    
    for (const line of lines) {
      // Look for category links
      const match = line.match(/\[([^\]]+)\]\(https:\/\/www\.weigaoholding\.com\/Product\/index\.html\?cate=(\d+)/);
      if (match) {
        const name = match[1].replace(/\\/g, '').replace(/\n/g, ' ').trim();
        const cateId = match[2];
        if (name && name.length > 1 && name.length < 50 && !name.includes('svg') && !name.includes('产品中心')) {
          subcats.push({ name, cateId });
        }
      }
    }
    
    // Remove duplicates
    const uniqueSubcats = subcats.filter((sub, index, self) => 
      index === self.findIndex(s => s.name === sub.name)
    );
    
    allProducts[field] = {
      name: data.name,
      subcategories: uniqueSubcats
    };
    
    console.log(`${data.name}: ${uniqueSubcats.length} subcategories`);
    uniqueSubcats.forEach(sub => console.log(`  - ${sub.name} (cate=${sub.cateId})`));
    
  } catch (error) {
    console.error(`Error processing ${field}:`, error.message);
  }
}

fs.writeFileSync('docs/products-structure.json', JSON.stringify(allProducts, null, 2));
console.log('\nSaved to docs/products-structure.json');
