import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import HomeSlider from 'javascripts/components/home/featured';
import HomeBanner from 'javascripts/components/home/banner';
import HomeFeaturedRealty from 'javascripts/components/home/featured-realty';
import HomeFeaturedMosaic from 'javascripts/components/home/featured-mosaic';
import BuildingList from 'javascripts/components/building-list';

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

      <section className="home-buildings">
        <div className="limit-grid">
          <BuildingList horz title="Imóveis que você viu" />
          <BuildingList title="Indicados para você" />
        </div>
      </section>
    </div>
  </Fragment>
);

export default withRouter(Home);
