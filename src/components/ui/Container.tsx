import type { ComponentProps } from 'react';
import type { ClassValue } from 'clsx';
import type { Size, ChildrenProps } from '@/types';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib';

export type ContainerProps = Omit<ComponentProps<'div'>, 'children'> & ChildrenProps & VariantProps<typeof containerVariants>;
export type ContainerConfig = { size: Record<Size, ClassValue> } & Record<'px' | 'py', Record<Size | 'none', ClassValue>>;

export default function Container({ size, px, py, className, ...props }: ContainerProps) {
  return <div className={cn(containerVariants({ size, px, py, className }))} {...props} />;
}

const containerVariants = cva<ContainerConfig>('mx-auto w-full', {
  variants: {
    size: {
      default: 'max-w-5xl',
      small: 'max-w-3xl',
      large: 'max-w-7xl',
    },
    px: {
      none: 'px-0',
      default: 'px-6 lg:px-3',
      small: 'px-6 md:px-14',
      large: 'px-6 xl:px-20',
    },
    py: {
      none: 'py-0',
      default: 'py-12 lg:py-20',
      small: 'py-12 md:py-16',
      large: 'py-12 xl:py-24',
    },
  },
  defaultVariants: {
    size: 'default',
    px: 'default',
    py: 'default',
  },
});
