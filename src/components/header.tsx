'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Logo from '@/app/logo.svg'
import Image from 'next/image';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, AnimatePresence } from 'framer-motion';

type NavItemProps = {
  href: string;
  text: string;
  index: number;
};

const NavItem = ({ href, text, index }: NavItemProps) => {
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
            ? 'text-white bg-white/20 backdrop-blur-sm border border-white/20' 
            : 'text-white/80 hover:text-white hover:bg-white/10'
          }
        `}
      >
        {text}
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
  return (
    <motion.ul 
      className="flex flex-row items-center gap-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {HeaderItems.map((item, index) => (
        <li key={index}>
          <NavItem {...item} index={index} />
        </li>
      ))}
    </motion.ul>
  );
};

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll effect
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
      {/* Glassmorphism background */}
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
        {/* Logo */}
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

        {/* Navigation */}
        <HeaderItemList />

      </nav>

      {/* Subtle light effect on hover */}
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
