import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SVG from 'react-inlinesvg';

// assets
import IconCloudSVG from 'images/icons/icon-cloud';
import IconSearchSVG from 'images/icons/icon-search';
import IconMenuSVG from 'images/icons/icon-menu';
import IconCloseSVG from 'images/icons/icon-close';
import IconHomeSVG from 'images/icons/icon-home';
import IconWhatsappSVG from 'images/icons/icon-whatsapp';
import IconFacebookSVG from 'images/icons/icon-social-facebook';
import IconLinkedinSVG from 'images/icons/icon-social-linkedin';
import IconInstagramSVG from 'images/icons/icon-social-instagram';

// Components
import Search from 'javascripts/components/search';

class Header extends Component {
  state = {
    navActive: false,
    searchActive: true
  };

  btnNavToggle = () => {
    this.setState({
      navActive: !this.state.navActive
    });
  };

  btnSearchToggle = () => {
    this.setState({
      searchActive: !this.state.searchActive
    });
  };

  render() {
    const { navActive } = this.state;
    const { searchActive } = this.state;
    const classes = [ `header` ];

    if (navActive) {
      classes.push(`header--active`);
    }

    if (searchActive) {
      classes.push(`header--search-active`);
    }

    return (
      <header className={classes.join(' ')}>
        <div className="header-container">
          <div className="header-elements">
            <Link to="/" className="header-logo">
              Ir para home
            </Link>

            <button onClick={this.btnSearchToggle}>
              <SVG
                src={IconSearchSVG}
                className="header-elements__icon-search show-mobile"
              />
            </button>

            <button
              type="button"
              className="header-elements__toggle"
              onClick={this.btnNavToggle}
            >
              <SVG
                src={IconMenuSVG}
                className="header-elements__icon-menu show-mobile"
              />

              <SVG
                src={IconCloseSVG}
                className="header-elements__icon-close show-mobile"
              />
            </button>
          </div>

          <div className="header-content">
            <nav className="header-nav">
              <ul className="header-nav-items">
                <li className="header-nav-item">
                  <button
                    onClick={this.btnSearchToggle}
                    className="header-nav-item__btn"
                  >
                    <SVG
                      src={IconSearchSVG}
                      className="header-nav-item__icon"
                    />
                    <span className="header-nav-item__label">
                      Buscar im??vel
                    </span>
                  </button>
                </li>

                <li className="header-nav-item">
                  <NavLink
                    to="/cadastrar"
                    activeClassName="is-active"
                    className="header-nav-item__btn"
                  >
                    <SVG src={IconHomeSVG} className="header-nav-item__icon" />
                    <span className="header-nav-item__label">
                      Cadastrar im??vel
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
                      S?? quero sonhar
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
                    src={IconWhatsappSVG}
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
                      src={IconFacebookSVG}
                      className="header-info-social__icon social-icon"
                    />
                  </Link>
                  <Link
                    to="header-info-social__icon-btn"
                    className="header-info-social__icon-btn"
                  >
                    <SVG
                      src={IconInstagramSVG}
                      className="header-info-social__icon social-icon"
                    />
                  </Link>
                  <Link
                    to="header-info-social__icon-btn"
                    className="header-info-social__icon-btn"
                  >
                    <SVG
                      src={IconLinkedinSVG}
                      className="header-info-social__icon social-icon"
                    />
                  </Link>
                </div>
                <small className="header-info-social__small">
                  CRECI 19111J
                </small>
              </div>
            </footer>
          </div>
        </div>
        <Search active={searchActive} btnSearchToggle={this.btnSearchToggle} />
      </header>
    );
  }
}

export default Header;
