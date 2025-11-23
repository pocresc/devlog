import type { ComponentProps } from 'react';
import type { ClassValue } from 'clsx';
import type { Size, ChildrenProps } from '@/types';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib';

export type ContainerProps = Omit<ComponentProps<'div'>, 'children'> & ChildrenProps & VariantProps<typeof containerVariants>;
export type ContainerConfig = { size: Record<Size, ClassValue> };

export default function Container({ size, className, ...props }: ContainerProps) {
  return <div className={cn(containerVariants({ size, className }))} {...props} />;
}

const containerVariants = cva<ContainerConfig>('mx-auto w-full', {
  variants: {
    size: {
      default: 'max-w-5xl',
      small: 'max-w-3xl',
      large: 'max-w-7xl',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});
