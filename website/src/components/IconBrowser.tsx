import { useDeferredValue, useEffect, useMemo, useRef } from 'react';
import { Refresh, Search, X } from 'apen-icons';
import { categories, defaultCustomization, icons, searchIcons, type Customization, type IconEntry } from '../lib/icons';
import { site } from '../lib/site';
import { button, cn } from '../lib/ui';

const swatches = [
  { label: 'Current colour', value: 'currentColor', className: 'bg-foreground' },
  { label: 'Apen orange', value: '#f15a29', className: 'bg-brand-orange' },
  { label: 'Apen blue', value: '#00aeef', className: 'bg-brand-blue' },
  { label: 'Green', value: '#16a34a', className: 'bg-success' },
  { label: 'Red', value: '#e5484d', className: 'bg-destructive' },
];

// Pseudo-category for icons added in the current release.
const NEW = '__new__';

interface IconBrowserProps {
  query: string;
  onQueryChange: (query: string) => void;
  category: string | null;
  onCategoryChange: (category: string | null) => void;
  custom: Customization;
  onCustomChange: (custom: Customization) => void;
  selected: string | null;
  onSelect: (icon: IconEntry) => void;
}

export function IconBrowser({ query, onQueryChange, category, onCategoryChange, custom, onCustomChange, selected, onSelect }: IconBrowserProps) {
  const searchRef = useRef<HTMLInputElement>(null);
  const deferredQuery = useDeferredValue(query);
  const matching = useMemo(() => searchIcons(icons, deferredQuery, null), [deferredQuery]);
  const results = useMemo(
    () => (category === NEW ? matching.filter((i) => i.since === site.version) : category ? matching.filter((i) => i.category === category) : matching),
    [matching, category],
  );
  const counts = useMemo(() => {
    const byCategory = new Map<string, number>();
    for (const icon of matching) byCategory.set(icon.category, (byCategory.get(icon.category) ?? 0) + 1);
    return byCategory;
  }, [matching]);
  const isCustomized = custom.size !== defaultCustomization.size || custom.strokeWidth !== defaultCustomization.strokeWidth || custom.color !== defaultCustomization.color;

  // "/" jumps to search, like most docs sites.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(target.tagName)) {
        event.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section id="icons" className="w-full px-4 pb-24 md:px-6">
      {/* On desktop the toolbar sticks under the navbar. The frosted band behind it hides the cards scrolling past. */}
      <div className="z-30 -mx-4 px-4 md:sticky md:top-20 md:-mx-6 md:bg-background/80 md:px-6 md:pb-3 md:backdrop-blur-xl md:after:pointer-events-none md:after:absolute md:after:inset-x-0 md:after:top-full md:after:h-6 md:after:bg-linear-to-b md:after:from-background/80 md:after:to-transparent">
        <div className="flex flex-col gap-3 rounded-3xl bg-card p-3 shadow-soft">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <label className="relative flex min-w-0 flex-1 items-center">
              <span className="sr-only">Search icons</span>
              <Search className="pointer-events-none absolute left-4 size-4 text-muted-foreground" />
              <input
                ref={searchRef}
                type="search"
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder={`Search ${icons.length} icons by name or tag…`}
                className="h-11 w-full rounded-full border border-input bg-card pr-12 pl-11 text-sm transition-[border-color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-ring/15 [&::-webkit-search-cancel-button]:hidden"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => onQueryChange('')}
                  aria-label="Clear search"
                  className="absolute right-2 inline-flex size-7 items-center justify-center rounded-full text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  <X className="size-3.5" />
                </button>
              ) : (
                <kbd className="pointer-events-none absolute right-3 hidden rounded-md bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground sm:block">/</kbd>
              )}
            </label>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 px-2 text-sm">
              <Slider label="Size" value={custom.size} min={16} max={48} step={2} suffix="px" onChange={(size) => onCustomChange({ ...custom, size })} />
              <Slider label="Stroke" value={custom.strokeWidth} min={1} max={3} step={0.25} onChange={(strokeWidth) => onCustomChange({ ...custom, strokeWidth })} />
              <div className="flex items-center gap-1.5" role="radiogroup" aria-label="Colour">
                {swatches.map((swatch) => (
                  <button
                    key={swatch.value}
                    type="button"
                    role="radio"
                    aria-checked={custom.color === swatch.value}
                    aria-label={swatch.label}
                    title={swatch.label}
                    onClick={() => onCustomChange({ ...custom, color: swatch.value })}
                    className={cn(
                      'size-5 rounded-full ring-offset-2 ring-offset-card transition',
                      swatch.className,
                      custom.color === swatch.value ? 'ring-2 ring-primary' : 'hover:scale-110',
                    )}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => onCustomChange(defaultCustomization)}
                disabled={!isCustomized}
                aria-label="Reset size, stroke and colour"
                title="Reset"
                className={button({ variant: 'ghost', size: 'icon-sm' })}
              >
                <Refresh />
              </button>
            </div>
          </div>

          <div className="scrollbar-none -mx-3 flex gap-1.5 overflow-x-auto px-3" role="tablist" aria-label="Categories">
            <CategoryChip active={category === null} onClick={() => onCategoryChange(null)} label="All" count={matching.length} />
            <CategoryChip active={category === NEW} onClick={() => onCategoryChange(NEW)} label={`New in v${site.version}`} count={matching.filter((i) => i.since === site.version).length} />
            {categories.map((name) => (
              <CategoryChip key={name} active={category === name} onClick={() => onCategoryChange(name)} label={name} count={counts.get(name) ?? 0} />
            ))}
          </div>
        </div>
      </div>

      <p className="mt-6 mb-3 px-2 text-sm text-muted-foreground" aria-live="polite">
        {results.length === 1 ? '1 icon' : `${results.length} icons`}
        {category === NEW ? ` added in v${site.version}` : category ? ` in ${category}` : ''}
        {deferredQuery ? ` matching “${deferredQuery}”` : ''}
      </p>

      {results.length ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(6.5rem,1fr))] gap-3">
          {results.map((icon) => (
            <button
              key={icon.slug}
              type="button"
              onClick={() => onSelect(icon)}
              aria-pressed={selected === icon.slug}
              className={cn(
                'group relative flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl bg-card p-3 shadow-soft transition outline-none hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-4 focus-visible:ring-ring/25',
                selected === icon.slug ? 'text-primary ring-2 ring-primary' : 'hover:text-primary',
              )}
            >
              <span className="flex h-12 items-center justify-center">
                <icon.Icon size={custom.size} strokeWidth={custom.strokeWidth} color={custom.color} />
              </span>
              <span className="w-full truncate text-center text-[11px] font-medium text-muted-foreground group-hover:text-foreground">{icon.name}</span>
            </button>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 rounded-3xl bg-card px-6 py-16 text-center shadow-soft">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Search className="size-5" />
          </span>
          <h3 className="text-lg font-bold">No icons found</h3>
          <p className="max-w-sm text-sm text-muted-foreground">
            Try another word, or{' '}
            <a href={`${site.links.github}/issues/new?title=Icon%20request:%20${encodeURIComponent(deferredQuery)}`} target="_blank" rel="noreferrer" className="font-semibold text-primary underline-offset-4 hover:underline">
              request “{deferredQuery}”
            </a>{' '}
            on GitHub.
          </p>
          <button type="button" onClick={() => { onQueryChange(''); onCategoryChange(null); }} className={button({ variant: 'secondary', size: 'sm' })}>
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}

function CategoryChip({ label, count, active, onClick }: { label: string; count: number; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      disabled={!count && !active}
      className={cn(
        'inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full px-3.5 text-xs font-semibold transition-colors disabled:opacity-40',
        active ? 'bg-foreground text-background' : 'bg-muted text-muted-foreground hover:bg-accent hover:text-foreground',
      )}
    >
      {label}
      <span className={cn('tabular-nums', active ? 'opacity-70' : 'opacity-60')}>{count}</span>
    </button>
  );
}

function Slider({ label, value, min, max, step, suffix = '', onChange }: { label: string; value: number; min: number; max: number; step: number; suffix?: string; onChange: (value: number) => void }) {
  return (
    <label className="flex items-center gap-2">
      <span className="font-medium text-muted-foreground">{label}</span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-20 sm:w-24" />
      <span className="w-10 font-mono text-xs tabular-nums">
        {value}
        {suffix}
      </span>
    </label>
  );
}
