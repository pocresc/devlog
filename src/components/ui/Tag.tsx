import { cn } from '@/lib';
import type { ComponentProps } from 'react';

export type TagProps = ComponentProps<'span'>;

export default function Tag({ className, ...props }: TagProps) {
  return <span data-slot="tag" className={cn('bg-primary text-primary-foreground h-5 rounded-sm px-1.5 leading-5', className)} {...props} />;
}
