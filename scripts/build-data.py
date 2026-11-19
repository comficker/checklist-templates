"""Pull curated public templates from the ChecklistForge API and write data/ (JSON + Markdown + index)."""
import json, os, time, urllib.request, re

API = 'https://touch.ninosaur.com/checklist/checklists/'
SITE = 'https://checklistforge.com'
UA = {'User-Agent': 'checklist-templates-build/1.0'}

def get(url):
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
        return json.load(r)

slugs, page = [], 1
while True:
    d = get(f'{API}?page_size=100&page={page}')
    slugs += [r['id_string'] for r in d['results'] if r['status'] == 'public' and r['is_template']]
    if page >= d['num_pages']: break
    page += 1

os.makedirs('data/json', exist_ok=True); os.makedirs('data/markdown', exist_ok=True)
index = []
for slug in sorted(set(slugs)):
    c = get(API + slug + '/'); time.sleep(0.2)
    sections, cur = [], None
    for it in sorted(c['items'], key=lambda i: i['position']):
        if it.get('section') or cur is None:
            cur = {'title': it.get('section') or '', 'items': []}; sections.append(cur)
        item = {'text': it['content']}
        if it.get('note'): item['note'] = it['note']
        cur['items'].append(item)
    cat = c.get('category') or {}
    url = f'{SITE}/checklist/{slug}'
    rec = {
        'id': slug, 'name': c['name'], 'description': c.get('description') or '',
        'category': cat.get('id_string', ''), 'category_name': cat.get('name', ''),
        'tags': [t['id_string'] for t in c.get('tags') or [] if t['id_string'] not in ('printable', 'pdf')],
        'item_count': len(c['items']), 'sections': sections,
        'faq': [{'q': f['q'], 'a': f['a']} for f in (c.get('faq') or [])],
        'checklistforge': url, 'pdf_and_editor': url,
        'license': 'CC-BY-4.0', 'credit': f'{c["name"]} by ChecklistForge ({url})',
        'updated': (c.get('updated') or '')[:10],
    }
    json.dump(rec, open(f'data/json/{slug}.json', 'w'), ensure_ascii=False, indent=2)
    md = [f'# {c["name"]}', '', rec['description'], '',
          f'> Free printable & editable version: [{c["name"]} on ChecklistForge]({url}) — tick items online or download as PDF.', '']
    for s in sections:
        if s['title']: md += [f'## {s["title"]}', '']
        for i in s['items']:
            md.append(f'- [ ] {i["text"]}' + (f' — _{i["note"]}_' if i.get('note') else ''))
        md.append('')
    md += ['---', f'Source: [{c["name"]}]({url}) by ChecklistForge · License: CC BY 4.0', '']
    open(f'data/markdown/{slug}.md', 'w').write('\n'.join(md))
    index.append({k: rec[k] for k in ('id', 'name', 'description', 'category', 'category_name', 'tags', 'item_count', 'checklistforge')})
    print(slug, rec['item_count'])

json.dump({'source': SITE, 'license': 'CC-BY-4.0', 'count': len(index),
           'checklists': sorted(index, key=lambda r: (r['category'], r['name']))},
          open('data/index.json', 'w'), ensure_ascii=False, indent=2)
print('total', len(index))
