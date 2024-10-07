// src/components/Navbar.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFileDownload } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-8 bg-gray-800 text-white fixed top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Mini Logo */}
        <div className="text-3xl font-bold">VHA</div>

        {/* Center: Navigation Links */}
        <ul className="flex space-x-8 text-lg">
          {/* Removed Home Button */}
          <li><a href="#about" className="hover:text-blue-400">About Me</a></li>
          <li><a href="#technologies" className="hover:text-blue-400">Technologies</a></li>
          <li><a href="#portfolio" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>

        {/* Right Side: Social Media Icons and Resume Download */}
        <div className="flex items-center space-x-4">
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
          <a
            href="/resume.pdf" // Link to your resume file in the public folder
            download
            className="hover:text-blue-400"
            title="Download Resume"
          >
            <FaFileDownload size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
