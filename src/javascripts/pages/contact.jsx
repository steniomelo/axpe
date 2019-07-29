import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

const Contact = () => (
  <Fragment>
    <Helmet>
      <title>Contato</title>
      <meta name="description" content="description here" />
      <meta name="keywords" content="word, here" />
      <meta property="og:title" content="Contato" />
      <meta property="og:image" content="" />
      <meta name="twitter:title" content="Contato" />
      <meta name="twitter:image" content="" />
    </Helmet>
    <div className="page page--contact">
      <p>ContactPage</p>
    </div>
  </Fragment>
);

export default withRouter(Contact);
