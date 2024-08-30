// server.js
const express = require('express');
const bodyParser = require('body-parser');
const initWebRoutes = require('./src/routes/web');
const session = require('express-session');
const cors = require('cors');
require('dotenv').config();

let app = express();

// config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// config session
app.use(session({
    secret: 'your-secret-key', 
    resave: false,             // Không lưu lại session nếu không có sự thay đổi
    saveUninitialized: true,   // Lưu lại session ngay cả khi nó chưa được khởi tạo
    cookie: {
      secure: true, // Đặt thành true nếu sử dụng HTTPS
      maxAge: 24 * 60 * 60 * 1000 // Thời gian sống của cookie (1 ngày)
    }
  }));
initWebRoutes(app);

let port = process.env.PORT || 6969;

app.listen(port, () => {
    console.log("Running on the port: " + port);
});
