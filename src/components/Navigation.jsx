import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id === 'hero' ? 'hero' : id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary/80 backdrop-blur-md border-b border-accent/20 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold gradient-text">Rishi</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-text-muted hover:text-accent transition-colors font-medium"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-2"
        >
          <div
            className={`w-6 h-0.5 bg-accent transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <div
            className={`w-6 h-0.5 bg-accent transition-opacity ${isOpen ? 'opacity-0' : ''}`}
          />
          <div
            className={`w-6 h-0.5 bg-accent transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-secondary border-b border-accent/20 md:hidden">
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-text-muted hover:text-accent transition-colors font-medium py-2"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
