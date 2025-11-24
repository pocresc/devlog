import type { ComponentProps } from 'react';
import type { ClassValue } from 'clsx';
import type { Size, ChildrenProps } from '@/types';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib';

export type ContainerProps = Omit<ComponentProps<'div'>, 'children'> & ChildrenProps & VariantProps<typeof containerVariants> & { layout?: boolean };
export type ContainerConfig = { size: Record<Size, ClassValue> };

export default function Container({ size, layout, className, ...props }: ContainerProps) {
  return <div className={cn(containerVariants({ size, className }), { 'py-12 md:py-16': layout })} {...props} />;
}

const containerVariants = cva<ContainerConfig>('mx-auto w-full px-6', {
  variants: {
    size: {
      default: 'max-w-5xl lg:px-3',
      small: 'max-w-3xl md:px-14',
      large: 'max-w-7xl xl:px-20',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});
