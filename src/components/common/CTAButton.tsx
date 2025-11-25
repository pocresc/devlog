import Link from 'next/link';
import { Button } from '../ui';
import { ComponentProps } from 'react';

export type CTAButtonProps = ComponentProps<typeof Link>;

export default function CTAButton({ href, ...props }: CTAButtonProps) {
  return (
    <Button asChild variant="link">
      <Link href={href} {...props} />
    </Button>
  );
}
