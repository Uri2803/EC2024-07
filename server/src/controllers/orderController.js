import db from '../model/database';

let getAllOrders = async (req, res) => {
  try {
    const [products] = await db.query(
      `SELECT 
        o.OrderID AS orderId, 
        CASE 
          WHEN o.OrderStatus = 0 THEN 'Chưa xác nhận' 
          WHEN o.OrderStatus = 1 THEN 'Đã xác nhận' 
          ELSE 'Không rõ' 
        END AS status, 
        p.ProductName AS name, 
        od.Quantity AS quantity, 
        CONCAT(od.UnitPrice, 'đ') AS price, 
        p.ImageUrl AS image 
      FROM Orders o 
      JOIN OrderDetails od ON o.OrderID = od.OrderID 
      JOIN Products p ON od.ProductID = p.ProductID`
    );
    res.status(200).json({ status: true, products: products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

let setOrder = async (req, res) => {
    const orderID = req.params.orderID;
    try {
        await db.query(
          `UPDATE Orders 
           SET OrderStatus = 1 
           WHERE OrderID = ?`, 
          [orderID]
        );
      res.status(200).json({ status: true });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

module.exports = {
  getAllOrders: getAllOrders,
  setOrder: setOrder,
};
