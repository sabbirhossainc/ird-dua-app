import express, { Request, Response } from "express";
const PORT = process.env.PORT || 5000;
const cors = require("cors");
let db = require("./db");


const app = express();
app.use(express.json());
app.use(cors());

// get post routes

app.get("/duas", (req: Request, res: Response) => {
    let sql = "select * from dua";
    let params = [];
    db.all(sql, params, (err: any, rows: any) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: "success",
        data: rows,
      });
    });
});

app.get("/duas/duacategory", (req: Request, res: Response) => {
  let sql = "select * from category";
  let params = [];
  db.all(sql, params, (err: any, row: any) => {
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

// root routes
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello Next" });
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

export default app;