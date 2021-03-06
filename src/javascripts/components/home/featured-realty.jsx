import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Flickity from 'flickity-fade';

// assets
import homeFeaturedRealtyImage from 'images/tmp/home-featuredrealty.png';
import homeFeaturedRealtyImageMobile from 'images/tmp/home-featuredrealtyMobile.png';

class HomeFeaturedRealty extends Component {
  componentDidMount() {
    this.homeFeaturedRealty = new Flickity(this.refs.homeFeaturedRealty, {
      pageDots: false,
      adaptiveHeight: true,
      selectedAttraction: 0.2,
      friction: 0.8,
      draggable: false
    });
  }

  render() {
    return (
      <div className="home-featured home-featured--white">
        <div className="home-featured-items" ref="homeFeaturedRealty">
          <Link to="#" className="home-featured-item">
            <div className="home-featured-item__content">
              <div className="home-featured-item__text">
                <h1 className="home-featured-item__title">
                  Ambientes espaçoso e com cara de casa
                </h1>
                <strong className="home-featured-item__subtitle">
                  VILA MADALENA
                </strong>
                <p className="home-featured-item__description">
                  Apartamento, 90 m² <br />
                  Venda: R$ 1.120.000 <br />
                  Aluguel: R$ 5.200 <br />
                  <br />
                  Ref AX3715
                </p>

                <button className="home-featured-item__btn btn">
                  Saiba mais
                </button>
              </div>
            </div>
            <div className="home-featured-item__images">
              <div
                style={{
                  backgroundImage: 'url(' + homeFeaturedRealtyImage + ')'
                }}
                className="home-featured-item__image hide-mobile"
              />
              <div
                style={{
                  backgroundImage: 'url(' + homeFeaturedRealtyImageMobile + ')'
                }}
                alt=""
                className="home-featured-item__image show-mobile"
              />
            </div>
          </Link>
          <Link to="#" className="home-featured-item">
            <div className="home-featured-item__content">
              <div className="home-featured-item__text">
                <h1 className="home-featured-item__title">
                  Ambientes espaçoso e com cara de casa
                </h1>
                <strong className="home-featured-item__subtitle">
                  VILA MADALENA
                </strong>
                <p className="home-featured-item__description">
                  Apartamento, 90 m² <br />
                  Venda: R$ 1.120.000 <br />
                  Aluguel: R$ 5.200 <br />
                  <br />
                  Ref AX3715
                </p>

                <button className="home-featured-item__btn btn">
                  Saiba mais
                </button>
              </div>
            </div>
            <div className="home-featured-item__images">
              <div
                style={{
                  backgroundImage: 'url(' + homeFeaturedRealtyImage + ')'
                }}
                className="home-featured-item__image hide-mobile"
              />
              <div
                style={{
                  backgroundImage: 'url(' + homeFeaturedRealtyImageMobile + ')'
                }}
                className="home-featured-item__image show-mobile"
              />
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default HomeFeaturedRealty;
