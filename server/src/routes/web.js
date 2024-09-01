import express from 'express';
import Products from '../controllers/productController';
import Acount from '../controllers/accountController';
import Order from '../controllers/orderController';
import Griller from '../controllers/grillerController';
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
  route.get('/getallorders',Acount.authenticateJWT, Order.getAllOrders);
  route.post('/login', Acount.login);
  route.get('/getallgrillers',Acount.authenticateJWT, Griller.getAllGrillers);
  route.put('/update/griller',Acount.authenticateJWT, Griller.setGriller);
  route.delete('/remove/griller/:grillerID',Acount.authenticateJWT, Griller.removeGriller);

  return app.use('/', route);
};

module.exports = initWebRoutes;

