import React, { useState } from 'react';
import DropdownCoins from "./DropdownCoins";

const Navbar = (props) => {
  let { coinData } = props;

  const toggleMode = e => {
    e.preventDefault();
    props.setDarkMode(!props.darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>

      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={props.darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
