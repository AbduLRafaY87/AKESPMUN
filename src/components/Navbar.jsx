import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import logo from '../assets/images/logo-nobg.png';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0); // Track scroll position

  // Update scroll position when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate background opacity based on scrollY
  const opacity = Math.min(0.5 + scrollY / 25, 0.9); // Starts at 0.3 and becomes fully opaque at scrollY = 25
  const shadowOpacity = Math.min(scrollY / 10, 1); // Shadow starts appearing after 100px scroll
  const blurIntensity = Math.min(0.3 + scrollY / 1, 10); // Blur intensity increases as scroll increases (up to 10px)

  // Calculate scale based on scrollY (default size is 1.05, scales down as the user scrolls)
  const scale = Math.max(1.05 - scrollY / 400, 1); // Starts at a size of 1.05 and shrinks as the user scrolls

  return (
    <nav
      className="fixed w-full top-0 z-50 transition-all duration-100 border-b-2 border-[#C0A880]" // Added border-b and border color
      style={{
        backgroundColor: `rgba(31, 61, 43, ${opacity})`, // Dynamic background color with minimum opacity of 0.3
        boxShadow: `0 5px 50px rgba(0, 0, 0, ${shadowOpacity * 0.5})`, // Dynamic shadow
        transform: `scale(${1})`, // Apply scale transform based on scroll
        backdropFilter: `blur(${blurIntensity}px)`, // Apply blur effect based on scroll
      }}
    >
      <div className="container mx-auto py-3 px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-28"
            onError={(e) => e.target.style.display = 'none'}
          />
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-2 text-sm font-medium">
          {['/', '/committees', '/registrations', '/team', '/about', '/contact'].map((path, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `text-white px-2 py-1 rounded-md transition duration-300 ease-in-out ${
                    isActive ? 'bg-[#C0A880]' : 'hover:bg-[#C0A880]'
                  }`
                }
              >
                {path === '/' ? 'Home' :
                 path === '/committees' ? 'Committees' :
                 path === '/registrations' ? 'Registrations' :
                 path === '/team' ? 'Team' :
                 path === '/about' ? 'About AKESPMUN' : 'Contact Us'}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!isMenuOpen)} className="text-white text-2xl">
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-[#1F3D2B] text-white py-4 space-y-4 px-6">
          {['/', '/committees', '/registrations', '/about', '/contact'].map((path, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `block text-lg py-2 rounded-md transition duration-300 ease-in-out ${
                    isActive ? 'bg-blue-500' : 'hover:bg-blue-400'
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {path === '/' ? 'Home' :
                 path === '/committees' ? 'Committees' :
                 path === '/registrations' ? 'Registrations' :
                 path === '/about' ? 'About AKESPMUN' : 'Contact Us'}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
