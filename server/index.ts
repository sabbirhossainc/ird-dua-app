import express, { Request, Response } from 'express';
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
// const PORT = process.env.PORT || 5000;
const DBSOURCE = './dua_main.sqlite';

const app = express();
app.use(express.json());
app.use(cors());

// open the database
let db = new sqlite3.Database(DBSOURCE, sqlite3.OPEN_READWRITE, (err: any) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chinook database.');
});
// get post routes

// app.get('/duas', (req: Request, res: Response) => {
//   let sql = 'select * from dua';
//   let params = [];
//   db.all(sql, params, (err: any, rows: any) => {
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

// app.get('/duas/duacategory', (req: Request, res: Response) => {
//   let sql = 'select * from category';
//   let params = [];
//   db.all(sql, params, (err: any, row: any) => {
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

// root routes
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello Next - vercel back' });
});

// app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

export default app;
