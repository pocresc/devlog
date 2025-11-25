import type { ComponentProps, ReactNode } from 'react';
import type { ClassValue } from 'clsx';
import type { AsChildProps, Shape, Size, Variant } from '@/types';
import { type VariantProps, cva } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> &
  AsChildProps & {
    block?: boolean;
    icon?: ReactNode;
  };

export type ButtonConfig = {
  variant: Record<Variant | 'ghost' | 'link', ClassValue>;
  size: Record<Size | 'icon' | 'icon-small' | 'icon-large', ClassValue>;
  shape: Record<Shape, ClassValue>;
};

export default function Button({ variant, size, shape, asChild = false, block = false, icon, className, children, ...props }: ButtonProps) {
  const Component = asChild ? Slot : 'button';

  return (
    <Component data-slot="button" className={cn(buttonVariants({ variant, size, shape, className }), { 'w-full': block })} {...props}>
      {icon}
      {children}
    </Component>
  );
}

const buttonVariants = cva<ButtonConfig>(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        filled: 'bg-muted hover:bg-accent hover:text-accent-foreground',
        outlined: 'bg-background border border-border-secondary shadow-xs hover:bg-accent hover:text-accent-foreground',
        ghost: 'bg-transparent hover:bg-accent hover:text-accent-foreground',
        destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20',
        link: 'bg-transparent text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-8 px-4',
        small: 'h-6 rounded-md gap-1.5 px-3',
        large: 'h-9 rounded-md px-6',
        icon: 'size-8',
        'icon-small': 'size-6',
        'icon-large': 'size-9',
      },
      shape: {
        square: 'rounded-md',
        circle: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      shape: 'square',
    },
  },
);
