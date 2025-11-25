import type { ComponentProps, ReactNode } from 'react';

// Options
export type Variant = 'primary' | 'secondary' | 'filled' | 'outlined' | 'destructive';
export type Size = 'default' | 'small' | 'large';
export type Shape = 'square' | 'circle';

// Props
export type ChildrenProps = {
  children: ReactNode;
};

export type ChildrenWithComponentProps<T extends keyof HTMLElementTagNameMap> = Omit<ComponentProps<T>, 'children'> & ChildrenProps;

export type AsChildProps = {
  asChild?: boolean;
};
