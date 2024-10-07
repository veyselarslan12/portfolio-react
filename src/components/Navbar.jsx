// src/components/Navbar.jsx
import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFileDownload, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-gray-800 text-white fixed top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        {/* Left Side: Mini Logo */}
        <div className="text-3xl font-bold">VHA</div>

        {/* Hamburger Menu for Mobile Screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* Center: Navigation Links for Desktop */}
        <ul className="hidden lg:flex lg:space-x-8 text-lg">
          <li><a href="#about" className="hover:text-blue-400">About Me</a></li>
          <li><a href="#technologies" className="hover:text-blue-400">Technologies</a></li>
          <li><a href="#portfolio" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>

        {/* Right Side: Social Media Icons and Resume Download */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="https://www.linkedin.com/in/veyselarslan12" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/veyselarslan12" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaGithub size={24} />
          </a>
          <a href="https://instagram.com/veyselarslan0" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaInstagram size={24} />
          </a>
          {/* Divider */}
          <div className="w-px h-6 bg-gray-400 mx-2"></div>
          {/* Resume Download Icon */}
          <a href="/resume.pdf" download className="hover:text-blue-400" title="Download Resume">
            <FaFileDownload size={24} />
          </a>
        </div>
      </div>

      {/* Full-Screen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gray-900 text-white transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out lg:hidden z-40`}
      >
        <div className="flex justify-end p-8">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <FaTimes size={28} />
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-8 text-lg mt-8">
          <li><a href="#about" className="hover:text-blue-400" onClick={toggleMenu}>About Me</a></li>
          <li><a href="#technologies" className="hover:text-blue-400" onClick={toggleMenu}>Technologies</a></li>
          <li><a href="#portfolio" className="hover:text-blue-400" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400" onClick={toggleMenu}>Contact</a></li>
          <div className="flex justify-center space-x-4 mt-8">
            <a href="https://www.linkedin.com/in/veyselarslan12" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/veyselarslan12" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaGithub size={24} />
            </a>
            <a href="https://instagram.com/veyselarslan0" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaInstagram size={24} />
            </a>
          </div>
          <a href="/resume.pdf" download className="hover:text-blue-400 mt-8" title="Download Resume">
            <FaFileDownload size={24} />
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
