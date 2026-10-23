import { useState } from 'react';
import { Check, Copy } from 'apen-icons';
import { cn, copyText } from '../lib/ui';

export function CopyButton({ value, className, label = 'Copy to clipboard' }: { value: string; className?: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    if (await copyText(value)) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? 'Copied' : label}
      className={cn(
        'inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-background/80 text-muted-foreground backdrop-blur transition-colors hover:bg-accent hover:text-foreground',
        className,
      )}
    >
      {copied ? <Check className="size-3.5 text-success" strokeWidth={2.5} /> : <Copy className="size-3.5" />}
    </button>
  );
}
