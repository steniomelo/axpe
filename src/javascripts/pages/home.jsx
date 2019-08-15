import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import HomeSlider from 'javascripts/components/home/home-slider';
import HomeBanner from 'javascripts/components/home/home-banner';
import HomeFeaturedRealty from '../components/home/home-featured-realty';
import HomeFeaturedMosaic from '../components/home/home-featured-mosaic';
import CardList from '../components/card-list';
import CardListHorz from '../components/card-list-horz';

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

      <section className="section">
        <div className="limit-grid">
          <div className="section-item">
            <header className="section-item__header">
              <div className="section-item__header-title">
                Imóveis que você viu
              </div>
            </header>
            <div className="section-item__content">
              <CardListHorz />
            </div>
          </div>
          <div className="section-item">
            <header className="section-item__header">
              <div className="section-item__header-title">
                Indicados para você
              </div>
            </header>
            <div className="section-item__content">
              <CardList />
            </div>
          </div>
        </div>
      </section>
    </div>
  </Fragment>
);

export default withRouter(Home);
