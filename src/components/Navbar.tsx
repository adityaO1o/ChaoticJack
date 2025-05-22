import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 20);

      if (currentY > lastScrollY && currentY > 50) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5',
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <span className="text-2xl font-bold font-syne">Chaotic Jack</span>
        </a>

        {/* Centered Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-8">
          {[
            { href: '/', label: 'HOME' },
            { href: '/marketing-solutions', label: 'MARKETING SOLUTIONS' },
            { href: '/who-we-are', label: 'WHO WE ARE' },
            { href: '/work', label: 'WORK' },
            { href: '/contact', label: 'CONTACT' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-black hover:text-chaotic-blue font-kanit transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-chaotic-blue hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* LET'S TALK Button */}
        <a href="/contact" className="hidden md:block">
          <Button
            variant="outline"
            className="border border-black text-black hover:bg-black hover:text-white transition-colors rounded-none font-kanit"
          >
            LET'S TALK
          </Button>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-black"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {[
              { href: '/', label: 'HOME' },
              { href: '/marketing-solutions', label: 'MARKETING SOLUTIONS' },
              { href: '/who-we-are', label: 'WHO WE ARE' },
              { href: '/work', label: 'WORK' },
              { href: '/contact', label: 'CONTACT' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                className="text-black hover:text-chaotic-blue font-kanit py-2 border-b border-gray-100"
              >
                {link.label}
              </a>
            ))}

            <a href="/contact" onClick={toggleMenu} className="inline-block">
              <Button
                variant="outline"
                className="w-full border border-black text-black hover:bg-black hover:text-white transition-colors rounded-none font-kanit"
              >
                LET'S TALK
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
