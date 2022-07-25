const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const mysql = require('mysql');

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'LiveandLaugh99',
  database: 'reactCommerce'
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

