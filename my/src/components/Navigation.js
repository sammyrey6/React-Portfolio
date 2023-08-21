import React, { useEffect } from 'react';
import M from 'materialize-css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Dropdown from './DropdownContent/Dropdown'; // Import the Dropdown component

const Navigation = () => {
  // Initialize dropdown menus when the component mounts
  useEffect(() => {
    // Initialize all dropdown triggers
    const elems = document.querySelectorAll('.dropdown-trigger');
    if (elems.length > 0) {
      M.Dropdown.init(elems, { constrainWidth: false });
    }
  }, []);

  return (
    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {/* Links for specific projects */}
          <li><a href="https://github.com/Vlad1slav86/Pear-Music">Pear Music</a></li>
          <li><a href="https://github.com/dustinii/BDSM">BDSM</a></li>
          <li><a href="https://github.com/dustinii/HOMEZ">HOMEZ</a></li>

          {/* Dropdown link */}
          <li>
            <a className="dropdown-trigger" href="#!" data-target="dropdown-menu">
              More Projects
            </a>
          </li>
        </ul>
        {/* Include the Dropdown component */}
        <Dropdown />
      </div>
    </nav>
  );
};

export default Navigation;
