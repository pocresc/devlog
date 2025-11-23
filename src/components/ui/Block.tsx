import type { ClassValue } from 'clsx';
import type { Size, AsChildProps, ChildrenWithComponentProps, Variant } from '@/types';
import { type VariantProps, cva } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib';

export type BlockProps = ChildrenWithComponentProps<'div'> & AsChildProps & VariantProps<typeof blockVariants>;
export type BlockConfig = {
  variant: Record<Exclude<Variant, 'ghost'>, ClassValue>;
  size: Record<Size, ClassValue>;
};

export default function Block({ asChild, size, className, ...props }: BlockProps) {
  const Component = asChild ? Slot : 'div';
  return <Component className={cn(blockVariants({ size, className }))} {...props} />;
}

const blockVariants = cva<BlockConfig>('rounded-xl border', {
  variants: {
    variant: {
      filled: 'bg-muted text-muted-foreground border-border-secondary dark:border-none',
      outlined: 'bg-transparent text-foreground border-border',
    },
    size: {
      default: 'p-6',
      small: 'p-4',
      large: 'p-8',
    },
  },
  defaultVariants: {
    variant: 'filled',
    size: 'default',
  },
});
