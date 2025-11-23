import Link from 'next/link';
import Nav from './Nav';
import { Container } from '@/components';

export default function Header() {
  return (
    <header className="sticky top-0 left-0 z-10 flex h-12 w-full items-center">
      <Container py="none">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-mono text-xl font-light">
            chresendo.
          </Link>

          <Nav />
        </div>
      </Container>
    </header>
  );
}
