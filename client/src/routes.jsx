import React from 'react';
import Home from './pages/Home';
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
];

export default routes;