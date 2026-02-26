'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

type NavItemProps = {
  href: string;
  text: string;
};

const NavItem = ({ href, text }: NavItemProps) => {
  const [isTransition, setIsTransition] = useState(false);

  const handleClick = () => {
    setIsTransition(true);
    setTimeout(() => {
      setIsTransition(false);
    }, 300);
  };
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link className={isActive ? 'is-active' : 'hover-anim'} href={href} onClick={handleClick}>
      {text}
    </Link>
  );
};

const sidebarItems = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/blog", text: "Blog" },
  { href: "mailto:fracasami@gmail.com", text: "Contact" },
];

export const NavItemList = () => {
  return (
    <ul className="flex md:flex-col flex-row justify-center gap-4">
      {sidebarItems.map((item, index) => (
        <li key={index}>
          <NavItem {...item} />
        </li>
      ))}
    </ul>
  );
};

export const Sidebar = () => {
  return (
    <nav className="sticky top-0 md:top-5 bg-[#282c35] py-4 h-fit z-30">
      <NavItemList />
    </nav>
  );
};
