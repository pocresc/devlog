import type { ComponentProps, ReactNode } from 'react';
import type { ClassValue } from 'clsx';
import type { Variant } from '@/types';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib';

export type CardProps = ComponentProps<'div'> &
  VariantProps<typeof cardVariants> & {
    cover?: ReactNode;
    title?: string;
    description?: string;
  };

export type CardConfig = {
  variant: Record<Extract<Variant, 'filled'> | 'shadow', ClassValue>;
};

export default function Card({ variant, cover, title, description, className, children, ...props }: CardProps) {
  return (
    <div data-slot="card" className={cn('flex flex-col', cardVariants({ variant, className }))} {...props}>
      {cover && <CardCover>{cover}</CardCover>}

      <CardBody>
        {(title || description) && (
          <CardHeader>
            {title && <CardTitle>{title}</CardTitle>}
            {description && <CardDescription>{description}</CardDescription>}
          </CardHeader>
        )}

        <CardContent>{children}</CardContent>
      </CardBody>
    </div>
  );
}

function CardCover({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-cover" className={cn('relative h-60 w-full', className)} {...props} />;
}

function CardBody({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-body" className={cn('flex flex-col gap-y-3 p-4', className)} {...props} />;
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-header" className={cn('@container/card-header flex flex-col gap-y-2', className)} {...props} />;
}

function CardTitle({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot="card-title" className={cn('font-semibold', className)} {...props} />;
}

function CardDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return <p data-slot="card-description" className={cn('text-foreground-tertiary line-clamp-3 text-xs leading-normal', className)} {...props} />;
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-content" className={cn(className)} {...props} />;
}

const cardVariants = cva<CardConfig>('flex h-full flex-col overflow-hidden rounded-3xl hover:bg-accent transition-colors', {
  variants: {
    variant: {
      filled: 'bg-muted border border-card-border',
      shadow: 'bg-card shadow-card',
    },
  },
  defaultVariants: {
    variant: 'filled',
  },
});
