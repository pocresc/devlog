import { FaEnvelope, FaGithub, FaLinkedin, FaSquareInstagram } from 'react-icons/fa6';

const CONTACT_ITEMS = [
  {
    href: 'https://github.com/pocresc',
    icon: <FaGithub />,
  },
  {
    href: 'https://www.linkedin.com/in/pocresc',
    icon: <FaLinkedin />,
  },
  {
    href: 'https://www.instagram.com/pocresc',
    icon: <FaSquareInstagram />,
  },
  {
    href: 'mailto:pocresc@gmail.com',
    icon: <FaEnvelope />,
  },
] as const;

export default function Contacts() {
  return (
    <ul className="flex flex-wrap items-center gap-0.5 [&_svg]:size-5">
      {CONTACT_ITEMS.map(({ href, icon }) => (
        <li key={href} className="transition-opacity hover:opacity-50">
          <a href={href} target="_blank" rel="noreferrer" className="flex items-center justify-center p-2">
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
