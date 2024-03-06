import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
})