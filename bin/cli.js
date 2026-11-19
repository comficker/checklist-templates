#!/usr/bin/env node
import { list, get, search, categories, toMarkdown } from '../index.js';

const [cmd, ...args] = process.argv.slice(2);
const help = `checklist-templates <command>

  list [category]        list checklist ids (optionally in one category)
  categories             list categories
  search <words…>        find checklists
  show <id> [--json]     print a checklist as Markdown (or JSON)

Printable PDF versions: https://checklistforge.com/checklists`;

if (cmd === 'list') for (const c of list(args[0])) console.log(`${c.id}\t${c.name}`);
else if (cmd === 'categories') for (const c of categories()) console.log(`${c.id}\t${c.name}\t${c.count}`);
else if (cmd === 'search') for (const c of search(args.join(' '))) console.log(`${c.id}\t${c.name}\t${c.checklistforge}`);
else if (cmd === 'show' && args[0]) {
  const c = get(args[0]);
  if (!c) { console.error(`Unknown checklist: ${args[0]}`); process.exit(1); }
  console.log(args.includes('--json') ? JSON.stringify(c, null, 2) : toMarkdown(args[0]));
} else { console.log(help); if (cmd && cmd !== 'help' && cmd !== '--help') process.exit(1); }
