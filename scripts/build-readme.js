// Generates README.md from data/index.json. Run after build-data.py.
import { readFileSync, writeFileSync } from 'node:fs';

const idx = JSON.parse(readFileSync('data/index.json', 'utf8'));
const byCat = new Map();
for (const c of idx.checklists) {
  if (!byCat.has(c.category)) byCat.set(c.category, { name: c.category_name || c.category, items: [] });
  byCat.get(c.category).items.push(c);
}
const FIRST = ['cleaning', 'moving-relocation', 'travel', 'home-maintenance', 'home-organization', 'pregnancy-baby', 'wedding', 'emergency-preparedness', 'food-kitchen', 'inspections', 'workplace-safety', 'vehicles'];
const rank = (id) => (FIRST.includes(id) ? FIRST.indexOf(id) : 100);
const cats = [...byCat.entries()].sort((a, b) => rank(a[0]) - rank(b[0]) || b[1].items.length - a[1].items.length);
const anchor = (name) => /checklist$/i.test(name) ? `Free printable ${name.toLowerCase()}` : `Free printable ${name.toLowerCase()} (PDF)`;
const slugAnchor = (s) => s.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/ /g, '-');

let md = `# checklist-templates

**${idx.count} free checklist templates** as clean JSON and Markdown — moving, house cleaning, travel packing, wedding planning, baby, home maintenance, safety and equipment inspections, events and more. Use them in apps, notes (Obsidian, Notion, GitHub task lists), scripts or AI agents. Comes with a small JS API, a CLI and an MCP server.

Every checklist also has a **free printable PDF and an online editor** on [ChecklistForge](https://checklistforge.com/checklists): tick items, remove or add lines, and download a print-ready PDF.

[![npm](https://img.shields.io/npm/v/checklist-templates)](https://www.npmjs.com/package/checklist-templates) · Data: CC BY 4.0 · Code: MIT

## Install

\`\`\`bash
npm install checklist-templates
\`\`\`

\`\`\`js
import { search, get, toMarkdown, categories } from 'checklist-templates';

search('carry on packing');          // → [{ id: 'carry-on-checklist', name, item_count, checklistforge }, …]
get('moving-checklist').sections;     // → [{ title, items: [{ text, note? }] }, …]
console.log(toMarkdown('house-cleaning-checklist')); // "- [ ] …" task list
\`\`\`

Raw files work without installing: \`https://cdn.jsdelivr.net/npm/checklist-templates/data/json/moving-checklist.json\`

### CLI

\`\`\`bash
npx checklist-templates search wedding
npx checklist-templates show moving-checklist > moving.md
\`\`\`

### MCP server (Claude, Cursor, VS Code…)

\`\`\`json
{ "mcpServers": { "checklist-templates": { "command": "npx", "args": ["-y", "-p", "checklist-templates", "checklist-templates-mcp"] } } }
\`\`\`

Tools: \`search_checklists\`, \`list_categories\`, \`list_checklists\`, \`get_checklist\` (Markdown or JSON). Each result links to the printable PDF / editable version on ChecklistForge.

## Data format

\`\`\`json
{
  "id": "moving-checklist",
  "name": "Moving Checklist",
  "category": "moving",
  "item_count": 32,
  "sections": [{ "title": "8 weeks before", "items": [{ "text": "…", "note": "…" }] }],
  "faq": [{ "q": "…", "a": "…" }],
  "checklistforge": "https://checklistforge.com/checklist/moving-checklist",
  "license": "CC-BY-4.0",
  "credit": "Moving Checklist by ChecklistForge (https://checklistforge.com/checklist/moving-checklist)"
}
\`\`\`

\`data/index.json\` lists every checklist; \`data/json/<id>.json\` and \`data/markdown/<id>.md\` hold the full lists.

## All checklists

${cats.map(([id, c]) => `[${c.name}](#${slugAnchor(c.name)}) (${c.items.length})`).join(' · ')}

`;
for (const [id, c] of cats) {
  md += `### ${c.name}\n\n| Checklist | Items | Data | Printable PDF & editor |\n|---|---|---|---|\n`;
  for (const x of c.items.sort((a, b) => a.name.localeCompare(b.name))) {
    md += `| ${x.name} | ${x.item_count} | [JSON](data/json/${x.id}.json) · [MD](data/markdown/${x.id}.md) | [${anchor(x.name)}](${x.checklistforge}) |\n`;
  }
  md += '\n';
}
md += `## License & credit

- Checklist data (\`data/\`): [CC BY 4.0](LICENSE-DATA.md). Use it anywhere, including commercially — please credit with a link:
  > Checklist: <name> by ChecklistForge (https://checklistforge.com/checklist/<id>)

  Each JSON file has a ready-made \`credit\` field.
- Code (JS API, CLI, MCP server): [MIT](LICENSE).

## Contributing

Found a wrong or missing item, or want a checklist that is not here? [Open an issue](https://github.com/comficker/checklist-templates/issues/new/choose). The lists are maintained on [ChecklistForge](https://checklistforge.com) and synced here.
`;
writeFileSync('README.md', md);
console.log('README.md written:', idx.count, 'checklists,', cats.length, 'categories');
