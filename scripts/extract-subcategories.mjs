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
    
    // Find the "全部领域" section and extract subcategories after it
    const lines = markdown.split('\n');
    let inSubcats = false;
    const subcats = [];
    
    for (const line of lines) {
      if (line.includes('全部领域')) {
        inSubcats = true;
        continue;
      }
      if (inSubcats && (line.includes('或') || line.includes('立即搜索'))) {
        break;
      }
      if (inSubcats) {
        // Look for subcategory links
        const match = line.match(/\[([^\]]+?)\\\\/);
        if (match) {
          const name = match[1].trim();
          if (name && name.length > 1 && name.length < 30) {
            subcats.push(name);
          }
        }
      }
    }
    
    allProducts[field] = {
      name: data.name,
      subcategories: [...new Set(subcats)]
    };
    
    console.log(`${data.name}: ${subcats.length} subcategories`);
    subcats.forEach(sub => console.log(`  - ${sub}`));
    
  } catch (error) {
    console.error(`Error processing ${field}:`, error.message);
  }
}

fs.writeFileSync('docs/products-with-subcats.json', JSON.stringify(allProducts, null, 2));
console.log('\nSaved to docs/products-with-subcats.json');
