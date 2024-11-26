import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#0077b6] shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Sandile Energies Logo" className="h-10 w-10 mr-3" />
          <span className="text-2xl font-bold text-white">Sandile Energies</span>
        </div>
        <div className="hidden md:flex space-x-8 text-lg">
          <Link to="/" className="text-white hover:text-[#00b4d8]">Home</Link>
          <Link to="/energy-usage" className="text-white hover:text-[#00b4d8]">Energy Usage</Link>
          <Link to="/recommendations" className="text-white hover:text-[#00b4d8]">Recommendations</Link>
          <Link to="/settings" className="text-white hover:text-[#00b4d8]">Settings</Link>
          <Link to="/profile" className="text-white hover:text-[#00b4d8]">Profile</Link>
          <Link to="/help" className="text-white hover:text-[#00b4d8]">Help</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0077b6] border-t border-[#0096c7] p-4">
          <div className="flex flex-col space-y-4">
            <Link to="/" onClick={toggleMobileMenu} className="text-white hover:text-[#00b4d8]">Home</Link>
            <Link to="/energy-usage" onClick={toggleMobileMenu} className="text-white hover:text-[#00b4d8]">Energy Usage</Link>
            <Link to="/recommendations" onClick={toggleMobileMenu} className="text-white hover:text-[#00b4d8]">Recommendations</Link>
            <Link to="/settings" onClick={toggleMobileMenu} className="text-white hover:text-[#00b4d8]">Settings</Link>
            <Link to="/profile" onClick={toggleMobileMenu} className="text-white hover:text-[#00b4d8]">Profile</Link>
            <Link to="/help" onClick={toggleMobileMenu} className="text-white hover:text-[#00b4d8]">Help</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
