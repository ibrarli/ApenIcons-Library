import * as library from 'apen-icons';
import type { ApenIcon } from 'apen-icons';
import meta from '../../../icons/meta.json';

type MetaEntry = { category: string; tags: string[]; since: string; aliases?: string[] };

export interface IconEntry {
  slug: string;
  name: string;
  category: string;
  tags: string[];
  since: string;
  aliases: string[];
  Icon: ApenIcon;
}

export interface Customization {
  size: number;
  strokeWidth: number;
  color: string;
}

export const defaultCustomization: Customization = { size: 24, strokeWidth: 2, color: 'currentColor' };

const toPascal = (slug: string) => slug.split('-').map((p) => p[0].toUpperCase() + p.slice(1)).join('');
const components = library as unknown as Record<string, ApenIcon>;

export const icons: IconEntry[] = Object.entries(meta as Record<string, MetaEntry>).map(([slug, m]) => ({
  slug,
  name: toPascal(slug),
  category: m.category,
  tags: m.tags,
  since: m.since,
  aliases: m.aliases ?? [],
  Icon: components[toPascal(slug)],
}));

export const categories = [...new Set(icons.map((i) => i.category))].sort();

export function searchIcons(list: IconEntry[], query: string, category: string | null) {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  return list.filter((icon) => {
    if (category && icon.category !== category) return false;
    if (!terms.length) return true;
    const haystack = [icon.slug, icon.name.toLowerCase(), icon.category.toLowerCase(), ...icon.tags, ...icon.aliases.map((a) => a.toLowerCase())].join(' ');
    return terms.every((t) => haystack.includes(t));
  });
}

// Raw SVG sources, loaded only when someone opens an icon.
const sources = import.meta.glob<string>('../../../icons/*.svg', { query: '?raw', import: 'default' });

export async function loadSvg(slug: string, { size, strokeWidth, color }: Customization) {
  const source = await sources[`../../../icons/${slug}.svg`]();
  return source
    .replace('width="24" height="24"', `width="${size}" height="${size}"`)
    .replace('stroke-width="2"', `stroke-width="${strokeWidth}"`)
    .replace(/(stroke|fill)="currentColor"/g, `$1="${color}"`)
    .trim();
}

export function jsxSnippet(name: string, { size, strokeWidth, color }: Customization) {
  const props = [
    size !== defaultCustomization.size && `size={${size}}`,
    strokeWidth !== defaultCustomization.strokeWidth && `strokeWidth={${strokeWidth}}`,
    color !== defaultCustomization.color && `color="${color}"`,
  ].filter(Boolean);
  return `<${name}${props.length ? ' ' + props.join(' ') : ''} />`;
}
