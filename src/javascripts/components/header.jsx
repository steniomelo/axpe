import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SVG from 'react-inlinesvg';

// assets
import IconCloudSVG from 'images/icons/icon-cloud';

class Header extends Component {
  state = {
    navActive: false
  };

  btnNavToggle = () => {
    this.setState({
      navActive: !this.state.navActive
    });
  };

  render() {
    const { navActive } = this.state;
    const classes = [ `header` ];

    if (navActive) {
      classes.push(`header--active`);
    }

    return (
      <header className={classes.join(' ')}>
        <div className="header-elements">
          <Link to="/" className="header-logo">
            Ir para home
          </Link>

          <SVG
            src="src/images/icons/icon-search.svg"
            className="header-elements__icon-search show-mobile"
          />

          <button
            type="button"
            className="header-elements__toggle"
            onClick={this.btnNavToggle}
          >
            <SVG
              src="src/images/icons/icon-menu.svg"
              className="header-elements__icon-menu show-mobile"
            />
          </button>
        </div>

        <div className="header-content">
          <nav className="header-nav">
            <ul className="header-nav-items">
              <li className="header-nav-item">
                <NavLink
                  to="/"
                  activeClassName="is-active"
                  className="header-nav-item__btn"
                >
                  <SVG
                    src="src/images/icons/icon-search.svg"
                    className="header-nav-item__icon"
                  />
                  <span className="header-nav-item__label">Buscar imóvel</span>
                </NavLink>
              </li>

              <li className="header-nav-item">
                <NavLink
                  to="/cadastrar"
                  activeClassName="is-active"
                  className="header-nav-item__btn"
                >
                  <SVG
                    src="src/images/icons/icon-home.svg"
                    className="header-nav-item__icon"
                  />
                  <span className="header-nav-item__label">
                    Cadastrar imóvel
                  </span>
                </NavLink>
              </li>

              <li className="header-nav-item">
                <NavLink
                  to="/cadastrar"
                  activeClassName="is-active"
                  className="header-nav-item__btn"
                >
                  <SVG src={IconCloudSVG} className="header-nav-item__icon" />
                  <span className="header-nav-item__label">
                    Só quero sonhar
                  </span>
                </NavLink>
              </li>
            </ul>

            <ul className="header-nav-items">
              <li className="header-nav-item">
                <NavLink
                  to="/sobre"
                  activeClassName="is-active"
                  className="header-nav-item__btn"
                >
                  Sobre a AXPE
                </NavLink>
              </li>
              <li className="header-nav-item">
                <NavLink
                  to="/contato"
                  activeClassName="is-active"
                  className="header-nav-item__btn"
                >
                  Fale com a gente
                </NavLink>
              </li>
              <li className="header-nav-item">
                <NavLink
                  to="/contato"
                  activeClassName="is-active"
                  className="header-nav-item__btn"
                >
                  Meu perfil
                </NavLink>
              </li>
              <li className="header-nav-item">
                <NavLink
                  to="/contato"
                  activeClassName="is-active"
                  className="header-nav-item__btn"
                >
                  Meus favoritos
                </NavLink>
              </li>
            </ul>

            <ul className="header-nav-items header-nav--language">
              <li className="header-nav-item">
                <NavLink
                  to="/contato"
                  activeClassName="is-active"
                  className="header-nav-item__btn"
                >
                  EN
                </NavLink>
              </li>
              <li className="header-nav-item">
                <NavLink
                  to="/contato"
                  activeClassName="is-active"
                  className="header-nav-item__btn"
                >
                  ES
                </NavLink>
              </li>
            </ul>
          </nav>

          <footer className="header-info">
            <div className="header-info-whatsapp">
              <Link to="/contato" className="header-info-whatsapp__btn">
                <SVG
                  src="src/images/icons/icon-whatsapp.svg"
                  className="header-info-whatsapp__icon"
                />
                <span className="header-info-whatsapp__label">
                  Fale conosco <br className="show-mobile" /> pelo Whatsapp
                </span>
              </Link>
            </div>

            <Link to="" className="header-info-phone">
              <span className="header-info-phone__title show-mobile">
                Fale com a gente
              </span>
              <strong className="header-info-phone__number">
                (11) 3074-3600
              </strong>
            </Link>

            <div className="header-info-social">
              <small className="header-info-social__title">
                <strong>Receba nossas</strong> <br /> novidades
              </small>
              <div className="header-info-social__icons social-icons">
                <Link
                  to="header-info-social__icon-btn"
                  className="header-info-social__icon-btn"
                >
                  <SVG
                    src="src/images/icons/icon-social-facebook.svg"
                    className="header-info-social__icon social-icon"
                  />
                </Link>
                <Link
                  to="header-info-social__icon-btn"
                  className="header-info-social__icon-btn"
                >
                  <SVG
                    src="src/images/icons/icon-social-instagram.svg"
                    className="header-info-social__icon social-icon"
                  />
                </Link>
                <Link
                  to="header-info-social__icon-btn"
                  className="header-info-social__icon-btn"
                >
                  <SVG
                    src="src/images/icons/icon-social-linkedin.svg"
                    className="header-info-social__icon social-icon"
                  />
                </Link>
              </div>
              <small className="header-info-social__small">CRECI 19111J</small>
            </div>
          </footer>
        </div>
      </header>
    );
  }
}

export default Header;
