'use client';

import type { IconType } from 'react-icons';
import { useTheme } from 'next-themes';
import { useIsMounted } from '@/hooks';
import { motion } from 'motion/react';
import { Button } from '../ui';
import { MdDarkMode, MdLightMode, MdOutlineDesktopWindows } from 'react-icons/md';
import { cn } from '@/lib';

export type Theme = 'system' | 'light' | 'dark';

export default function ThemeButton() {
  const mounted = useIsMounted();
  const { themes, theme: currentTheme, setTheme } = useTheme();

  const icons: Record<Theme, IconType> = {
    system: MdOutlineDesktopWindows,
    light: MdLightMode,
    dark: MdDarkMode,
  };

  return (
    <div className={cn('bg-background border-border relative isolate flex h-8 items-center gap-x-1 rounded-full border px-1')}>
      {themes.map(theme => {
        const isActive = mounted && theme === currentTheme;
        const Icon = icons[theme as Theme];

        return (
          <Button key={theme} aria-label={theme} variant="ghost" size="icon-small" shape="circle" className="relative" onClick={() => setTheme(theme)}>
            {isActive && (
              <motion.div
                layoutId="activeTheme"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="bg-secondary absolute inset-0 rounded-full"
              />
            )}

            <Icon className={cn('relative z-10 transition-[color]', isActive ? 'text-primary' : 'text-muted-foreground')} />
          </Button>
        );
      })}
    </div>
  );
}
