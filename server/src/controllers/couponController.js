import db from '../model/database';

let getAllCoupons = async (req, res) => {
  try {
    const [coupons] = await db.query(`SELECT CouponID, ExpiryDate , CouponDescription FROM Coupon`);
    res.status(200).json({ status: true, coupons: coupons });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

let setCoupon = async (req, res) => {
  const { coupon } = req.body;
  console.log(coupon);
  try {
    // Cập nhật thông tin Coupon trong cơ sở dữ liệu
    if (!coupon.CouponID || !coupon.ExpiryDate || !coupon.CouponDescription) {
      return res.status(400).json({ error: 'Thiếu dữ liệu cần thiết' });
    }
    const [couponResults] = await db.query('SELECT CouponID FROM Coupon WHERE CouponID = ?', [coupon.CouponID]);
    if (couponResults.length === 0) {
        return res.status(404).json({ status: 'error', message: 'Coupon not found.' });
    }
    await db.query(
      `UPDATE Coupon 
       SET ExpiryDate = ?, CouponDescription = ? 
       WHERE CouponID = ?`, 
      [coupon.ExpiryDate, coupon.CouponDescription, coupon.CouponID]
    );
    // Gửi phản hồi thành công
    res.status(200).json({ status: true, message: 'Cập nhật Coupon thành công' });
  } catch (error) {
    // Xử lý lỗi
    res.status(500).json({ error: error.message });
  }
};

  let removeCoupon = async (req, res) => {
    const {couponID} = req.params;
    console.log(couponID);
    try {
      if (!couponID) {
        return res.status(400).json({ status: 'error', message: 'CouponID is required.' });
      }
    //   await db.query('DELETE FROM productBatch WHERE CouponID = ?', [couponID]);

      const [CouponResults] = await db.query('SELECT CouponID FROM Coupon WHERE CouponID = ?', [couponID]);
      if (CouponResults.length === 0) {
          return res.status(404).json({ status: 'error', message: 'Coupon not found.' });
      }

      const [result] = await db.query('DELETE FROM Coupon WHERE CouponID = ?', [couponID]);

      if (result.affectedRows === 0) {
        return res.status(404).json({ status: 'error', message: 'Coupon not found in cart.' });
      }
      
      return res.status(200).json({ status: 'success', message: 'Coupon and related information deleted successfully.' });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  const addCoupon = async (req, res) => {
    const { coupon } = req.body;
    console.log(coupon);
    const [CouponResults] = await db.query('SELECT CouponID FROM Coupon WHERE CouponID = ?', [coupon.CouponID]);
    if (CouponResults.length > 0) {
        return res.status(401).json({ status: 'error', message: 'exists.' });
    }

    try {
        await db.query('INSERT INTO Coupon (CouponID, ExpiryDate, CouponDescription) VALUES (?, ?, ?)', [coupon.CouponID, coupon.ExpiryDate, coupon.CouponDescription]);
        res.status(200).json({ status: true, message: 'Thêm Coupon thành công' });
    } catch (err) {
        return res.status(500).json({ status: 'error', message: err.message });
    }
  };
module.exports = {
    getAllCoupons: getAllCoupons,
    setCoupon: setCoupon,
    removeCoupon: removeCoupon,
    addCoupon: addCoupon,
};
