import React, { Component } from 'react';
import Flickity from 'flickity-fade';

// assets
import homeSliderImage from 'images/tmp/home-slider.png';

class HomeSlider extends Component {
  componentDidMount() {
    this.homeSlider = new Flickity(this.refs.homeSlider, {
      pageDots: false,
      adaptiveHeight: true
      // autoPlay: 1500,
      // wrapAround: true
    });
  }

  render() {
    return (
      <div className="home-featured">
        <div className="home-featured-items" ref="homeSlider">
          <div className="home-featured-item">
            <div className="home-featured-item__content">
              <div className="home-featured-item__text">
                <h1 className="home-featured-item__title">
                  Ambientes integrados e espaçosos
                </h1>
                <p className="home-featured-item__description">
                  Decoração e móveis seguem as últimas tendências de design.
                </p>
              </div>
            </div>

            <div
              style={{ backgroundImage: 'url(' + homeSliderImage + ')' }}
              alt=""
              className="home-featured-item__image"
            />
          </div>
          <div className="home-featured-item">
            <div className="home-featured-item__content">
              <div className="home-featured-item__text">
                <h1 className="home-featured-item__title">
                  Ambientes integrados e espaçosos
                </h1>
                <p className="home-featured-item__description">
                  Decoração e móveis seguem as últimas tendências de design.
                </p>
              </div>
            </div>
            <div
              style={{ backgroundImage: 'url(' + homeSliderImage + ')' }}
              alt=""
              className="home-featured-item__image"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeSlider;
