import React, { Component } from 'react';
import Flickity from 'flickity-fade';

// assets
import homeSliderImage from 'images/tmp/home-slider.png';

class HomeSlider extends Component {
  componentDidMount() {
    this.flickity = new Flickity(this.refs.itemsCarousel, {
      pageDots: false
    });

    setTimeout(this.flickity.reloadCells(), 1000);
  }

  render() {
    return (
      <div className="home-slider">
        <div className="home-slider-items" ref="itemsCarousel">
          <div className="home-slider-item">
            <div className="home-slider-item__content">
              <div className="home-slider-item__text">
                <h1 className="home-slider-item__title">
                  Ambientes integrados e espaçosos
                </h1>
                <p className="home-slider-item__description">
                  Decoração e móveis seguem as últimas tendências de design.
                </p>
              </div>
            </div>

            <img
              src={homeSliderImage}
              alt=""
              className="home-slider-item__image"
            />
          </div>
          <div className="home-slider-item">
            <div className="home-slider-item__content">
              <div className="home-slider-item__text">
                <h1 className="home-slider-item__title">
                  Ambientes integrados e espaçosos
                </h1>
                <p className="home-slider-item__description">
                  Decoração e móveis seguem as últimas tendências de design.
                </p>
              </div>
            </div>
            <img
              src={homeSliderImage}
              alt=""
              className="home-slider-item__image"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeSlider;
