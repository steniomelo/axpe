import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <p>Header here</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
