import jwt from 'jsonwebtoken';
import db from '../model/database';
import bcrypt from 'bcrypt';


const JWT_SECRET = '10';

const authenticateJWT = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (token) {
        jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err) return res.sendStatus(403);
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};
const login = async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
        try {
            const [results] = await db.query('CALL LOGIN(?, ?)', [email, password]);

            // Check if user exists and password is correct
            if (results.length > 0) {
                const user = results[0][0]; // Assuming single row result
                const token = jwt.sign({
                    email: user.Email,
                    username: user.Username,
                    role: user.Role
                }, JWT_SECRET, { expiresIn: '1h' });
                res.status(200).json({
                    status: true,
                    token
                });
            } else {
                res.status(404).json({ status: false, message: 'No data found or login failed' });
            }
        } catch (err) {
            res.status(500).json({ status: false, message: err.message });
        }
    } else {
        res.status(400).json({ status: false, message: 'Vui lòng nhập email và password' });
    }
};

export default {
    login,
    authenticateJWT
};
