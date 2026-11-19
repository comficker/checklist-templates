import { test } from 'node:test';
import assert from 'node:assert/strict';
import { list, get, search, categories, toMarkdown, count } from '../index.js';

test('index is consistent', () => {
  assert.ok(count > 100);
  assert.equal(list().length, count);
  for (const c of list()) {
    const full = get(c.id);
    assert.ok(full, c.id);
    assert.ok(full.sections.length > 0 && full.item_count > 0, c.id);
    assert.match(full.checklistforge, /^https:\/\/checklistforge\.com\/checklist\//);
  }
});

test('search and markdown', () => {
  const r = search('moving');
  assert.ok(r.length > 0);
  assert.match(toMarkdown(r[0].id), /- \[ \] /);
  assert.equal(get('does-not-exist'), undefined);
  assert.ok(categories().length > 3);
});
