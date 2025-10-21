"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const navLinks = [
  { href: '#home', label: 'Accueil' },
  { href: '#about', label: 'À propos' },
  { href: '#projects', label: 'Projets' },
  { href: '#skills', label: 'Compétences' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled || isMenuOpen
          ? 'bg-background/80 backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="font-headline text-lg font-semibold">
          <span>Boua Josaphat</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-foreground/80 transition-colors hover:text-primary"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Button onClick={toggleMenu} variant="ghost" size="icon">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
       {isMenuOpen && (
        <nav className="md:hidden bg-background/80 backdrop-blur-md">
          <div className="container mx-auto flex flex-col items-center gap-6 py-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
