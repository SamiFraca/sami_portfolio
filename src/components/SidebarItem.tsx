'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

type NavItemProps = {
    href: string;
    text: string;
}



const NavItem = ({ href, text }: NavItemProps) => {
  const [isTransition, setIsTransition] = useState(false);

  const handleClick = () => {
    setIsTransition(true);
    setTimeout(() => {
      setIsTransition(false);
    }, 300); 
    console.log("hola");
  };
  const pathname = usePathname();
  
  const isActive = pathname === href;
  

  return (
    <Link className={isActive ? 'is-active' : 'hover-anim'} href={href} onClick={handleClick}>{text}</Link>
  );
}

export default NavItem;