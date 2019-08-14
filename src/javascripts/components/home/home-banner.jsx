import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Flickity from 'flickity-fade';

// assets
import homeBannerImage from 'images/tmp/home-banner.png';
import homeBannerImage2x from 'images/tmp/home-banner@2x.png';
import homeBannerImageMobile from 'images/tmp/home-bannerMobile.png';
import homeBannerImageMobile2x from 'images/tmp/home-bannerMobile@2x.png';

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
          <Link to="#" className="home-banner-item">
            <img
              src={homeBannerImage}
              alt=""
              className="home-banner-item__image hide-mobile"
              srcSet={homeBannerImage + ' 1x, ' + homeBannerImage2x + ' 2x'}
            />

            <img
              src={homeBannerImageMobile}
              alt=""
              className="home-banner-item__image show-mobile"
              srcSet={
                homeBannerImageMobile +
                ' 1x, ' +
                homeBannerImageMobile2x +
                ' 2x'
              }
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default HomeBanner;
