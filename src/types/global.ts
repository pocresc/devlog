import type { ComponentProps, ReactNode } from 'react';

// Options
export type Size = 'small' | 'default' | 'large';
export type Variant = 'filled' | 'outlined' | 'ghost';

// Props
export type ChildrenProps = {
  children: ReactNode;
};

export type ChildrenWithComponentProps<T extends keyof HTMLElementTagNameMap> = Omit<ComponentProps<T>, 'children'> & ChildrenProps;

export type AsChildProps = {
  asChild?: boolean;
};
