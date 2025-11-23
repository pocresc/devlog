import type { ComponentProps } from 'react';
import type { ClassValue } from 'clsx';
import type { Size } from '@/types';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib';

export type BrandmarkProps = Omit<ComponentProps<'span'>, 'children'> & VariantProps<typeof brandmarkVariants>;
export type BrandmarkConfig = { size: Record<Size, ClassValue> };

export default function Brandmark({ size, className, ...props }: BrandmarkProps) {
  return (
    <span className={cn(brandmarkVariants({ size, className }))} {...props}>
      @chresendo
    </span>
  );
}

const brandmarkVariants = cva<BrandmarkConfig>('inline-block text-primary', {
  variants: {
    size: {
      default: 'text-sm',
      small: 'text-xs',
      large: 'text-base',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});
