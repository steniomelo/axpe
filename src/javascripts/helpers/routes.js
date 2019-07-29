import Home from 'javascripts/pages/home';
import Contact from 'javascripts/pages/contact';

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
  }
];
