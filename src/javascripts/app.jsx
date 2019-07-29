import React from 'react';
import { hydrate, render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import 'whatwg-fetch';
import 'babel-polyfill';
import 'promise-polyfill/src/polyfill';
import 'styles/style';

import Layout from 'javascripts/layouts/main';

const el = document.getElementById('main');

const App = () => {
  return (
    <AppContainer>
      <Layout />
    </AppContainer>
  );
};

if (el.hasChildNodes()) {
  hydrate(<App />, el);
} else {
  render(<App />, el);
}

if (module.hot) {
  module.hot.accept('./layouts/main', () => {
    render();
  });
}
