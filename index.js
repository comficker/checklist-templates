import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = dirname(fileURLToPath(import.meta.url));
const index = JSON.parse(readFileSync(join(root, 'data', 'index.json'), 'utf8'));
const cache = new Map();

/** All checklists (summary records). Optionally filter by category id. */
export function list(category) {
  return category ? index.checklists.filter((c) => c.category === category) : index.checklists;
}

/** Category ids with names and counts. */
export function categories() {
  const m = new Map();
  for (const c of index.checklists) {
    const e = m.get(c.category) || { id: c.category, name: c.category_name, count: 0 };
    e.count += 1;
    m.set(c.category, e);
  }
  return [...m.values()].sort((a, b) => b.count - a.count);
}

/** Full checklist (sections, items, notes, FAQ) by id, or undefined. */
export function get(id) {
  if (!index.checklists.some((c) => c.id === id)) return undefined;
  if (!cache.has(id)) cache.set(id, JSON.parse(readFileSync(join(root, 'data', 'json', `${id}.json`), 'utf8')));
  return cache.get(id);
}

/** Simple ranked search over name, description, tags and category. */
export function search(query, limit = 10) {
  const words = String(query).toLowerCase().split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  const scored = [];
  for (const c of index.checklists) {
    const name = c.name.toLowerCase();
    const hay = [name, c.description, c.category, c.category_name, ...(c.tags || [])].join(' ').toLowerCase();
    let s = 0;
    for (const w of words) {
      if (name.includes(w)) s += 3;
      else if (hay.includes(w)) s += 1;
      else { s = -1; break; }
    }
    if (s > 0) scored.push([s, c]);
  }
  return scored.sort((a, b) => b[0] - a[0] || a[1].name.localeCompare(b[1].name)).slice(0, limit).map((x) => x[1]);
}

/** Markdown with "- [ ]" task items. */
export function toMarkdown(id) {
  const c = get(id);
  if (!c) return undefined;
  const out = [`# ${c.name}`, '', c.description, ''];
  for (const s of c.sections) {
    if (s.title) out.push(`## ${s.title}`, '');
    for (const i of s.items) out.push(`- [ ] ${i.text}${i.note ? ` — _${i.note}_` : ''}`);
    out.push('');
  }
  out.push(`Printable PDF & editable version: ${c.checklistforge}`);
  return out.join('\n');
}

export const source = index.source;
export const count = index.count;
export default { list, categories, get, search, toMarkdown, source, count };
