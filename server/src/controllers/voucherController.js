import db from '../model/database';

let validateVoucher = async (req, res) => {
    console.log(req.body)
    const { code, orderValue , shippingCost} = req.body;
  
    try {
      const [results] = await db.query('SELECT * FROM Coupon WHERE CouponID = ?', [code]);
        console.log(results)
      if (results.length === 0) {
        return res.status(400).json({ valid: false, message: 'Mã voucher không hợp lệ.' });
      }
  
      const voucher = results[0];
      const currentDate = new Date().toISOString().split('T')[0];
  
      if (currentDate > voucher.ExpiryDate.toISOString().split('T')[0]) {
        return res.status(400).json({ valid: false, message: 'Mã voucher đã hết hạn.' });
      }
  
      if (orderValue < voucher.minOrderValue) {
        return res.status(400).json({ valid: false, message: 'Đơn hàng chưa đủ điều kiện miễn phí vận chuyển.' });
      }
      if(voucher.CouponType === 'Shipping'){
        return res.status(200).json({
            valid: true,
            discount: shippingCost,
            message: `Miễn phí vận chuyển cho đơn hàng trên ${voucher.minOrderValue}`,
            description: voucher.CouponDescription
          });
      }
      
      return res.status(200).json({
        valid: true,
        discount: (voucher.discount/100) * (shippingCost + orderValue),
        message: `Giảm giá ${voucher.discount}% cho đơn hàng`,
        description: voucher.CouponDescription
      });
  
    } catch (error) {
      return res.status(500).json({ valid: false, message: 'Lỗi máy chủ.' });
    }
  };

  

module.exports = {
    validateVoucher:validateVoucher
  };
  