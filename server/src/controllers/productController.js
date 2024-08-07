import db from '../model/database';

let getAllProducts = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM Products');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllProducts
};
