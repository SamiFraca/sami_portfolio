'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Logo from '@/app/logo.svg'
import Image from 'next/image';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

type NavItemProps = {
  href: string;
  text: string;
  index: number;
  enableAnimation: boolean;
};

const NavItem = ({ href, text, index, enableAnimation }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <Link 
        href={href} 
        className={`
          relative px-6 py-2 text-sm font-medium transition-all duration-300 rounded-lg
          ${isActive 
            ? 'text-white' 
            : 'hover:text-white'
          }
        `}
      >
        <span className="relative z-10">{text}</span>
        {isActive && enableAnimation && (
          <motion.div
            layoutId="activeTab"
            initial={false}
            className="absolute inset-0 bg-white/20  rounded-full border  border-white/20"
            transition={{ 
              type: "spring", 
              stiffness: 500, 
              damping: 30,
              mass: 0.8
            }}
          />
        )}
        {isActive && !enableAnimation && (
          <div className="absolute inset-0 bg-white/20  rounded-full border border-white/20" />
        )}
      </Link>
    </motion.div>
  );
};

const HeaderItems = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/blog", text: "Blog" },
  { href: "mailto:fracasami@gmail.com", text: "Contact" },
];

export const HeaderItemList = () => {
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [enableAnimation, setEnableAnimation] = useState(false);

  useEffect(() => {
    if (pathname !== prevPathname) {
      setEnableAnimation(false);
      setPrevPathname(pathname);
      
      const timer = setTimeout(() => {
        setEnableAnimation(true);
      }, 100);
      
      return () => clearTimeout(timer);
    } else {
      setEnableAnimation(true);
    }
  }, [pathname, prevPathname]);

  return (
    <motion.ul 
      className="flex flex-row items-center gap-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {HeaderItems.map((item, index) => (
        <li key={item.href}>
          <NavItem {...item} index={index} enableAnimation={enableAnimation} />
        </li>
      ))}
    </motion.ul>
  );
};

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 20);
    });
  }

  return (
    <motion.header
      className={`
        sticky top-0 z-50 w-full transition-all duration-500
        ${isScrolled ? 'py-2' : 'py-6'}
      `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div 
        className={`
          absolute inset-0 backdrop-blur-xl bg-white/5
          border-b border-white/10
          transition-all duration-500
          ${isScrolled ? 'shadow-lg' : ''}
        `}
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
        }}
      />
      
      <nav className="relative flex items-center justify-between px-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <Image 
            src={Logo} 
            alt="Logo" 
            width={120} 
            height={40} 
            className='shrink-0 filter brightness-0 invert'
          />
        </motion.div>

        <LayoutGroup>
          <HeaderItemList />
        </LayoutGroup>
      </nav>

      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.1) 0%, transparent 50%)'
          }}
        />
      </div>
    </motion.header>
  );
};
