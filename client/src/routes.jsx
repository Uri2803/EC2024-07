import React from 'react';
import Mainpage from './pages/Mainpage';
import About from './pages/About';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Login from './pages/Login';
const routes = [
  {
    path: "/",
    component: Mainpage,
    propsLayout: {
      title: "Home",
      icon: <PermIdentityIcon fontSize="large" />,
    },
  },
  {
    path: "/Home",
    component: Mainpage,
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
  {
    path: "/login",
    component: Login,
    propsLayout: {
      title: "Login",
      icon: <PermIdentityIcon fontSize="large" />,
    },
  },
];

export default routes;