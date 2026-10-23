import { useCallback, useEffect, useState } from 'react';
import { defaultCustomization, icons, type Customization, type IconEntry } from './lib/icons';
import { Guidelines } from './components/Guidelines';
import { Hero } from './components/Hero';
import { IconBrowser } from './components/IconBrowser';
import { IconPanel } from './components/IconPanel';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { Usage } from './components/Usage';

// The open icon lives in the URL (?icon=arrow-right) so it can be shared.
const iconFromUrl = () => {
  const slug = new URLSearchParams(window.location.search).get('icon');
  return icons.find((i) => i.slug === slug) ?? null;
};

export default function App() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string | null>(null);
  const [custom, setCustom] = useState<Customization>(defaultCustomization);
  const [selected, setSelected] = useState<IconEntry | null>(iconFromUrl);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (selected) url.searchParams.set('icon', selected.slug);
    else url.searchParams.delete('icon');
    window.history.replaceState(null, '', url);
  }, [selected]);

  const close = useCallback(() => setSelected(null), []);

  const searchTag = (tag: string) => {
    setQuery(tag);
    setCategory(null);
    setSelected(null);
    document.getElementById('icons')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <IconBrowser
          query={query}
          onQueryChange={setQuery}
          category={category}
          onCategoryChange={setCategory}
          custom={custom}
          onCustomChange={setCustom}
          selected={selected?.slug ?? null}
          onSelect={setSelected}
        />
        <Usage />
        <Guidelines />
      </main>
      <SiteFooter />
      {selected && <IconPanel icon={selected} custom={custom} onClose={close} onTag={searchTag} />}
    </div>
  );
}
