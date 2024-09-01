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

module.exports = {
    createOrder:createOrder,
    getOrder:getOrder,
    
  };