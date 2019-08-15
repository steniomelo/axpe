import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      <div className="home-slider">
        <div className="home-slider-items" ref="homeSlider">
          <Link to="#" className="home-slider-item">
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
          </Link>
          <Link to="#" className="home-slider-item">
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
          </Link>
        </div>
      </div>
    );
  }
}

export default HomeSlider;
