const connectionDb = require('../services/connection-bdd');
const bcrypt = require('bcrypt');
const mysql = require("mysql");


exports.create = (post) => {
  return new Promise((resolve, reject) => {
    const db = connectionDb.getDbConnection();
    const saltRounds = 10;

    bcrypt.hash(post.password, saltRounds, (err, hash) => {
      const sql = "INSERT INTO Users (firstname, lastname, email, password, user_admin, created, updated) VALUES (?, ?, ?, ?, 0, NOW(), NOW())";

      db.query(sql, [post.firstname, post.lastname, post.email, hash], (err, rows, fields) => {
        if(err)
          reject(err);

        resolve('User created successfully');
      });
    });
  });
};

exports.findOneBy = (field, value) => {
  return new Promise((resolve, reject) => {
    const db = connectionDb.getDbConnection();

    const string = `SELECT * FROM Users WHERE ${field} = ?`;
    const inserts = [value];
    const sql = mysql.format(string, inserts);

    db.query(sql, (error, user) => {
      if (user.length === 0) {
        // return to catch
        reject(new Error("Votre adresse mail est invalide"));
      }
      const selectedUser = user[0];

      // return to then
      resolve(selectedUser);
    });
  });
};

exports.findOneByEmail = (email) => {
  return this.findOneBy('email', email);
};

exports.deleteOne = (id) => {
  return new Promise((resolve, reject) => {

    const db = connectionDb.getDbConnection();

    db.query("DELETE FROM Users WHERE id = ?", [id], (err, rows, fields) => {
    if(err)
      reject(err);

    resolve("Deleted successfully");
    })
  })
}

exports.getOne = (id) => {
  return new Promise((resolve, reject) => {

    const db = connectionDb.getDbConnection();

    db.query("SELECT * FROM Users WHERE id = ?", [id], (err, rows, fields) => {
    if(err)
      reject(err);

    resolve(rows);
    })
  })
}
