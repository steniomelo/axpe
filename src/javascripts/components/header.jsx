import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SVG from 'react-inlinesvg';

// assets
import IconFacebookSVG from 'images/icons/facebook';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <p>Header here</p>
        <ul className="header-nav">
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/contato" exact activeClassName="active">
              Contato
            </NavLink>
          </li>
        </ul>
        <a href="https://www.facebook.com" className="header__facebook">
          <SVG src={IconFacebookSVG} />
        </a>
      </header>
    );
  }
}

export default Header;
