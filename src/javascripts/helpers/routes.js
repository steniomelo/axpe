import Home from 'javascripts/pages/home';
import Contact from 'javascripts/pages/contact';
import About from 'javascripts/pages/about';

export const ROUTES = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/contato',
    component: Contact,
    exact: true
  },
  {
    path: '/sobre',
    component: About,
    exact: true
  }
];
