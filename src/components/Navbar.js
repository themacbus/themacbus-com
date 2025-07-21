import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
  const dropdownRef = useRef(null);

  const toggleDarkMode = () => {
    const newDark = !dark;
    setDark(newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newDark);
  };

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
  }, [dark]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const location = useLocation();
  useEffect(() => {
    closeMenu();
    setDropdownOpen(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-gray-800 dark:bg-gray-900 text-white sticky top-0 z-50 shadow-md transition duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-yellow-400 transition">
          The Transporter
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center relative">
          <div ref={dropdownRef} className="relative">
            <button
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center focus:outline-none hover:text-yellow-400 transition"
            >
              MAC Bus Services <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div
              className={`absolute bg-gray-700 dark:bg-gray-800 mt-2 rounded shadow-lg transform transition-all duration-200 ease-out origin-top ${
                dropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <Link
                to="/routes"
                className="block px-4 py-2 hover:bg-yellow-500 hover:text-gray-900 transition"
              >
                View Routes
              </Link>
              <Link
                to="/invest"
                className="block px-4 py-2 hover:bg-yellow-500 hover:text-gray-900 transition"
              >
                Invest in Mobility
              </Link>
              <Link
                to="/community"
                className="block px-4 py-2 hover:bg-yellow-500 hover:text-gray-900 transition"
              >
                Our Future
              </Link>
              <Link
                to="/sponsor"
                className="block px-4 py-2 hover:bg-yellow-500 hover:text-gray-900 transition"
              >
                Partner With Us
              </Link>
              <Link
                to="/shuttle-pricing"
                className="block px-4 py-2 hover:bg-yellow-500 hover:text-gray-900 transition"
              >
                Shuttle Pricing
              </Link>
            </div>
          </div>

          <button
            onClick={toggleDarkMode}
            className="hover:text-yellow-400 transition focus:outline-none"
            title="Toggle dark mode"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden transition-transform focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-gray-800 dark:bg-gray-900 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 pb-4 pt-2 flex flex-col space-y-3 text-white">
          <Link to="/routes" className="hover:text-yellow-400" onClick={closeMenu}>
            View Routes
          </Link>
          <Link to="/invest" className="hover:text-yellow-400" onClick={closeMenu}>
            Invest in Mobility
          </Link>
          <Link to="/community" className="hover:text-yellow-400" onClick={closeMenu}>
            Our Future
          </Link>
          <Link to="/sponsor" className="hover:text-yellow-400" onClick={closeMenu}>
            Partner With Us
          </Link>
          <Link to="/shuttle-pricing" className="hover:text-yellow-400" onClick={closeMenu}>
            Shuttle Pricing
          </Link>
          <button
            onClick={() => {
              toggleDarkMode();
              closeMenu();
            }}
            className="mt-2 inline-flex items-center hover:text-yellow-400 focus:outline-none"
          >
            {dark ? (
              <>
                <Sun size={18} className="mr-2" />
                Light Mode
              </>
            ) : (
              <>
                <Moon size={18} className="mr-2" />
                Dark Mode
              </>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
