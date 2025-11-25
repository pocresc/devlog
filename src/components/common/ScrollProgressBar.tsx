'use client';

import { type ComponentProps } from 'react';
import { type MotionProps, type UseScrollOptions, motion, useScroll } from 'motion/react';
import { cn } from '@/lib';

export type ScrollProgressBarProps = ComponentProps<'div'> & MotionProps & Pick<UseScrollOptions, 'container'>;

export default function ScrollProgressBar({ className, style, ...props }: ScrollProgressBarProps) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={cn('bg-primary fixed inset-x-0 top-12 z-10 h-0.5 origin-left', className)}
      style={{ scaleX: scrollYProgress, ...style }}
      {...props}
    />
  );
}
