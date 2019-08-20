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
      <div className="home-featured home-featured--white home-featured--inverted">
        <div className="home-featured-items" ref="homeFeaturedMosaic">
          <Link to="#" className="home-featured-item">
            <div className="home-featured-item__content">
              <div className="home-featured-item__text">
                <h1 className="home-featured-item__title">
                  Espaço dinâmico e bem localizado
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

            <div className="mosaic-text show-mobile">
              <h3>Quarto com varanda, cozinha industrial</h3>
            </div>

            <div
              className="home-featured-item__images show-mobile"
              ref="homeFeaturedMosaicImages"
            >
              <div
                style={{
                  backgroundImage: 'url(' + homeFeaturedRealtyImageMobile + ')'
                }}
                alt=""
                className="home-featured-item__image "
              />
              <div
                style={{
                  backgroundImage: 'url(' + homeFeaturedRealtyImageMobile + ')'
                }}
                alt=""
                className="home-featured-item__image "
              />
            </div>

            <div className="home-featured-item__images home-featured-item__images--mosaic hide-mobile">
              <div className="mosaic-row">
                <div className="mosaic-row--left mosaic-text">
                  <h3>Quarto com varanda, cozinha industrial</h3>
                </div>
                <div
                  style={{
                    backgroundImage: 'url(' + homeFeaturedMosaicImage1 + ')'
                  }}
                  className="home-featured-item__image mosaic-row--right"
                />
              </div>

              <div className="mosaic-row">
                <div
                  style={{
                    backgroundImage: 'url(' + homeFeaturedMosaicImage1 + ')'
                  }}
                  className="home-featured-item__image mosaic-row--left"
                />
                <div
                  style={{
                    backgroundImage: 'url(' + homeFeaturedMosaicImage1 + ')'
                  }}
                  className="home-featured-item__image mosaic-row--right"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default HomeFeaturedMosaic;
