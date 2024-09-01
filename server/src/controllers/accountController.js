import jwt from 'jsonwebtoken';
import db from '../model/database';
import bcrypt from 'bcrypt';


const JWT_SECRET = '10';

const authenticateJWT = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (token) {
        jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err) return res.sendStatus(403);
            req.user=user;
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
            if (results.length > 0) {
                const user = results[0][0]; // Assuming single row result
                const token = jwt.sign({
                    email: email,
                    username: user.Username,
                    role: user.Role
                }, JWT_SECRET, { expiresIn: '2h' });
                res.status(200).json({
                    status: true,
                    token,
                    user: {
                        email: email,
                        username: user.Username,
                        role: user.Role
                    }
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


let getUserInfor = async (req, res) => {
    const user  = req.user; 
    console.log(user);
    if (user.email && user.role) {
        try {
            const [results] = await db.query('CALL GET_USSER_INFOR (?, ?)', [user.email, user.role]);
            
            if (results.length > 0) {
                const userInfor = results[0][0];
                return res.status(200).json({
                    status: true,
                    userInfor: userInfor
                });
            } else {
                return res.status(404).json({ status: false, message: 'No data found or login failed' });
            }
        } catch (err) {
            console.error(err);
            return res.status(500).json({ status: false, message: 'Internal Server Error' });
        }
    } else {
        return res.status(404).json({ status: false, message: 'No data found or login failed' });
    }
};

let register = async (req, res)=>{
    const {email, username, password} = req.body;
    console.log(req.body);

    if(email && username && password){
        try{
            await db.query('CALL REGISTER (?, ?, ?)', [email, username, password])

            return res.status(200).json({
                status: true
            });
        }catch(err){
            console.log(err)
            return res.status(500).json({ status: false, message: err.message });

        }

    }
    else{
        return res.status(404).json({ status: false, message: 'No data found' });
    }
}
export default {
    login,
    authenticateJWT,
    getUserInfor,
    register
};
