
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'O Turnieju', href: '#about' },
    { name: 'Konkurencje', href: '#competitions' },
    { name: 'Sponsorzy', href: '#sponsors' },
    { name: 'Organizatorzy', href: '#organizers' },
    { name: 'Kontakt', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-tech-gradient rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-sm">RC</span>
            </div>
            <span className="text-xl font-bold text-gradient">RoboChampions</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-2">
            <ThemeToggle />
            <Button className="bg-tech-gradient hover:opacity-90 text-background font-semibold">
              Rejestracja
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <nav className="flex flex-col space-y-4 p-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link text-sm font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-tech-gradient hover:opacity-90 text-background font-semibold mt-4">
                Rejestracja
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
