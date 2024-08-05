import express from "express";
import bodyParser, { BodyParser } from "body-parser";
import initWebRoutes from "./src/routes/web";
import session from "express-session";
require ('dotenv').config();
let app = express();

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//config session
app.use(session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: false,
}));

initWebRoutes(app);
let port = process.env.PORT || 6969;

app.listen(port, ()=>{
    console.log(" runing on the port: "+ port);
})