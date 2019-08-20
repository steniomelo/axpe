import React, { Component } from 'react';
import Flickity from 'flickity-fade';

// assets
import homeBannerImage from 'images/tmp/home-banner.png';
import homeBannerImageMobile from 'images/tmp/home-bannerMobile.png';

class HomeBanner extends Component {
  componentDidMount() {
    this.homeBanner = new Flickity(this.refs.homeBanner, {
      pageDots: false,
      prevNextButtons: false
    });
  }

  render() {
    return (
      <div className="home-banner">
        <div className="home-banner-items" ref="homeBanner">
          <div className="home-banner-item">
            <img
              src={homeBannerImage}
              alt=""
              className="home-banner-item__image hide-mobile"
            />

            <img
              src={homeBannerImageMobile}
              alt=""
              className="home-banner-item__image show-mobile"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeBanner;
