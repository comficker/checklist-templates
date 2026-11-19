export interface ChecklistSummary {
  id: string; name: string; description: string; category: string; category_name: string;
  tags: string[]; item_count: number; /** Printable PDF & online editor */ checklistforge: string;
}
export interface ChecklistItem { text: string; note?: string }
export interface ChecklistSection { title: string; items: ChecklistItem[] }
export interface Checklist extends ChecklistSummary {
  sections: ChecklistSection[]; faq: { q: string; a: string }[];
  pdf_and_editor: string; license: 'CC-BY-4.0'; credit: string; updated: string;
}
export function list(category?: string): ChecklistSummary[];
export function categories(): { id: string; name: string; count: number }[];
export function get(id: string): Checklist | undefined;
export function search(query: string, limit?: number): ChecklistSummary[];
export function toMarkdown(id: string): string | undefined;
export const source: string;
export const count: number;
declare const _default: { list: typeof list; categories: typeof categories; get: typeof get; search: typeof search; toMarkdown: typeof toMarkdown; source: string; count: number };
export default _default;
