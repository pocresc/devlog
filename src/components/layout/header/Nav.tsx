import Link from 'next/link';

const NAV_ITEMS = [
  { title: 'About', href: '/about' },
  { title: 'Project', href: '/project' },
  { title: 'Blog', href: '/blog' },
] as const;

export default function Nav() {
  return (
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
  );
}
