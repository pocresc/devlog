import Link from 'next/link';
import Nav from './Nav';
import { Container } from '@/components';

export default function Header() {
  return (
    <header className="sticky top-0 left-0 z-10 flex h-12 w-full items-center md:h-14">
      <Container className="px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="p-1 font-mono text-xl font-light md:text-2xl">
            chresendo.
          </Link>

          <Nav />
        </div>
      </Container>
    </header>
  );
}
