import express from 'express';
import Products from '../controllers/productController';
import Acount from '../controllers/accountController';
import Cart from '../controllers/cartController'
import Ship from '../controllers/shipController'
import Order from '../controllers/orderController'
let route = express.Router();

let initWebRoutes = (app) => {

  route.get('/', (req, res) => {
    res.json({ message: 'mainpage' });
  });
  app.get('/check-token', Acount.authenticateJWT, (req, res) => {
    res.json({ isAuthenticated: true });
  });
  route.get('/userinfor', Acount.authenticateJWT, Acount.getUserInfor);
  route.get('/productdetail/:productID', Products.getProductDetail);
  route.get('/allproducts', Products.getAllProducts);
  route.post('/login', Acount.login);
  route.post('/register', Acount.register);
  route.post('/cart/add', Acount.authenticateJWT, Cart.addToCart);
  route.get('/cart', Acount.authenticateJWT, Cart.getCart); 
  route.delete('/remove/:productID',Acount.authenticateJWT, Cart.removeFromCart);
  route.put('/cart/update', Acount.authenticateJWT,Cart.updateCartQuantity);
  route.post('/calculate-shipping', Ship.calculateShipping);
  route.post('/calculate-shippingdate', Ship.calculateShipDate);
  route.post('/order', Acount.authenticateJWT, Order.createOrder);
  route.get('/getorder/:orderID', Order.getOrder)
  return app.use('/', route);
};

module.exports = initWebRoutes;
