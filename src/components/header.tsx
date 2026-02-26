'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Logo from '@/app/logo.svg'
import Image from 'next/image';
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

const HeaderItems = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/blog", text: "Blog" },
  { href: "mailto:fracasami@gmail.com", text: "Contact" },
];

export const HeaderItemList = () => {
  return (
    <ul className="flex flex-row justify-center items-center gap-4 w-full ">
      {HeaderItems.map((item, index) => (
        <li key={index}>
          <NavItem {...item} />
        </li>
      ))}
    </ul>
  );
};

export const Header = () => {
  return (
    <nav className="sticky top-0 md:top-5 bg-[#282c35] py-4 h-fit z-30 flex flex-row  items-center px-4">
      <Image src={Logo} alt="Logo" width={100} height={35} className='shrink-0' />
      <HeaderItemList />
    </nav>
  );
};
