const express = require("express");
const cors = require("cors");
const sqlite3 = require('sqlite3').verbose();
const PORT = process.env.PORT || 5000;
const DBSOURCE = './dua_main.sqlite';

const app = express();
app.use(express.json());
app.use(cors());

// open the database
let db = new sqlite3.Database(DBSOURCE, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chinook database.');
});

// root routes
app.get("/", (req, res) => {
  res.status(200),express.json({
    message:"Hello Next - vercel back",
  });
});

// get another routes

// app.get('/duas', (req, res) => {
//   let sql = 'select * from dua';
//   let params = [];
//   db.all(sql, params, (err, rows) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: 'success',
//       data: rows,
//     });
//   });
//   // close the database connection
//   db.close();
// });

// app.get('/duas/duacategory', (req, res) => {
//   let sql = 'select * from category';
//   let params = [];
//   db.all(sql, params, (err, row) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: 'success',
//       data: row,
//     });
//   });
//   // close the database connection
//   db.close();
// });


app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

module.exports = app;
