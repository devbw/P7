const connectionDb = require('../services/connection-bdd');
const bcrypt = require('bcrypt');
const mysql = require("mysql");


exports.create = (post) => {
  return new Promise((resolve, reject) => {
    const db = connectionDb.getDbConnection();
    const saltRounds = 10;

    bcrypt.hash(post.password, saltRounds, (err, hash) => {
      const sql = "INSERT INTO Users (firstname, lastname, email, password, created, updated) VALUES (?, ?, ?, ?, NOW(), NOW())";

      db.query(sql, [post.firstname, post.lastname, post.email, hash], (err, rows, fields) => {
        if(err)
          reject(err);

        resolve('User created successfully');
      });
    });
  });
};

exports.findOneBy = (field, email) => {
  return new Promise((resolve, reject) => {
    const db = connectionDb.getDbConnection();

    const string = `SELECT * FROM Users WHERE ${field} = ?`;
    const inserts = [email];
    const sql = mysql.format(string, inserts);

    db.query(sql, (error, user) => {
      if (user.length === 0) {
        reject(new Error("Votre adresse mail est invalide"));
      }
      const selectedUser = user[0];

      resolve(selectedUser);
    });
  });
};

exports.findOneByEmail = (email) => {
  return this.findOneBy('email', email);
};
