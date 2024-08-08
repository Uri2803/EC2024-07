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
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: false,
}));

initWebRoutes(app);

let port = process.env.PORT || 6969;

app.listen(port, () => {
    console.log("Running on the port: " + port);
});
