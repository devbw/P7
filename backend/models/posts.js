const connectionDb = require('../services/connection-bdd');

exports.create = (post_content, userId) => {
  return new Promise((resolve, reject) => {

    const db = connectionDb.getDbConnection();
    const sql = "INSERT INTO Posts (post_content, user_id, created, updated) VALUES (?, ?, NOW(), NOW())";
    db.query(sql, [post_content, userId], (err, rows, fields) => {
      if(err)
        reject(err);

      resolve('Added successfully');
    });
  });
};

exports.getOne = (id) => {
  return new Promise((resolve, reject) => {

    const db = connectionDb.getDbConnection();
    db.query('SELECT * FROM Posts WHERE id = ?', [id] , (err, rows, fields) => {
      if(err || rows.length === 0)
        reject(err);

      resolve(rows[0]);
    });
  });
};

exports.getAll = () => {
  return new Promise((resolve, reject) => {

    const db = connectionDb.getDbConnection();
    db.query('SELECT * FROM Posts ORDER BY id DESC', (err, rows, fields) => {
      if(err)
        reject(err);

      resolve(rows);
    });
  });
};

exports.deleteOne = (id) => {
  return new Promise((resolve, reject) => {

    const db = connectionDb.getDbConnection();
    db.query('DELETE FROM Posts WHERE id = ?', [id] , (err, rows, fields) => {
      if(err)
        reject(err);

      resolve('Deleted Successfully');
    });
  });
};

exports.updateOne = (post_content, id) => {
  return new Promise((resolve, reject) => {

    const db = connectionDb.getDbConnection();
    const sql = "UPDATE Posts SET post_content = ?, updated = NOW() WHERE id = ?";
    db.query(sql, [post_content, id], (err, rows, fields) => {
      if(err)
        reject(err);

      resolve('Modified Successfully');
    });
  });
};