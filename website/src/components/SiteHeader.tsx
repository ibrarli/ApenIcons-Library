import { useState } from 'react';
import { MenuHamburger, X } from 'apen-icons';
import { nav, site } from '../lib/site';
import { button } from '../lib/ui';
import { GitHubIcon } from './GitHubIcon';
import { ThemeToggle } from './ThemeToggle';

export function Logo() {
  return (
    <span className="font-heading text-lg font-bold tracking-tight">
      Apen <span className="text-brand-gradient">Icons</span>
    </span>
  );
}

const linkClass =
  'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors outline-none hover:bg-accent hover:text-foreground focus-visible:ring-4 focus-visible:ring-ring/25';

/** Floating pill navbar, matching the Apen UI <Navbar variant="floating">. */
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 px-4 pt-4 pb-2 backdrop-blur-xl md:px-6">
      <nav className="relative flex h-14 w-full items-center justify-between gap-4 rounded-full bg-card/85 pr-2 pl-5 shadow-soft backdrop-blur-xl">
        <a href="#top" className="flex shrink-0 items-center gap-2" aria-label="Apen Icons home">
          <Logo />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </a>
          ))}
          <a href={site.links.apenUi} target="_blank" rel="noreferrer" className={linkClass}>
            Apen UI
          </a>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <a href={site.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={button({ variant: 'ghost', size: 'icon' })}>
            <GitHubIcon className="size-4" />
          </a>
          <ThemeToggle />
          <a href="#icons" className={button({ variant: 'brand', size: 'sm', className: 'max-sm:hidden' })}>
            Browse icons
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className={button({ variant: 'ghost', size: 'icon', className: 'md:hidden' })}
          >
            {open ? <X /> : <MenuHamburger />}
          </button>
        </div>

        {open && (
          <div
            className="absolute inset-x-0 top-full mt-2 flex animate-fade-in flex-col gap-1 rounded-3xl bg-popover p-2 text-popover-foreground shadow-xl md:hidden"
            onClick={() => setOpen(false)}
          >
            {nav.map((item) => (
              <a key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </a>
            ))}
            <a href={site.links.apenUi} target="_blank" rel="noreferrer" className={linkClass}>
              Apen UI
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
