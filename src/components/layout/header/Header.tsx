import Link from 'next/link';
import Nav from './Nav';
import { FaMusic } from 'react-icons/fa6';
import { Container } from '@/components';

const HEADER_TITLE = 'poco a poco cresc.';

export default function Header() {
  return (
    <header className="sticky top-0 left-0 z-10 flex h-12 w-full items-center">
      <Container className="px-3">
        <div className="flex items-center justify-between">
          <Link href="/" aria-label={HEADER_TITLE} className="flex min-w-0 shrink-0 items-center gap-4 font-mono text-xl font-medium">
            <div className="bg-secondary flex size-8 items-center justify-center rounded-sm">
              <FaMusic className="fill-secondary-foreground" />
            </div>

            <h1 className="hidden tracking-tight md:block">{HEADER_TITLE}</h1>
          </Link>

          <Nav />
        </div>
      </Container>
    </header>
  );
}
