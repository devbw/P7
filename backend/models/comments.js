const connectionDb = require('../services/connection-bdd');

exports.create = (userId, postId, comment) => {
  return new Promise((resolve, reject) => {

    const db = connectionDb.getDbConnection();

    const sql = "INSERT INTO Comments (user_id, post_id, comment, created, updated) VALUES (?, ?, ?, NOW(), NOW())";
    db.query(sql, [userId, postId, comment], (err, rows, fields) => {
      if(err)
      reject(err);

      resolve('Commented successfully');
    })

  })
}

exports.modify = (comment, id) => {
  return new Promise((resolve, reject) => {

    const db = connectionDb.getDbConnection();

    const sql = "UPDATE Comments SET comment = ?, updated = NOW() WHERE id = ?";
    db.query(sql, [comment, id], (err, rows, fields) => {
      if(err)
      reject(err)

      resolve('Comment updated successfully');
    })

  })
}

exports.getOne = (id) => {
  return new Promise((resolve, reject) => {

    const db = connectionDb.getDbConnection();

    db.query('SELECT * FROM Comments WHERE id = ?', [id] , (err, rows, fields) => {
      if(err || rows.length === 0)
        reject(err);

      resolve(rows[0]);
    });

  });

};

exports.deleteOne = (id) => {
  return new Promise((resolve, reject) => {

    const db = connectionDb.getDbConnection();

    db.query('DELETE FROM Comments WHERE id = ?', [id] , (err, rows, fields) => {
      if(err)
        reject(err);

      resolve('Deleted Successfully');
    })
  })
}