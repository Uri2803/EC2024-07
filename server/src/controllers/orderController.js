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
  const { orderID } = req.body;
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

  let removeOrder = async (req, res) => {
    const {orderID} = req.params;
    try {
      if (!orderID) {
        return res.status(400).json({ status: 'error', message: 'Order ID is required.' });
      }

      const [orderResults] = await db.query('SELECT OrderID FROM Orders WHERE OrderID = ?', [orderID]);
      if (orderResults.length === 0) {
          return res.status(404).json({ status: 'error', message: 'Order not found.' });
      }

      // const [orderDetailsResults] = await db.query('SELECT OrderDetailID FROM OrderDetails WHERE OrderID = ?', [orderID]);
      // if (orderResults.length === 0) {
      //     return res.status(404).json({ status: 'error', message: 'OrderDetails not found.' });
      // }

      // const [paymentResults] = await db.query('SELECT PaymentID FROM Payment WHERE OrderID = ?', [orderID]);
      // if (orderResults.length === 0) {
      //     return res.status(404).json({ status: 'error', message: 'Payment not found.' });
      // }

      await db.query('DELETE FROM Payment WHERE OrderID = ?', [orderID]);

      await db.query('DELETE FROM OrderDetails WHERE OrderID = ?', [orderID]);

      const [result] = await db.query('DELETE FROM Orders WHERE OrderID = ?', [orderID]);

      if (result.affectedRows === 0) {
        return res.status(404).json({ status: 'error', message: 'Order not found in cart.' });
      }

      return res.status(200).json({ status: 'success', message: 'Order and related information deleted successfully.' });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

module.exports = {
  getAllOrders: getAllOrders,
  setOrder: setOrder,
  removeOrder: removeOrder,
};
