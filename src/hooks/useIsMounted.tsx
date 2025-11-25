'use client';

import { useState } from 'react';
import { useIsomorphicLayoutEffect } from 'motion/react';

export default function useIsMounted() {
  const [mounted, setMounted] = useState<boolean>(false);

  useIsomorphicLayoutEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
