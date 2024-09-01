import React from 'react';
import Mainpage from './pages/Mainpage';
import About from './pages/About';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Acount';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Payment from './pages/Checkout';
import Cart from './pages/Cart';
import returnPolicy from './pages/Policy/returnPolicy';
import paymentPolicy from './pages/Policy/paymentPolicy';
import shippingPolicy from './pages/Policy/shippingPolicy';
import privacyPolicy from './pages/Policy/privacyPolicy';

const isAuthenticated = () => {
  // Check if user is authenticated
  return localStorage.getItem('token') !== null;
};

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
    path: "/account",
    component: Account,
    protected: true,
    isAuthenticated,
    propsLayout: {
      title: "Account",
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
    path: "/productdetail/:id",
    component: ProductDetail,
    propsLayout: {
      title: "ProductDetail",
      icon: <PermIdentityIcon fontSize="large" />,
    },
  },
  {
    path: "/checkout",
    component: Checkout,
    propsLayout: {
      title: "Checkout",
      icon: <PermIdentityIcon fontSize="large" />,
    },
  },
  {
    path: "/payment",
    component: Payment,
    propsLayout: {
      title: "Payment",
      icon: <PermIdentityIcon fontSize="large" />,
    },
  },
  {
    path: "/cart",
    component: Cart,
    propsLayout: {
      title: "Cart",
      icon: <PermIdentityIcon fontSize="large" />,
    },
  },
  {
    path: "/return-policy",
    component: returnPolicy,
    propsLayout: {
      title: "returnPolicy",
      icon: <PermIdentityIcon fontSize="large" />,
    },
  },
  {
    path: "/shipping-policy",
    component: shippingPolicy,
    propsLayout: {
      title: "shippingPolicy",
      icon: <PermIdentityIcon fontSize="large" />,
    },
  },
  {
    path: "/privacy-policy",
    component: privacyPolicy,
    propsLayout: {
      title: "privacyPolicy",
      icon: <PermIdentityIcon fontSize="large" />,
    },
  },
  {
    path: "/payment-policy",
    component: paymentPolicy,
    propsLayout: {
      title: "paymentPolicy",
      icon: <PermIdentityIcon fontSize="large" />,
    },
  },
];

export default routes;
