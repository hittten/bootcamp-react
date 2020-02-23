import React from 'react';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navOpen: false,
    }
  }

  render() {
    return (
      <header className={`wrapper ${this.state.navOpen ? 'nav-open' : ''}`}>
        <i className="material-icons" onClick={() => this.state.navOpen ? this.openNav(false): this.openNav(true)}>
          {this.state.navOpen ? 'close' : 'menu'}
        </i>
        <nav>
          <ul>
            <li onClick={() => this.openNav(false)}>
              <i class="material-icons">
                view_list
              </i>
              Products
            </li>
            <li onClick={() => this.openNav(false)}>
              <i class="material-icons">
                shopping_cart
            </i>
              Car
            </li>
          </ul>
        </nav>
        <div>
          Bootcamp Ecommerce
        </div>
        <i className="material-icons" onClick={() => this.openNav(false)}>
          shopping_cart
        </i>
      </header>
    );
  }

  openNav(value) {
    this.setState({ navOpen: value });
  }
}

export default Header;
