import type { ChildrenProps } from '@/types';

type SectionTitleProps = ChildrenProps;

export default function SectionTitle({ children }: SectionTitleProps) {
  return <h3 className="text-primary mb-5 text-2xl font-semibold">{children}</h3>;
}
