import express from 'express';
import Products from '../controllers/productController';

let route = express.Router();

let initWebRoutes = (app) => {

  route.get('/', (req, res) => {
    res.json({ message: 'mainpage' });
  });

  route.get('/products', Products.getAllProducts);

  return app.use('/', route);
};

module.exports = initWebRoutes;
