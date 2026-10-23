import { useEffect, useRef, useState } from 'react';
import { Check, Copy, Download, X } from 'apen-icons';
import { jsxSnippet, loadSvg, type Customization, type IconEntry } from '../lib/icons';
import { site } from '../lib/site';
import { button, cn, copyText } from '../lib/ui';
import { CopyButton } from './CopyButton';

const PREVIEW = 168;

interface IconPanelProps {
  icon: IconEntry;
  custom: Customization;
  onClose: () => void;
  onTag: (tag: string) => void;
}

/** Details for one icon: a large preview on the grid, code to copy and the raw SVG. */
export function IconPanel({ icon, custom, onClose, onTag }: IconPanelProps) {
  const [tab, setTab] = useState<'react' | 'svg'>('react');
  const [svg, setSvg] = useState('');
  const [copied, setCopied] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let current = true;
    loadSvg(icon.slug, custom).then((source) => current && setSvg(source));
    return () => {
      current = false;
    };
  }, [icon.slug, custom]);

  useEffect(() => {
    closeRef.current?.focus({ preventScroll: true });
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const jsx = jsxSnippet(icon.name, custom);
  const reactCode = `import { ${icon.name} } from 'apen-icons';\n\n${jsx}`;

  const copy = async (key: string, value: string) => {
    if (await copyText(value)) {
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    }
  };

  const download = () => {
    const url = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
    const link = Object.assign(document.createElement('a'), { href: url, download: `${icon.slug}.svg` });
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 animate-fade-in bg-black/30 backdrop-blur-[2px]" onClick={onClose} aria-hidden="true" />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="icon-panel-title"
        className="scrollbar-soft fixed inset-x-2 bottom-2 z-50 flex max-h-[88svh] animate-sheet-up flex-col gap-5 overflow-y-auto rounded-3xl bg-card p-5 shadow-2xl sm:inset-x-auto sm:top-4 sm:right-4 sm:bottom-4 sm:max-h-none sm:w-104 sm:animate-sheet-in sm:p-6"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 flex-col gap-2">
            <h2 id="icon-panel-title" className="truncate text-2xl font-bold tracking-tight">
              {icon.name}
            </h2>
            <div className="flex flex-wrap gap-1.5">
              <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold">{icon.category}</span>
              <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">since v{icon.since}</span>
              {icon.since === site.version && <span className="rounded-full bg-primary/12 px-2.5 py-0.5 text-xs font-semibold text-primary">New</span>}
            </div>
          </div>
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Close" className={button({ variant: 'secondary', size: 'icon-sm' })}>
            <X />
          </button>
        </div>

        <div className="flex flex-col items-center gap-4 rounded-2xl bg-muted p-6">
          <div className="bg-icon-grid rounded-md" style={{ backgroundSize: `${PREVIEW / 24}px ${PREVIEW / 24}px` }}>
            <icon.Icon size={PREVIEW} strokeWidth={custom.strokeWidth} color={custom.color} />
          </div>
          <div className="flex items-end gap-5 text-muted-foreground" aria-label="Small sizes">
            {[16, 20, 24, 32].map((size) => (
              <div key={size} className="flex flex-col items-center gap-1.5">
                <icon.Icon size={size} strokeWidth={custom.strokeWidth} color={custom.color} className="text-foreground" />
                <span className="font-mono text-[10px]">{size}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="inline-flex h-9 w-fit items-center gap-1 rounded-full bg-muted p-1 text-muted-foreground" role="tablist">
            {(['react', 'svg'] as const).map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={tab === key}
                onClick={() => setTab(key)}
                className={cn(
                  'inline-flex h-full items-center rounded-full px-4 text-xs font-semibold transition-all hover:text-foreground',
                  tab === key && 'bg-card text-foreground shadow-sm dark:bg-accent',
                )}
              >
                {key === 'react' ? 'React' : 'SVG'}
              </button>
            ))}
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-code text-white/90">
            <CopyButton value={tab === 'react' ? reactCode : svg} className="absolute top-2.5 right-2.5 bg-white/10 text-white hover:bg-white/20 hover:text-white" />
            <pre className="scrollbar-soft max-h-56 overflow-auto p-4 pr-14 font-mono text-[12px] leading-5">
              <code>{tab === 'react' ? reactCode : svg}</code>
            </pre>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button type="button" onClick={() => copy('jsx', jsx)} className={button({ variant: 'brand', className: 'col-span-2' })}>
            {copied === 'jsx' ? <Check /> : <Copy />} {copied === 'jsx' ? 'Copied' : `Copy <${icon.name} />`}
          </button>
          <button type="button" onClick={() => copy('svg', svg)} disabled={!svg} className={button({ variant: 'secondary' })}>
            {copied === 'svg' ? <Check /> : <Copy />} {copied === 'svg' ? 'Copied' : 'Copy SVG'}
          </button>
          <button type="button" onClick={download} disabled={!svg} className={button({ variant: 'secondary' })}>
            <Download /> Download
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold">Tags</h3>
          <div className="flex flex-wrap gap-1.5">
            {icon.tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => onTag(tag)}
                className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-primary/12 hover:text-primary"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {icon.aliases.length > 0 && (
          <p className="rounded-2xl bg-warning/12 px-4 py-3 text-xs leading-relaxed text-foreground">
            Also exported as {icon.aliases.map((a, i) => (
              <span key={a}>
                {i > 0 && ', '}
                <code className="font-mono font-semibold">{a}</code>
              </span>
            ))}{' '}
            for older code. Those names are deprecated; use <code className="font-mono font-semibold">{icon.name}</code>.
          </p>
        )}
      </aside>
    </>
  );
}
