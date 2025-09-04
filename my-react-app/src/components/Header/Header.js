import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">A.L.I.G.N</div>
      <nav>
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
         
        </ul>
      </nav>
    </header>
  );
};

export default Header;