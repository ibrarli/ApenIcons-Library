import {
  ArrowRight, Bell, Calendar, CircleCheck, Folder, Heart, Home, LayoutDashboard, MessageCircle,
  PieChart, Search, Settings, ShieldCheck, ShoppingBag, Sparkle, User,
} from 'apen-icons';
import { icons } from '../lib/icons';
import { site } from '../lib/site';
import { button } from '../lib/ui';
import { CommandTabs } from './CommandTabs';

const showcase = [Home, Search, Bell, User, Settings, PieChart, Calendar, MessageCircle, Folder, ShieldCheck, Heart, ShoppingBag, LayoutDashboard, CircleCheck];

export function Hero() {
  const added = icons.filter((i) => i.since === site.version).length;

  return (
    <section id="top" className="flex flex-col items-center gap-6 px-4 pt-20 pb-16 text-center sm:pt-28 md:px-6">
      <a
        href="#icons"
        className="inline-flex items-center gap-1.5 rounded-full bg-primary/12 px-3 py-1 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
      >
        <Sparkle className="size-3" /> v{site.version} · {added} new icons · {icons.length} in total
      </a>
      <h1 className="max-w-4xl text-5xl leading-[1.05] font-bold tracking-tight text-balance sm:text-7xl">
        Rounded icons for <span className="text-brand-gradient">beautiful interfaces</span>
      </h1>
      <p className="max-w-2xl text-lg text-balance text-muted-foreground">
        Apen Icons are drawn on one 24px grid with one rounded stroke, so every icon sits together. Tree-shakeable React
        components, made to pair with Apen UI.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="#icons" className={button({ variant: 'brand', size: 'lg' })}>
          Browse icons <ArrowRight />
        </a>
        <a href="#usage" className={button({ variant: 'secondary', size: 'lg' })}>
          How to use
        </a>
      </div>
      <CommandTabs className="w-full max-w-xl text-left" />

      <div className="mt-8 grid w-full max-w-4xl grid-cols-7 gap-2 sm:gap-3" aria-hidden="true">
        {showcase.map((Icon, i) => (
          <div
            key={i}
            className={
              i % 5 === 2
                ? 'flex aspect-square items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-sm shadow-primary/25'
                : 'flex aspect-square items-center justify-center rounded-2xl bg-card text-foreground shadow-soft'
            }
          >
            <Icon className="size-5 sm:size-7" />
          </div>
        ))}
      </div>
    </section>
  );
}
