import fs from 'fs';

const data = JSON.parse(fs.readFileSync('docs/weigao-products-scrape.json', 'utf8'));
const markdown = data.markdown;

// Extract product field categories
const fieldMatches = markdown.match(/\[([^\]]+)\s*\\?\s*\\?\s*\\?\s*\\?\s*\]\(https:\/\/www\.weigaoholding\.com\/Product\/index\.html\?cate=\d+\s*""\)/g);

console.log('Product Fields found:');
const fields = [];
if (fieldMatches) {
  fieldMatches.forEach(match => {
    const nameMatch = match.match(/\[([^\]]+)/);
    if (nameMatch) {
      const name = nameMatch[1].replace(/\\/g, '').trim();
      fields.push(name);
      console.log(`- ${name}`);
    }
  });
}

// Extract department categories
const deptMatches = markdown.match(/- ([^\n]+科[^\n]*)/g);
console.log('\nDepartments found:');
const departments = [];
if (deptMatches) {
  deptMatches.forEach(match => {
    const name = match.replace(/^- /, '').trim();
    if (name.length < 20) {
      departments.push(name);
      console.log(`- ${name}`);
    }
  });
}

// Save extracted data
const extracted = {
  fields: fields,
  departments: departments.slice(0, 50) // Limit to 50 departments
};

fs.writeFileSync('docs/extracted-categories.json', JSON.stringify(extracted, null, 2));
console.log('\nSaved to docs/extracted-categories.json');
