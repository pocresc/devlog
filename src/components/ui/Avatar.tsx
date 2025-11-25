import type { ComponentProps } from 'react';
import type { ClassValue } from 'clsx';
import type { ClassNameProps, Shape } from '@/types';
import { type VariantProps, cva } from 'class-variance-authority';
import Image from 'next/image';
import { cn } from '@/lib';

export type AvatarProps = ClassNameProps & ComponentProps<typeof Image> & VariantProps<typeof avatarVariants> & { size?: number };
export type AvatarConfig = { shape: Record<Shape, ClassValue> };

export default function Avatar({ shape, src, alt, size = 32, ...props }: AvatarProps) {
  return (
    <div className={cn(avatarVariants({ shape }))} style={{ width: size, height: size }}>
      <Image src={src} alt={alt} fill sizes={`${size}px`} {...props} />
    </div>
  );
}

const avatarVariants = cva<AvatarConfig>('bg-muted relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full', {
  variants: {
    shape: {
      square: 'rounded-2xl',
      circle: 'rounded-full',
    },
  },
  defaultVariants: {
    shape: 'circle',
  },
});
