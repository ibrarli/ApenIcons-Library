// Validates icons/*.svg against the Apen Icons grid and generates the React components.
//
//   node scripts/build-icons.mjs          generate src/generated/icons.ts
//   node scripts/build-icons.mjs --check  validate only (no files written)
//
// The SVG files and icons/meta.json are the source of truth. Never edit the generated file.

import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const ICONS_DIR = join(root, 'icons');
const OUT_FILE = join(root, 'src/generated/icons.ts');
const CHECK_ONLY = process.argv.includes('--check');

// Every icon shares these root attributes so they line up and respond to the same props.
const ROOT_ATTRS = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
};

// Shapes and the attributes each may carry. Anything else (transforms, styles, ids,
// hard-coded colours, stroke overrides) breaks consistency and is rejected.
const ELEMENTS = {
  path: ['d', 'fill', 'fill-rule', 'clip-rule'],
  circle: ['cx', 'cy', 'r', 'fill'],
  ellipse: ['cx', 'cy', 'rx', 'ry', 'fill'],
  rect: ['x', 'y', 'width', 'height', 'rx', 'ry', 'fill'],
  line: ['x1', 'y1', 'x2', 'y2'],
  polyline: ['points'],
  polygon: ['points', 'fill'],
};
const FILL_VALUES = ['none', 'currentColor'];
const CATEGORIES = [
  'Actions', 'Alerts', 'Arrows', 'Charts', 'Commerce', 'Communication', 'Design', 'Development', 'Devices',
  'Files', 'Layout', 'Maps', 'Media', 'Security', 'Shapes', 'Social', 'Text', 'Time', 'Users', 'Weather',
];

const toPascal = (kebab) => kebab.split('-').map((part) => part[0].toUpperCase() + part.slice(1)).join('');
const toCamel = (attr) => attr.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
const parseAttrs = (source) => Object.fromEntries([...source.matchAll(/([\w:-]+)="([^"]*)"/g)].map((m) => [m[1], m[2]]));

const errors = [];
const fail = (file, message) => errors.push(`${file}: ${message}`);

const meta = JSON.parse(readFileSync(join(ICONS_DIR, 'meta.json'), 'utf8'));
const files = readdirSync(ICONS_DIR).filter((f) => f.endsWith('.svg')).sort();
const icons = [];

for (const file of files) {
  const slug = file.slice(0, -4);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) fail(file, 'file names must be kebab-case, e.g. arrow-up-right.svg');

  const source = readFileSync(join(ICONS_DIR, file), 'utf8');
  const rootMatch = source.match(/<svg\b([^>]*)>([\s\S]*)<\/svg>/);
  if (!rootMatch) {
    fail(file, 'not a valid <svg> document');
    continue;
  }
  const rootAttrs = parseAttrs(rootMatch[1]);
  for (const [attr, value] of Object.entries(ROOT_ATTRS)) {
    if (rootAttrs[attr] !== value) fail(file, `<svg> needs ${attr}="${value}" (found ${rootAttrs[attr] ?? 'nothing'})`);
  }

  const body = rootMatch[2].replace(/<!--[\s\S]*?-->/g, '').trim();
  const node = [];
  const elementPattern = /<(\w+)\b([^>]*?)\/>/g;
  let consumed = '';
  for (const m of body.matchAll(elementPattern)) {
    consumed += m[0];
    const [, tag, attrSource] = m;
    if (!ELEMENTS[tag]) {
      fail(file, `<${tag}> is not allowed; use ${Object.keys(ELEMENTS).join(', ')}`);
      continue;
    }
    const attrs = parseAttrs(attrSource);
    for (const [attr, value] of Object.entries(attrs)) {
      if (!ELEMENTS[tag].includes(attr)) fail(file, `<${tag}> may not set "${attr}"`);
      if (attr === 'fill' && !FILL_VALUES.includes(value)) fail(file, `fill must be ${FILL_VALUES.join(' or ')}, not "${value}"`);
    }
    node.push([tag, Object.fromEntries(Object.entries(attrs).map(([k, v]) => [toCamel(k), v]))]);
  }
  if (body.replace(/\s+/g, '') !== consumed.replace(/\s+/g, '')) {
    fail(file, 'only self-closing shape elements are allowed inside <svg> (no groups, defs, masks or text)');
  }
  if (node.length === 0) fail(file, 'has no shapes');

  const info = meta[slug];
  if (!info) {
    fail(file, `missing from icons/meta.json; add "${slug}": { "category": "...", "tags": [...], "since": "x.y.z" }`);
    continue;
  }
  if (!CATEGORIES.includes(info.category)) fail(file, `unknown category "${info.category}"; use one of ${CATEGORIES.join(', ')}`);
  if (!Array.isArray(info.tags) || info.tags.length === 0) fail(file, 'needs at least one tag in meta.json');
  if (!/^\d+\.\d+\.\d+$/.test(info.since ?? '')) fail(file, '"since" must be a version like "1.2.0"');

  icons.push({ slug, name: toPascal(slug), node, source, aliases: info.aliases ?? [] });
}

for (const slug of Object.keys(meta)) {
  if (!files.includes(`${slug}.svg`)) fail('icons/meta.json', `"${slug}" has no matching ${slug}.svg`);
}

const taken = new Set(icons.map((i) => i.name));
for (const icon of icons) {
  for (const alias of icon.aliases) {
    if (taken.has(alias)) fail(`${icon.slug}.svg`, `alias "${alias}" clashes with another icon or alias`);
    taken.add(alias);
  }
}

if (errors.length) {
  console.error(`\n✖ ${errors.length} problem${errors.length === 1 ? '' : 's'} in icons/:\n`);
  for (const e of errors) console.error(`  • ${e}`);
  console.error('');
  process.exit(1);
}

if (CHECK_ONLY) {
  console.log(`✔ ${icons.length} icons are valid`);
  process.exit(0);
}

// A data-URI preview lets editors show the icon when you hover the import.
const preview = (source) => {
  const svg = source
    .replace('stroke="currentColor"', 'stroke="#000"')
    .replace(/fill="currentColor"/g, 'fill="#000"')
    .replace('<svg ', '<svg style="background:#fff;border-radius:4px" ')
    .replace(/\s*\n\s*/g, '');
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
};

const lines = [
  '// Generated by scripts/build-icons.mjs from icons/*.svg. Do not edit by hand.',
  "import { createIcon } from '../createIcon';",
  '',
];
for (const icon of icons) {
  lines.push(
    `/** ![${icon.name}](${preview(icon.source)}) */`,
    `export const ${icon.name} = /* @__PURE__ */ createIcon('${icon.name}', ${JSON.stringify(icon.node)});`,
  );
  for (const alias of icon.aliases) {
    lines.push(`/** @deprecated Use \`${icon.name}\` instead. */`, `export const ${alias} = ${icon.name};`);
  }
}
lines.push('');

mkdirSync(dirname(OUT_FILE), { recursive: true });
writeFileSync(OUT_FILE, lines.join('\n'));
const aliasCount = icons.reduce((n, i) => n + i.aliases.length, 0);
console.log(`✔ Generated ${icons.length} icons (+${aliasCount} deprecated aliases) → src/generated/icons.ts`);
