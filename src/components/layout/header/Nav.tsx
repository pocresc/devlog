import Link from 'next/link';

const NAV_ITEMS = [
  { title: 'Resume', href: '/resume' },
  { title: 'Project', href: '/project' },
  { title: 'Blog', href: '/blog' },
] as const;

export default function Nav() {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-2">
        {NAV_ITEMS.map(({ title, href }) => (
          <li key={href} className="flex items-center justify-center transition-opacity hover:opacity-50">
            <Link href={href} className="px-3 py-2">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
