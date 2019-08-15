import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Flickity from 'flickity-fade';

// assets
import homeFeaturedMosaicImage1 from 'images/tmp/home-featuredmosaic-1.png';
import homeFeaturedRealtyImageMobile from 'images/tmp/home-featuredrealtyMobile.png';

class HomeFeaturedMosaic extends Component {
  componentDidMount() {
    this.homeFeaturedMosaic = new Flickity(this.refs.homeFeaturedMosaic, {
      pageDots: false,
      adaptiveHeight: true,
      selectedAttraction: 0.2,
      friction: 0.8,
      draggable: false
    });

    this.homeFeaturedMosaicImages = new Flickity(
      this.refs.homeFeaturedMosaicImages,
      {
        pageDots: false,
        adaptiveHeight: true,
        selectedAttraction: 0.2,
        friction: 0.8
      }
    );
  }

  render() {
    return (
      <div className="home-slider home-slider--white home-slider--inverted">
        <div className="home-slider-items" ref="homeFeaturedMosaic">
          <Link to="#" className="home-slider-item">
            <div className="home-slider-item__content">
              <div className="home-slider-item__text">
                <h1 className="home-slider-item__title">
                  Espaço dinâmico e bem localizado
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

            <div
              className="home-slider-item__images show-mobile"
              ref="homeFeaturedMosaicImages"
            >
              <img
                src={homeFeaturedRealtyImageMobile}
                alt=""
                className="home-slider-item__image "
              />
              <img
                src={homeFeaturedRealtyImageMobile}
                alt=""
                className="home-slider-item__image"
              />
            </div>

            <div className="mosaic-text show-mobile">
              <h3>Quarto com varanda, cozinha industrial</h3>
            </div>

            <div className="home-slider-item__images home-slider-item__images--mosaic hide-mobile">
              <div className="mosaic-row">
                <div className="mosaic-row--left mosaic-text">
                  <h3>Quarto com varanda, cozinha industrial</h3>
                </div>
                <img
                  src={homeFeaturedMosaicImage1}
                  alt=""
                  className="home-slider-item__image mosaic-row--right"
                />
              </div>

              <div className="mosaic-row">
                <img
                  src={homeFeaturedMosaicImage1}
                  alt=""
                  className="home-slider-item__image mosaic-row--left"
                />
                <img
                  src={homeFeaturedMosaicImage1}
                  alt=""
                  className="home-slider-item__image mosaic-row--right"
                />
              </div>
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
            <div className="home-slider-item__images">
              <img
                src={homeFeaturedMosaicImage1}
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
        </div>
      </div>
    );
  }
}

export default HomeFeaturedMosaic;
