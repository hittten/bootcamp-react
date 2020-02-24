import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

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
        <i className="material-icons" onClick={() => this.state.navOpen ? this.openNav(false) : this.openNav(true)}>
          {this.state.navOpen ? 'close' : 'menu'}
        </i>
        <nav>
          <ul>
            <li onClick={() => this.openNav(false)}>
              <Link to="/">
                <i className="material-icons">
                  view_list
                </i>
                Products
              </Link>
            </li>
            <li onClick={() => this.openNav(false)}>
              <Link to="/shopping-car">
                <i className="material-icons">
                  shopping_cart
                </i>
                Shopping Car
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          Bootcamp Ecommerce
        </div>
        <Link to="/shopping-car">
          <i className="material-icons" onClick={() => this.openNav(false)}>
            shopping_cart
          </i>
        </Link>
      </header>
    );
  }

  openNav(value) {
    this.setState({navOpen: value});
  }
}

export default Header;
