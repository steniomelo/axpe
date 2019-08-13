import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import HomeSlider from 'javascripts/components/home/home-slider';

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
    </div>
  </Fragment>
);

export default withRouter(Home);
