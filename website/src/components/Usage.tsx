import { Bell, Heart, Search } from 'apen-icons';
import { CopyButton } from './CopyButton';

const example = `import { Bell, Heart, Search } from 'apen-icons';

export function Toolbar() {
  return (
    <div className="flex gap-3 text-slate-700">
      <Search />
      <Bell size={20} strokeWidth={1.5} />
      <Heart color="#f15a29" title="Favourite" />
    </div>
  );
}`;

const props = [
  { name: 'size', type: 'number | string', initial: '24', body: 'Width and height. Any CSS length works too.' },
  { name: 'color', type: 'string', initial: 'currentColor', body: 'Stroke colour. Solid icons use it as their fill.' },
  { name: 'strokeWidth', type: 'number | string', initial: '2', body: 'Line thickness on the 24px grid.' },
  { name: 'absoluteStrokeWidth', type: 'boolean', initial: 'false', body: 'Keep the stroke in screen pixels at any size.' },
  { name: 'title', type: 'string', initial: '—', body: 'Accessible name. Without it the icon is hidden from screen readers.' },
  { name: '...props', type: 'SVGProps', initial: '—', body: 'className, style, onClick and every other SVG attribute.' },
];

export function Usage() {
  return (
    <section id="usage" className="w-full px-4 pb-24 md:px-6">
      <SectionHeading eyebrow="Usage" title="Import the icons you need" body="Each icon is its own named export, so your bundle only includes the ones you use." />

      <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col gap-4">
          <div className="relative overflow-hidden rounded-3xl bg-code text-white/90">
            <div className="flex items-center gap-1.5 px-5 pt-4 pb-1 font-mono text-xs text-white/50">Toolbar.tsx</div>
            <CopyButton value={example} className="absolute top-3 right-3 bg-white/10 text-white hover:bg-white/20 hover:text-white" />
            <pre className="scrollbar-soft overflow-x-auto px-5 pt-2 pb-5 font-mono text-[13px] leading-6">
              <code>{example}</code>
            </pre>
          </div>
          <div className="flex items-center justify-center gap-6 rounded-3xl bg-card p-6 text-foreground shadow-soft">
            <Search />
            <Bell size={20} strokeWidth={1.5} />
            <Heart color="#f15a29" title="Favourite" />
            <span className="text-sm text-muted-foreground">← the result</span>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-card shadow-soft">
          <div className="border-b px-6 py-4">
            <h3 className="font-bold">Props</h3>
            <p className="text-sm text-muted-foreground">Every icon accepts the same props.</p>
          </div>
          <dl className="divide-y">
            {props.map((prop) => (
              <div key={prop.name} className="grid gap-1 px-6 py-3.5 sm:grid-cols-[9.5rem_1fr]">
                <dt className="font-mono text-sm font-semibold text-primary">{prop.name}</dt>
                <dd className="text-sm">
                  <span className="text-muted-foreground">{prop.body}</span>
                  <span className="mt-1 flex flex-wrap gap-x-3 font-mono text-xs text-muted-foreground/80">
                    <span>{prop.type}</span>
                    {prop.initial !== '—' && <span>default {prop.initial}</span>}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="mb-8 flex flex-col gap-2 px-2">
      <span className="text-sm font-semibold text-primary">{eyebrow}</span>
      <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">{title}</h2>
      <p className="max-w-2xl text-muted-foreground">{body}</p>
    </div>
  );
}
