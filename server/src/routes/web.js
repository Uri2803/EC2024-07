import express from 'express'

let route = express.Router()

let initWebRoutes = (app) => {

  app.get('/', (req, res) => {
    res.json({ message: 'mainpage' })
  })
 
  return app.use('/', route)
}

module.exports = initWebRoutes