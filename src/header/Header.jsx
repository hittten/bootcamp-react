import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header wrapper">
      <i className="material-icons">
        menu
      </i>
      <div>
        Bootcamp Ecommerce
      </div>
      <i className="material-icons">
        shopping_cart
      </i>
    </header>
  );
}

export default Header;
