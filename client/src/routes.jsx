import React from 'react';
import Home from './pages/mainPage';
import About from './pages/About';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const routes = [
  {
    path: "/",
    component: Home,
    propsLayout: {
      title: "Home",
      icon: <PermIdentityIcon fontSize="large" />,
    },
  },
  {
    path: "/Home",
    component: Home,
    propsLayout: {
      title: "Dashboard",
      icon: <PermIdentityIcon fontSize="large" />,
    },
  },
  {
    path: "/about",
    component: About,
    propsLayout: {
      title: "About",
      icon: <PermIdentityIcon fontSize="large" />,
    },
  },
];

export default routes;