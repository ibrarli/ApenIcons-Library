export const cn = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(' ');

// Same variants and sizes as the Apen UI <Button>.
const base =
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all outline-none select-none active:scale-[0.98] focus-visible:ring-4 focus-visible:ring-ring/25 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4";

const variants = {
  default: 'bg-primary text-primary-foreground shadow-sm shadow-primary/20 hover:bg-primary/90',
  brand: 'bg-brand-gradient text-white shadow-sm shadow-primary/25 hover:opacity-90',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-accent',
  outline: 'border border-input bg-card hover:bg-accent hover:text-accent-foreground',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  // For use on the brand gradient.
  light: 'bg-white text-neutral-900 hover:bg-white/90',
  glass: 'bg-white/15 text-white backdrop-blur hover:bg-white/25',
};

const sizes = {
  default: 'h-10 px-5',
  sm: 'h-8 px-3.5 text-xs',
  lg: 'h-12 px-7 text-base',
  icon: 'size-10',
  'icon-sm': 'size-8',
};

export function button({
  variant = 'default',
  size = 'default',
  className,
}: { variant?: keyof typeof variants; size?: keyof typeof sizes; className?: string } = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

export async function copyText(value: string) {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    // Clipboard access can be blocked; the text stays selectable.
    return false;
  }
}
