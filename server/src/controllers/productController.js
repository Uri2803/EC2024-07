
const db = require('../model/database');

let getAllProducts = (req, res) => {
    db.query('SELECT * FROM Products', (error, results) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      res.status(200).json(results);
    });
  };
  module.exports = {
    getAllProducts: getAllProducts,
}