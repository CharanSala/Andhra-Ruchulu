import React from 'react';
import { Flame, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t-8 border-spicy-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
          
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-spicy-500 p-1.5 rounded-full">
                <Flame className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white font-outfit">
                Andhra <span className="text-spicy-500">Ruchulu</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 font-medium">
              Your ultimate dining destination for fiery, authentic flavors of Andhra Pradesh and Telangana.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Our Menu</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="#" className="hover:text-spicy-400 transition-colors">Special Biryanis</a></li>
              <li><a href="#" className="hover:text-spicy-400 transition-colors">Veg Meals & Thalis</a></li>
              <li><a href="#" className="hover:text-spicy-400 transition-colors">Signature Curries</a></li>
              <li><a href="#" className="hover:text-spicy-400 transition-colors">Traditional Sweets</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="#" className="hover:text-spicy-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-spicy-400 transition-colors">Catering Services</a></li>
              <li><a href="#" className="hover:text-spicy-400 transition-colors">Book a Table</a></li>
              <li><a href="#" className="hover:text-spicy-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Newsletter</h4>
            <p className="text-sm mb-4 font-medium">Get the best food recommendations directly to your inbox.</p>
            <form className="flex">
              <input type="email" placeholder="Email address" className="bg-slate-900 border border-slate-700 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:border-spicy-500" />
              <button className="bg-spicy-600 hover:bg-spicy-500 text-white px-4 py-2 rounded-r-lg font-bold transition-colors">
                Subscribe
              </button>
            </form>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} Andhra Ruchulu Guide. All rights reserved.</p>
          <p className="flex items-center gap-1">Made with <span className="text-red-500">🔥</span> for food lovers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
