import React, { useEffect, useRef } from 'react';
import M from 'materialize-css';
import './styles/Navigation.css';
import samuelImage from'../images/2.png'
import Dropdown from './DropdownContent/Dropdown'; // Import the Dropdown component

const Navigation = () => {
    const dropdownRef = useRef(null);
  // Initialize dropdown menus when the component mounts
  useEffect(() => {
    // Initialize all dropdown triggers
    const elems = document.querySelectorAll('.dropdown-trigger');
    if (elems.length > 0) {
      M.Dropdown.init(elems, { constrainWidth: false });
    }
        // Add a click event listener to close the dropdown when clicked outside of it
        document.addEventListener('click', handleDocumentClick);

        return () => {
          // Cleanup by removing the click event listener when the component unmounts
          document.removeEventListener('click', handleDocumentClick);
        };
  }, []);

  const handleDocumentClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // Clicked outside the dropdown, close it
      M.Dropdown.getInstance(dropdownRef.current).close();
    }
  };

  return (
    <div className="nav-container">
      <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            {/* Links for specific projects */}
            <li><a href="https://github.com/Vlad1slav86/Pear-Music">Pear Music</a></li>
            <li><a href="https://github.com/dustinii/BDSM">BDSM</a></li>
            <li><a href="https://github.com/dustinii/HOMEZ">HOMEZ</a></li>

            {/* Dropdown link */}
            <li>
              <a className="dropdown-trigger" href="#!" data-target="dropdown-menu">
                More Projects
                <Dropdown />
              </a>
            </li>
          </ul>
          
          <img src={samuelImage} alt="Your Image" />
          
        <ul id="nav-mobile" className="right ">
          <li><a href="/about">About</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
   

        </div>
      </nav>
    </div>
  );
};

export default Navigation;