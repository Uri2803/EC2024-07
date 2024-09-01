import db from '../model/database';


const createOrder = async (req, res) => {
    const { userInfor, cart, shippingCost, orderPrice } = req.body;

    const connection = await db.getConnection(); 
    try {
        const shippingAddress = userInfor.HouseStreet + ', ' + userInfor.Address;
        const email = req.user.email;
        const [customerResult] = await db.query('SELECT CustomerID FROM Customers WHERE Email = ?', [email]);
        const customerID = customerResult[0].CustomerID;
        const orderDate = new Date(); 
        const status='Đã thanh toán';
        await connection.beginTransaction(); 
       
        const [orderResult] = await connection.execute(
            `INSERT INTO Orders (CustomerID, OrderDate, ShippingDate, ShippingAddress, OrderPrice, ShippingPrice, OrderStatus) 
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [customerID, orderDate, userInfor.ShippDate, shippingAddress, orderPrice, shippingCost, status]
        );
        const [orderIdResult] = await connection.execute(
            `SELECT OrderID
            FROM Orders
            WHERE CustomerID = ? 
              AND ShippingAddress = ? 
              AND OrderPrice = ? 
              AND ShippingPrice = ? 
              AND OrderStatus = ?`,
            [customerID, shippingAddress, orderPrice, shippingCost, status]
        );
        const orderID = orderIdResult[0].OrderID;
        for (let detail of cart) {
            const price = detail.Price* detail.CartItemQuantity;
            await connection.execute(
                `INSERT INTO OrderDetails (OrderID, ProductID, Quantity, UnitPrice) 
                VALUES (?, ?, ?, ?)`,
                [orderID, detail.ProductID, detail.CartItemQuantity, price]
            );
        }
        console.log(customerID)
        console.log('tesr')
        await connection.execute(
            `DELETE FROM Cart
            WHERE Cart.CustomerID = ?`,
            [customerID]
        );
       

        await connection.commit(); 
        console.log('Order placed successfully!');
        res.status(200).json({ status: true, orderID: orderID  });
    } catch (err) {
        console.log(err);
         return res.status(500).json({ status: 'error', message: 'Internal server error.' });

    }
};

const getOrder = async (req, res) => {
    const { orderID } = req.params;
    console.log(orderID)
    try {
        const [order] = await db.query(
            `SELECT Orders.*, Products.ImageUrl, Products.Price, Products.ProductName, OrderDetails.*
            FROM Orders
            JOIN OrderDetails ON OrderDetails.OrderID = Orders.OrderID
            JOIN Products ON Products.ProductID = OrderDetails.ProductID
            WHERE Orders.OrderID = ?`, 
            [orderID]
        );
        if (order.length === 0) {
            return res.status(404).json({ status: 'info', message: ' is empty.' });
        }
        return res.status(200).json({ status: 'success', order});
    } catch (err) {
        console.error('Error fetching cart:', err.message);
        return res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
};


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
  createOrder:createOrder,
getOrder:getOrder,
};
