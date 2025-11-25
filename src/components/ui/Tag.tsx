import type { ComponentProps } from 'react';
import { cn } from '@/lib';

export type TagProps = ComponentProps<'span'>;

export default function Tag({ className, ...props }: TagProps) {
  return <span data-slot="tag" className={cn('bg-muted text-primary border-border h-5 rounded-sm border px-1.5 text-xs leading-5', className)} {...props} />;
}
