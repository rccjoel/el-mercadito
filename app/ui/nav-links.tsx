'use client';
 
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/', current: true },
  { name: 'Menu', href: '/menu/coffee', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
]

export default function NavLinks() {
  const pathname = usePathname();
  
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'hover:text-green-600',
              'rounded-md px-3 py-2 text-sm font-semibold',
              {
                'text-green-600': pathname === link.href,
              },
            )}
            aria-current={link.current ? 'page' : undefined}
          >
            <p className="hidden sm:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}