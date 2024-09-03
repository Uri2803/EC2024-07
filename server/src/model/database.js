import database from '../config/database.js'
import mysql from 'mysql2/promise'

const db = mysql.createPool({
  host: database.HOST,
  user: database.USER,
  password: database.PASSWORD,
  database: database.DB,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = db;
