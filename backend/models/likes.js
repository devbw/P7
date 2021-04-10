const connectionDb = require('../services/connection-bdd');

exports.createLike = (userId, postId) => {
  return new Promise((resolve, reject) => {

    const db = connectionDb.getDbConnection();

    const sql = "INSERT INTO Likes (user_id, post_id, created, updated) VALUES (?, ?, NOW(), NOW())";
    db.query(sql, [userId, postId], (err, rows, fields) => {
      if(err)
      reject(err);

      resolve('Liked successfully');
    });
  });
};

exports.deleteLike = (id) => {
  return new Promise((resolve, reject) => {

    const db = connectionDb.getDbConnection();

    db.query('DELETE FROM Likes WHERE id = ?', [id] , (err, rows, fields) => {
      if(err)
        reject(err);

      resolve('Unliked Successfully');
    });
  });
};

exports.getLike = (id) => {
  return new Promise((resolve, reject) => {
    const db = connectionDb.getDbConnection();

    db.query('SELECT * FROM Likes WHERE id = ?', [id] , (err, rows, fields) => {
      if(err || rows.length === 0)
        reject(err);

      resolve(rows[0]);
    });
  });
};
