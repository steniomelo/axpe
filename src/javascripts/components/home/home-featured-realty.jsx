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
      <div className="home-slider home-slider--white">
        <div className="home-slider-items" ref="homeFeaturedRealty">
          <Link to="#" className="home-slider-item">
            <div className="home-slider-item__content">
              <div className="home-slider-item__text">
                <h1 className="home-slider-item__title">
                  Ambientes espaçoso e com cara de casa
                </h1>
                <strong className="home-slider-item__subtitle">
                  VILA MADALENA
                </strong>
                <p className="home-slider-item__description">
                  Apartamento, 90 m² <br />
                  Venda: R$ 1.120.000 <br />
                  Aluguel: R$ 5.200 <br />
                  <br />
                  Ref AX3715
                </p>

                <button className="home-slider-item__btn btn btn-orange">
                  Saiba mais
                </button>
              </div>
            </div>
            <div className="home-slider-item__images">
              <img
                src={homeFeaturedRealtyImage}
                alt=""
                className="home-slider-item__image hide-mobile"
              />
              <img
                src={homeFeaturedRealtyImageMobile}
                alt=""
                className="home-slider-item__image show-mobile"
              />
            </div>
          </Link>
          <Link to="#" className="home-slider-item">
            <div className="home-slider-item__content">
              <div className="home-slider-item__text">
                <h1 className="home-slider-item__title">
                  Ambientes espaçoso e com cara de casa
                </h1>
                <strong className="home-slider-item__subtitle">
                  VILA MADALENA
                </strong>
                <p className="home-slider-item__description">
                  Apartamento, 90 m² <br />
                  Venda: R$ 1.120.000 <br />
                  Aluguel: R$ 5.200 <br />
                  <br />
                  Ref AX3715
                </p>

                <button className="home-slider-item__btn btn btn-orange">
                  Saiba mais
                </button>
              </div>
            </div>

            <img
              src={homeFeaturedRealtyImage}
              alt=""
              className="home-slider-item__image hide-mobile"
            />
            <img
              src={homeFeaturedRealtyImageMobile}
              alt=""
              className="home-slider-item__image show-mobile"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default HomeFeaturedRealty;
