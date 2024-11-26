import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0077b6] text-white py-6">
      <div className="container mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-lg font-semibold">Sandile Energies</h2>
            <p className="text-sm">Redefining Energy Efficiency</p>
          </div>
          <div className="flex space-x-6 text-sm flex-wrap justify-center md:justify-start">
            {/* Only keeping the essential navigation links */}
            <Link to="/" className="hover:text-[#00b4d8]">Home</Link>
            <Link to="/profile" className="hover:text-[#00b4d8]">Profile</Link>
            <Link to="/help" className="hover:text-[#00b4d8]">Help</Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 border-t border-[#0096c7] pt-4 text-center md:text-left">
          <p className="text-sm">&copy; {new Date().getFullYear()} Sandile Energies. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0 justify-center md:justify-start">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00b4d8]" aria-label="Follow Sandile Energies on Twitter">X</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00b4d8]" aria-label="Follow Sandile Energies on Facebook">Facebook</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00b4d8]" aria-label="Follow Sandile Energies on LinkedIn">LinkedIn</a>
            <a href="https://telegram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00b4d8]" aria-label="Follow Sandile Energies on LinkedIn">Telegram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;