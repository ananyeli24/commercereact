const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();

app.use(cors());
app.use(express.json());

const mysql = require('mysql');

const db = mysql.createConnection({
  user: process.env.NODE_USER,
  host:process.env.NODE_HOST ,
  password: process.env.NODE_PASSWORD,
  database: process.env.NODE_DATABASE
})
db.connect(function (err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});
app.get("/products", (req, res) => {
  db.query("SELECT * FROM gloves;", (err, results) => {
    if (err) {
      console.log(err)
    } else {
      res.send(results)
    }
  })
  console.log('Hello world')
})
app.get("/products/prices/asc", (req, res) => {
  db.query("SELECT * FROM gloves ORDER BY prices ASC;", (err, results) => {
    if (err) {
      console.log(err)
    } else {
      res.send(results)
    }
  })
  
  console.log('Hello world')
})

app.get("/products/prices/desc", (req, res) => {
  db.query("SELECT * FROM gloves ORDER BY prices DESC;", (err, results) => {
    if (err) {
      console.log(err)
    } else {
      res.send(results)
    }
  })
  
  console.log('Hello world')
})
app.get("/products/color", (req, res) => {
  db.query("SELECT * FROM gloves ORDER BY color;", (err, results) => {
    if (err) {
      console.log(err)
    } else {
      res.send(results)
    }
  })
  
  console.log('Hello world')
})
app.listen(5000, () => {
  console.log('Port 5000')
})
