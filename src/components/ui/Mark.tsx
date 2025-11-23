import type { ComponentProps } from 'react';
import type { ClassValue } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib';

export type MarkProps = ComponentProps<'mark'> & VariantProps<typeof markVariants>;
export type MarkConfig = { variant: Record<'default' | 'primary' | 'secondary', ClassValue> };

export default function Mark({ variant, className, ...props }: MarkProps) {
  return <mark className={cn(markVariants({ variant, className }))} {...props} />;
}

const markVariants = cva<MarkConfig>('px-1 py-0.5 rounded-sm', {
  variants: {
    variant: {
      default: 'bg-[#ffe58f] text-[marktext]',
      primary: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});
