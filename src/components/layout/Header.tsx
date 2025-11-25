import Link from 'next/link';
import { Container } from '@/components';
import { FaMusic } from 'react-icons/fa6';

const HEADER_TITLE = 'poco a poco cresc.';
const NAV_ITEMS = [
  { title: 'About', href: '/about' },
  { title: 'Project', href: '/project' },
  { title: 'Blog', href: '/blog' },
] as const;

export default function Header() {
  return (
    <header className="bg-background sticky top-0 left-0 z-10 flex h-12 w-full items-center">
      <Container className="px-3">
        <div className="flex items-center justify-between">
          <Link href="/" aria-label={HEADER_TITLE} className="flex min-w-0 shrink-0 items-center gap-4 font-mono text-xl font-medium">
            <div className="bg-secondary flex size-8 items-center justify-center rounded-sm">
              <FaMusic className="fill-secondary-foreground" />
            </div>

            <h1 className="hidden tracking-tight md:block">{HEADER_TITLE}</h1>
          </Link>

          <nav className="min-w-0">
            <ul className="flex min-w-0 items-center gap-2 md:gap-4">
              {NAV_ITEMS.map(({ title, href }) => (
                <li key={href} className="flex min-w-0 items-center justify-center transition-opacity hover:opacity-50">
                  <Link href={href} className="truncate p-2">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
