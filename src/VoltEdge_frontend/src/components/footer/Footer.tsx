import React from 'react';
import './Footer.css';

function Footer() {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="copyright">
        <p> By using Sandile Energies, you agree to our Terms of Service and Trust Policy.</p>
        <p>All Rights Reserved.</p>
        <p>&#169; {currentYear} Sandile Energies Ltd.</p>
      </div>
    </div>
  );
}

export default Footer;
