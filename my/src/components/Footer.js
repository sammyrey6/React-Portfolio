import React from 'react';
import '../components/styles/Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="razer-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-contact">
            <h3>Contact Information</h3>
            <p>
              11509 Potter St. <br />
              Norwalk, California 90650 <br />
              Phone: (562)-739-6527 <br />
              Email: samuelrey.carag@gmail.com
            </p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Portfolio</a></li>
              <li><a href="https://docs.google.com/document/d/1ydHIUAwL_xP0_1RKhHhY84zUZyRq74EvnRPjOcGPuzU/edit?usp=sharing">Resume</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-legal">
          <p>&copy; {new Date().getFullYear()} Samuel Rey Carag. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
