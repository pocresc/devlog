import Link from 'next/link';
import { Container, ThemeButton } from '@/components';
import { FaMusic } from 'react-icons/fa6';

const HEADER_TITLE = 'poco a poco cresc.';
const NAV_ITEMS = [
  { title: '이력서', href: '/resume' },
  { title: '프로젝트', href: '/projects' },
  { title: '블로그', href: '/blog' },
] as const;

export default function Header() {
  return (
    <header className="bg-background sticky top-0 left-0 z-10 flex h-12 w-full items-center">
      <Container className="px-3">
        <div className="flex items-center justify-between">
          <Link href="/" aria-label={HEADER_TITLE} className="flex min-w-0 shrink-0 items-center font-mono text-xl">
            <FaMusic className="fill-primary mr-4" />
            <h1 className="hidden tracking-tight md:block">{HEADER_TITLE}</h1>
          </Link>

          <div className="flex min-w-0 items-center gap-x-4 md:gap-x-6">
            <nav className="min-w-0">
              <ul className="flex min-w-0 items-center gap-x-4 md:gap-x-6">
                {NAV_ITEMS.map(({ title, href }) => (
                  <li key={href} className="flex min-w-0 items-center justify-center transition-opacity hover:opacity-50">
                    <Link href={href} className="truncate py-2">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <ThemeButton />
          </div>
        </div>
      </Container>
    </header>
  );
}
