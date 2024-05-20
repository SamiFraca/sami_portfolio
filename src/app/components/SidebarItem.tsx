'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItemProps = {
    href: string;
    text: string;
}

const NavItem = ({ href, text }: NavItemProps) => {
  const pathname = usePathname();
  
  const isActive = pathname === href;

  return (
    <Link className={isActive ? 'is-active' : 'hover-anim'} href={href}>{text}</Link>
  );
}

export default NavItem;