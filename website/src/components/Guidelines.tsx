import { ArrowRight, Bell, Calendar, Home, HomeCheck, ShieldCheck, UserPlus } from 'apen-icons';
import type { ApenIcon } from 'apen-icons';
import { site } from '../lib/site';
import { button } from '../lib/ui';
import { SectionHeading } from './Usage';

const rules: { icon: ApenIcon; title: string; body: string; overlay?: 'live' | 'corner' }[] = [
  { icon: Bell, title: '24px grid, 2px padding', body: 'Shapes stay inside the 20px live area so icons line up in buttons and lists.', overlay: 'live' },
  { icon: Calendar, title: 'One 2px rounded stroke', body: 'Round caps and joins everywhere. No mixed fills or weights.' },
  { icon: Home, title: 'Soft corners', body: 'Large containers use a 3–4px radius, matching the rounded Apen UI surfaces.' },
  { icon: HomeCheck, title: 'Modifiers inside', body: 'Containers with room hold their modifier inside, like Home, Shield, File and Calendar.' },
  { icon: UserPlus, title: 'Badges bottom-right', body: 'Open shapes like User and Funnel carry their badge in the bottom-right corner.', overlay: 'corner' },
  { icon: ShieldCheck, title: 'Solid only on purpose', body: 'Filled versions are separate icons ending in Fill, drawn to the same outline.' },
];

const SIZE = 96;

export function Guidelines() {
  return (
    <section id="guidelines" className="w-full px-4 pb-24 md:px-6">
      <SectionHeading
        eyebrow="Guidelines"
        title="One grid. One stroke. Every icon."
        body="These rules keep every icon consistent. They are checked automatically, so a new icon can't merge until it follows them."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rules.map((rule) => (
          <div key={rule.title} className="flex flex-col gap-4 rounded-3xl bg-card p-6 shadow-soft">
            <div className="relative flex h-36 items-center justify-center rounded-2xl bg-muted">
              <div className="bg-icon-grid relative rounded-sm" style={{ backgroundSize: `${SIZE / 24}px ${SIZE / 24}px` }}>
                <rule.icon size={SIZE} />
                {rule.overlay === 'live' && (
                  <span className="pointer-events-none absolute rounded-sm border border-dashed border-primary" style={{ inset: `${(SIZE / 24) * 2}px` }} />
                )}
                {rule.overlay === 'corner' && (
                  <span
                    className="pointer-events-none absolute rounded-md bg-primary/15"
                    style={{ left: `${(SIZE / 24) * 15}px`, top: `${(SIZE / 24) * 14.5}px`, width: `${(SIZE / 24) * 7.5}px`, height: `${(SIZE / 24) * 7.5}px` }}
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold">{rule.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{rule.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-col items-start justify-between gap-4 rounded-3xl bg-brand-gradient px-6 py-8 text-white sm:flex-row sm:items-center sm:px-10">
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl font-bold tracking-tight">Missing an icon?</h3>
          <p className="text-white/85">Request it, or draw it on the grid and open a pull request.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a href={`${site.links.github}/issues/new?title=Icon%20request:%20`} target="_blank" rel="noreferrer" className={button({ variant: 'light' })}>
            Request an icon
          </a>
          <a href={`${site.links.github}#adding-an-icon`} target="_blank" rel="noreferrer" className={button({ variant: 'glass' })}>
            Contribute <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
