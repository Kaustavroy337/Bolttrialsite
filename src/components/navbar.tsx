import React from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed w-full px-4 sm:px-6 lg:px-8 z-50 top-4">
      <nav className="max-w-7xl mx-auto bg-gray-800/70 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-700/20">
        <div className="px-4 sm:px-6">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Logo />
            </div>
            
            <div className="hidden md:flex space-x-1">
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#work">Our Work</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-gray-300 hover:bg-gray-700/50 transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-2 pb-3 space-y-1 border-t border-gray-700/50 bg-gray-800/80 backdrop-blur-lg rounded-b-2xl">
              <MobileNavLink href="#services">Services</MobileNavLink>
              <MobileNavLink href="#work">Our Work</MobileNavLink>
              <MobileNavLink href="#about">About</MobileNavLink>
              <MobileNavLink href="#contact">Contact</MobileNavLink>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 px-4 py-2 text-sm font-medium transition-colors rounded-xl"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 block px-3 py-2 text-base font-medium rounded-lg transition-colors"
  >
    {children}
  </a>
);