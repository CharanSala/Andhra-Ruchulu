import React, { useState, useEffect } from 'react';
import { Menu, X, Flame } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-spicy-500 p-2 rounded-full shadow-lg shadow-spicy-500/30">
            <Flame className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-slate-900 font-outfit">
            Andhra <span className="text-spicy-600">Ruchulu</span>
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-sm font-bold text-slate-700 hover:text-spicy-600 transition-colors">Home</a>
          <a href="#dishes" className="text-sm font-bold text-slate-700 hover:text-spicy-600 transition-colors">Menu</a>
          <a href="#explore" className="px-6 py-2.5 bg-spicy-600 text-white text-sm font-bold rounded-full shadow-lg shadow-spicy-500/30 hover:bg-spicy-500 transition-all duration-300 transform hover:-translate-y-0.5">
            Reserve Table
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-slate-900 hover:text-spicy-600">
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-100 flex flex-col py-6 px-6 space-y-6">
          <a href="#home" className="text-base font-bold text-slate-800 hover:text-spicy-600" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#dishes" className="text-base font-bold text-slate-800 hover:text-spicy-600" onClick={() => setMenuOpen(false)}>Menu</a>
          <a href="#explore" className="w-full text-center px-6 py-3 bg-spicy-600 text-white text-base font-bold rounded-full shadow-lg" onClick={() => setMenuOpen(false)}>
            Reserve Table
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
