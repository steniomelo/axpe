import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Header from 'javascripts/components/header';

// constants
import { ROUTES } from 'javascripts/helpers/routes';

class Layout extends Component {
  getRoutes() {
    const routeComponents = ROUTES.map(({ path, exact, component }, key) => (
      <Route path={path} exact={exact} component={component} key={key} />
    ));

    return routeComponents;
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <div className="wrapper">
            <Switch>{this.getRoutes()}</Switch>
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default Layout;
