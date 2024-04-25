'use client';
 
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { 
    name: 'Drinks',
    href: '/menu/coffee'
  },
  {
    name: 'Breakfast',
    href: '/menu/breakfast'
  },
  {
    name: 'Bakery',
    href: '/menu/bakery'
  }
]

export default function MenuLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("flex h-[48px] grow items-center justify-center gap-2 p-3 text-base font-semibold hover:text-green-700 md:flex-none md:justify-start md:p-2 md:px-3",
                            {
                              'border-b-4 md:border-l-4 md:border-b-0 border-green-700': pathname === link.href,
                            },
            )}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}