import express from 'express';
import Products from '../controllers/productController';
import Acount from '../controllers/accountController';
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
  route.get('/admin/getallacounts', Acount.authenticateJWT, Acount.getAllAccounts );
  route.get('/admin/getallproductbatchs', Acount.authenticateJWT, Acount.getAllProductBatchs );
  route.post('/login', Acount.login);


  return app.use('/', route);
};

module.exports = initWebRoutes;
