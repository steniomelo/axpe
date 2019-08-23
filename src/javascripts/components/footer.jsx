import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content limit-grid">
            <h2 className="footer-title">
              <span className="footer-title--green">Sem tempo</span> para buscar
              e visitar <span className="footer-title--orange">imóveis?</span>
            </h2>

            <div className="footer-description">
              <p className="footer-text">
                Conte o que está buscando e vamos encontrar o imóvel dos seus
                sonhos
              </p>
              <Link className="footer-button btn">Entre em contato</Link>
            </div>
          </div>
        </div>

        <div className="footer-contact show-mobile">
          <p className="footer-contact-title">Fale com a gente</p>
          <a href="tel:1130743600" className="footer-contact-phone">
            (11) 3074-3600
          </a>
          <p className="footer-contact-creci">Creci 19111J</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
