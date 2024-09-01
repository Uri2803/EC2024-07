import express from 'express';
import Products from '../controllers/productController';
import Acount from '../controllers/accountController';
import Order from '../controllers/orderController';
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
  route.put('/updateorders',Acount.authenticateJWT, Order.setOrder);
  route.delete('/remove/order/:orderID',Acount.authenticateJWT, Order.removeOrder);
  route.get('/allorders',Acount.authenticateJWT, Order.getAllOrders);
  route.post('/login', Acount.login);

  return app.use('/', route);
};

module.exports = initWebRoutes;

