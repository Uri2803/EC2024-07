import express from 'express'
import bodyParser from 'body-parser'
import initWebRoutes from './routes/web'
const session = require('express-session');
import cors from 'cors'
require ('dotenv').config()
let app = express()

//config app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

app.get('/', (req, res) => {
  res.json({ message: 'mainpage' })
})

//config session
app.use(session({
  secret: 'mySecretKey',
  resave: false,
  saveUninitialized: false,
}));


initWebRoutes(app)
let port = process.env.PORT || 6969

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running : http://localhost:'+ port + '/')
})