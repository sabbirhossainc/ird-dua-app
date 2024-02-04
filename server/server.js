const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

var db = require("./db.js");

app.use(cors());
app.use(express.json());

app.get("/duas", (req, res) => {
  try {
    var sql = "select * from dua";
    var params = [];
    db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: "success",
        data: rows,
      });
    });
  } catch (error) {
    throw error;
  }
});

app.get("/duas/duacategory", (req, res, next) => {
  var sql = "select * from category";
  var params = [];
  db.all(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

export default app;
