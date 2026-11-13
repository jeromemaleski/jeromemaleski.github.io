// Usage: npm run new -- "My post title"
// Creates src/content/posts/<slug>.md as a draft dated today.
import { writeFileSync, existsSync } from 'node:fs';

const title = process.argv.slice(2).join(' ').trim();
if (!title) { console.error('Usage: npm run new -- "My post title"'); process.exit(1); }
const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const file = `src/content/posts/${slug}.md`;
if (existsSync(file)) { console.error(`${file} already exists`); process.exit(1); }
const today = new Date().toISOString().slice(0, 10);
writeFileSync(file, `---\ntitle: "${title.replace(/"/g, '\\"')}"\ndate: ${today}\ndescription: ""\ndraft: true\n---\n\n`);
console.log(`Created ${file} (draft). Set draft: false to publish.`);
