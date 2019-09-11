import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__content limit-grid">
            <h2 className="footer__title">
              <span className="footer__title-green">Sem tempo</span> para buscar
              e visitar <span className="footer__title-orange">imóveis?</span>
            </h2>

            <div className="footer__description">
              <p className="footer__text">
                Conte o que está buscando e vamos encontrar o imóvel dos seus
                sonhos
              </p>
              <Link className="footer__button btn">Entre em contato</Link>
            </div>
          </div>
        </div>

        <div className="footer__contact show-mobile">
          <p className="footer__contact-title">Fale com a gente</p>
          <a href="tel:1130743600" className="footer__contact-phone">
            (11) 3074-3600
          </a>
          <p className="footer__contact-creci">Creci 19111J</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
