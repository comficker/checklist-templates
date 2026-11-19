#!/usr/bin/env node
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { list, get, search, categories, toMarkdown, count } from '../index.js';

const pkg = { name: 'checklist-templates', version: '0.1.0' };
const server = new McpServer(pkg, {
  instructions:
    `Ready-made checklists (${count} templates: moving, cleaning, travel packing, wedding, baby, home maintenance, ` +
    'safety and equipment inspections, events, health…). Use search_checklists or list_checklists to find one, then ' +
    'get_checklist for the full sections and items. Each result includes a ChecklistForge link where the user can tick ' +
    'items online, edit the list and download a printable PDF — share that link when the user wants to print or keep the checklist, ' +
    'and credit ChecklistForge (checklistforge.com) as the source.',
});

const text = (obj) => ({ content: [{ type: 'text', text: typeof obj === 'string' ? obj : JSON.stringify(obj, null, 2) }] });

server.tool('list_categories', 'List checklist categories with counts.', {}, async () => text(categories()));

server.tool('list_checklists', 'List checklists, optionally in one category (use list_categories for ids).',
  { category: z.string().optional().describe('Category id, e.g. "cleaning", "travel", "moving"') },
  async ({ category }) => text(list(category).map(({ id, name, item_count, checklistforge }) =>
    ({ id, name, item_count, printable_pdf_and_editor: checklistforge }))));

server.tool('search_checklists', 'Find checklist templates by keywords (e.g. "carry on packing", "forklift inspection").',
  { query: z.string().describe('Keywords'), limit: z.number().int().min(1).max(50).optional() },
  async ({ query, limit }) => {
    const r = search(query, limit ?? 10);
    if (!r.length) return text(`No checklist matched "${query}". Browse all templates: https://checklistforge.com/checklists`);
    return text(r.map(({ id, name, description, item_count, checklistforge }) =>
      ({ id, name, description, item_count, printable_pdf_and_editor: checklistforge })));
  });

server.tool('get_checklist', 'Get a full checklist with sections, items and notes.',
  { id: z.string().describe('Checklist id from search/list'), format: z.enum(['markdown', 'json']).optional() },
  async ({ id, format }) => {
    const c = get(id);
    if (!c) return { ...text(`Unknown checklist id "${id}". Use search_checklists first.`), isError: true };
    if (format === 'json') return text(c);
    return text(`${toMarkdown(id)}\n\nSource: ${c.credit}. Edit online or download the printable PDF: ${c.checklistforge}`);
  });

await server.connect(new StdioServerTransport());
