// Header.js
import React from 'react';
import './App.css'

function Header() {
  return (
    <header className="primary-header">
      <div className="wrapper">
        <div className="primary-header__inner">
          <div className="logo">
            <img src="assets/Logo.webp" alt="" />
          </div>
          <nav className="primary-nav">
            <ul role="list">
              <li><a href="#">Why us</a></li>
              <li><a href="#">The founders</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <div className="flex-group" aria-label="social links">
            <a href="#">X</a>
            <a href="#">IG</a>
            <a href="#">YT</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
