var sqlite3 = require("sqlite3").verbose();
// var md5 = require("md5");

const DBSOURCE = "dua_main.sqlite";

let db = new sqlite3.Database(DBSOURCE, sqlite3.OPEN_READONLY, (err) => {
  if (err) {
     // Cannot open database
     console.error(err.message);
     throw err;
  }
  console.log('Connected to the database.');
  db.serialize(() => {
    db.each(
      `CREATE TABLE IF NOT EXISTS dua (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        cat_id INTEGER, 
        subcat_id INTEGER, 
        dua_id INTEGER, 
        dua_name_bn TEXT
        dua_name_en TEXT
        top_bn TEXT
        top_en TEXT
        dua_arabic TEXT
        dua_indopak TEXT
        clean_arabic TEXT
        transliteration_bn TEXT
        transliteration_en TEXT
        translation_bn TEXT
        translation_en TEXT
        bottom_bn TEXT
        bottom_en TEXT
        refference_bn TEXT
        refference_en TEXT
        audio TEXT
        )`,
  `CREATE TABLE IF NOT EXISTS category(
        id INTEGER
        cat_id INTEGER
        cat_name_bn TEXT
        cat_name_en TEXT
        no_of_subcat INTEGER
        no_of_dua INTEGER
        cat_icon TEXT
          )`,
       (err, row) => {
      if (err) {
            // Table already created
        console.error(err.message);
      }
      console.log("ok",row);
      // console.log(row.cat_id + "\t" + row.dua_id+"\t"+row.dua_name_en);
    });
  });
  
  // db.close((err) => {
  //   if (err) {
  //     console.error(err.message);
  //   }
  //   console.log('Closed the database connection.');
  // });
});


module.exports = db;