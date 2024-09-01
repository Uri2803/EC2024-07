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
import Order from './pages/Order';
import PaymentSuccess from './pages/PaymentSuccess';

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
    path: "/order",
    component: Order,
    propsLayout: {
      title: "Order",
      icon: <PermIdentityIcon fontSize="large" />,
    },
  },
  {
    path: "/ordersuccess/:id",
    component: PaymentSuccess,
    propsLayout: {
      title: "PaymentSuccess",
      icon: <PermIdentityIcon fontSize="large" />,
    },
  },
];

export default routes;
