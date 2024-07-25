import React from 'react';
import Mainpage from './pages/Mainpage';
import About from './pages/About';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Acount';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
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
  {
    path: "/register",
    component: Register,
    propsLayout: {
      title: "Register",
      icon: <PermIdentityIcon fontSize="large" />,
    },
  },
  {
    path: "/acount",
    component: Account,
    propsLayout: {
      title: "Acount",
      icon: <PermIdentityIcon fontSize="large" />,
    },
  },
  {
    path: "/products",
    component: Product,
    propsLayout: {
      title: "Product",
      icon: <PermIdentityIcon fontSize="large" />,
    },
  },
  {
    path: "/productdetail",
    component: ProductDetail,
    propsLayout: {
      title: "ProductDetail",
      icon: <PermIdentityIcon fontSize="large" />,
    },
  },
];

export default routes;