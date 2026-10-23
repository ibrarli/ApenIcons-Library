import { Moon, Sun } from 'apen-icons';
import { button } from '../lib/ui';

export function ThemeToggle() {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {
      // Storage can be unavailable in private windows.
    }
  };

  return (
    <button type="button" onClick={toggle} aria-label="Toggle theme" className={button({ variant: 'ghost', size: 'icon' })}>
      <Sun className="hidden dark:block" />
      <Moon className="block dark:hidden" />
    </button>
  );
}
