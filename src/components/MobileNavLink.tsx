'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MobileNavLinkProps {
  href: string;
  name: string;
  onClose: () => void;
}

export default function MobileNavLink({ href, name, onClose }: MobileNavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        pathname === href
          ? 'text-[#FFFFFF] bg-[#000000]'
          : 'text-[#CECECE] hover:text-[#FFFFFF] hover:bg-[#000000]'
      }`}
      onClick={onClose}
    >
      {name}
    </Link>
  );
}