const mysql = require('mysql');

exports.getDbConnection = () => {

    const db = mysql.createConnection({

        database: 'groupomania',

        host: "localhost",

        user: "groupobdd",

        password: "soleil01+",

        multipleStatements : true

    });

    db.connect((err) => {
      if (err) throw err;
      console.log("Connected to database");
    });

    return db;
}
