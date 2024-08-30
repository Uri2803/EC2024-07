import db from '../model/database';

const addToCart = async (req, res) => {
    const { productID, quantity } = req.body;
    const email = req.user.email;

    if (!productID || !quantity) {
        return res.status(400).json({ status: 'error', message: 'Product ID and quantity are required.' });
    }

    try {
        const [results] = await db.query('SELECT * FROM Cart JOIN Customers ON Customers.CustomerID = Cart.CustomerID WHERE Customers.Email = ? AND ProductID = ?', [email, productID]);
        if (results.length > 0) {
            const cartID = results[0].CartID;
            // Cập nhật số lượng sản phẩm trong giỏ hàng
            await db.query('UPDATE Cart SET CartItemQuantity = CartItemQuantity + ? WHERE CartID = ? AND ProductID = ?', [quantity, cartID, productID]);
            return res.status(200).json({ status: 'success', message: 'Product quantity updated in cart.' });
        } else {
            // Lấy CustomerID dựa trên email
            const [customerResult] = await db.query('SELECT CustomerID FROM Customers WHERE Email = ?', [email]);
            const customerID = customerResult[0].CustomerID;
            const cartID = `GH${(Math.random().toString(36).substr(2, 4)).toUpperCase()}`;

            // Thêm sản phẩm mới vào giỏ hàng
            await db.query('INSERT INTO Cart (CartID, CustomerID, ProductID, CartItemQuantity) VALUES (?, ?, ?, ?)', [cartID, customerID, productID, quantity]);
            return res.status(201).json({ status: 'success', message: 'Product added to cart successfully.' });
        }
    } catch (err) {
        return res.status(500).json({ status: 'error', message: err.message });
    }
};
const getCart = async (req, res) => {
    const email = req.user.email;

    try {
        // Lấy CustomerID dựa trên email
        const [customerResult] = await db.query(
            'SELECT CustomerID FROM Customers WHERE Email = ?', 
            [email]
        );

        if (customerResult.length === 0) {
            return res.status(404).json({ status: 'error', message: 'Customer not found.' });
        }

        const customerID = customerResult[0].CustomerID;

        // Lấy dữ liệu giỏ hàng của khách hàng
        const [cartItems] = await db.query(
            `SELECT Cart.ProductID, Products.ProductName, Cart.CartItemQuantity 
            FROM Cart 
            JOIN Products ON Cart.ProductID = Products.ProductID 
            WHERE Cart.CustomerID = ?`, 
            [customerID]
        );

        if (cartItems.length === 0) {
            return res.status(404).json({ status: 'info', message: 'Cart is empty.' });
        }
        return res.status(200).json({ status: 'success', cartItems });
    } catch (err) {
        console.error('Error fetching cart:', err.message);
        return res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
};



module.exports = { addToCart, getCart };
