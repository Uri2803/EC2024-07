import express from 'express';
import Products from '../controllers/productController';
import Acount from '../controllers/accountController';
let route = express.Router();

let initWebRoutes = (app) => {

  route.get('/', (req, res) => {
    res.json({ message: 'mainpage' });
  });

  route.get('/products', Products.getAllProducts);
  route.post('/login', Acount.login);

  return app.use('/', route);
};

module.exports = initWebRoutes;
