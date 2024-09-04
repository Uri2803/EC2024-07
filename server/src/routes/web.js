import express from 'express';
import Products from '../controllers/productController';
import Acount from '../controllers/accountController';
import Cart from '../controllers/cartController';
import Ship from '../controllers/shipController';
import Order from '../controllers/orderController';
import VNPAy  from '../controllers/vnpController';
import Griller from '../controllers/grillerController';
import Coupon from '../controllers/CouponController';
import Voucher from '../controllers/voucherController';

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
  route.post('/register', Acount.register);
  route.post('/cart/add', Acount.authenticateJWT, Cart.addToCart);
  route.get('/cart', Acount.authenticateJWT, Cart.getCart); 
  route.delete('/remove/:productID',Acount.authenticateJWT, Cart.removeFromCart);
  route.put('/cart/update', Acount.authenticateJWT,Cart.updateCartQuantity);
  route.post('/calculate-shipping', Ship.calculateShipping);
  route.post('/calculate-shippingdate', Ship.calculateShipDate);
  route.post('/order', Acount.authenticateJWT, Order.createOrder);
  route.get('/getorder/:orderID', Order.getOrder)
  route.get('/orderhistory', Acount.authenticateJWT, Order.getOrderHistory)


  route.post('/create_payment_url', VNPAy.createVNPAy);
  route.post('/querydr',VNPAy.queryVNPAy);

  route.get('/getorder/:orderID', Order.getOrder);
  route.get('/orderhistory', Acount.authenticateJWT, Order.getOrderHistory);
  route.get('/getallgrillers',Acount.authenticateJWT, Griller.getAllGrillers);
  route.put('/update/griller',Acount.authenticateJWT, Griller.setGriller);
  route.delete('/remove/griller/:grillerID',Acount.authenticateJWT, Griller.removeGriller);
  route.post('/add/griller/', Acount.authenticateJWT, Griller.addGriller);

  route.get('/getallcoupons', Coupon.getAllCoupons);
  route.put('/update/coupon',Acount.authenticateJWT, Coupon.setCoupon);
  route.delete('/remove/coupon/:couponID',Acount.authenticateJWT, Coupon.removeCoupon);
  route.post('/add/Coupon/', Acount.authenticateJWT, Coupon.addCoupon);

  route.post('/validateVoucher', Voucher.validateVoucher);
  app.get('/vnpaysuccess', VNPAy.handlePaymentResult);

  return app.use('/', route);
};

module.exports = initWebRoutes;

