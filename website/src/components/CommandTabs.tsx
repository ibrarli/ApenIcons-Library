import { useState } from 'react';
import { cn } from '../lib/ui';
import { CopyButton } from './CopyButton';

const managers = {
  npm: 'npm install',
  pnpm: 'pnpm add',
  yarn: 'yarn add',
  bun: 'bun add',
} as const;

type Manager = keyof typeof managers;

/** The install command for each package manager, styled like the Apen UI docs. */
export function CommandTabs({ className }: { className?: string }) {
  const [manager, setManager] = useState<Manager>('npm');
  const command = `${managers[manager]} apen-icons`;

  return (
    <div className={cn('overflow-hidden rounded-3xl bg-code text-white', className)}>
      <div className="flex gap-1 px-3 pt-3" role="tablist" aria-label="Package manager">
        {(Object.keys(managers) as Manager[]).map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={manager === key}
            onClick={() => setManager(key)}
            className={cn(
              'rounded-full px-3 py-1 text-xs font-semibold transition-colors',
              manager === key ? 'bg-white/15 text-white' : 'text-white/50 hover:text-white',
            )}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-3 py-3 pr-3 pl-5 font-mono text-sm">
        <span aria-hidden="true" className="text-brand-orange">
          $
        </span>
        <code className="scrollbar-soft flex-1 overflow-x-auto whitespace-nowrap">{command}</code>
        <CopyButton value={command} className="bg-white/10 text-white hover:bg-white/20 hover:text-white" />
      </div>
    </div>
  );
}
