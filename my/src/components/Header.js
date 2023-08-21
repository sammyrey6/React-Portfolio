import React from 'react';

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">My Portfolio</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#">About</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
