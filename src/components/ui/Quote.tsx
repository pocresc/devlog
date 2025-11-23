import type { ComponentProps } from 'react';
import type { ClassValue } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib';

export type QuoteProps = ComponentProps<'blockquote'> & VariantProps<typeof quoteVariants>;
export type QuoteConfig = { variant: Record<'primary' | 'theme', ClassValue> };

export default function Quote({ variant, className, children, ...props }: QuoteProps) {
  return (
    <blockquote className={cn(quoteVariants({ variant, className }))} {...props}>
      <div className="px-5">{children}</div>
    </blockquote>
  );
}

const quoteVariants = cva<QuoteConfig>('relative before:absolute before:top-0 before:left-0 before:h-full before:w-1 before:rounded', {
  variants: {
    variant: {
      primary: 'before:bg-primary',
      theme: 'before:bg-foreground',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});
