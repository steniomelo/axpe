import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import HomeSlider from 'javascripts/components/home/home-slider';
import HomeBanner from 'javascripts/components/home/home-banner';
import HomeFeaturedRealty from '../components/home/home-featured-realty';
import HomeFeaturedMosaic from '../components/home/home-featured-mosaic';

const Home = () => (
  <Fragment>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="description here" />
      <meta name="keywords" content="word, here" />
      <meta property="og:title" content="Home" />
      <meta property="og:image" content="" />
      <meta name="twitter:title" content="Home" />
      <meta name="twitter:image" content="" />
    </Helmet>
    <div className="page page--home">
      <HomeSlider />
      <HomeBanner />
      <HomeFeaturedRealty />
      <HomeFeaturedMosaic />
    </div>
  </Fragment>
);

export default withRouter(Home);
