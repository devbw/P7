const connectionDb = require('../services/connection-bdd');

exports.create = (post_content, post, userId) => {
  return new Promise((resolve, reject) => {

    const db = connectionDb.getDbConnection();

    const sql = "INSERT INTO Posts (post_content, image_url, user_id, created, updated) VALUES (?, ?, ?, NOW(), NOW())";
    db.query(sql, [post_content, post.image_url, userId], (err, rows, fields) => {
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

    db.query('SELECT * FROM Posts', (err, rows, fields) => {
      if(err)
        reject(err);

      resolve(rows);
    });

  });

};

exports.deleteOne = (id) => {
  return new Promise((resolve, reject) => {

    const db = connectionDb.getDbConnection();

    db.query('DELETE FROM Posts WHERE id = ? ON CASCADE', [id] , (err, rows, fields) => {
      if(err)
        reject(err);

      resolve('Deleted Successfully');
    })

  })

}

exports.updateOne = (post_content, body, id) => {
  return new Promise((resolve, reject) => {

    const db = connectionDb.getDbConnection();

    const sql = "UPDATE Posts SET post_content = ?, image_url = ?, updated = NOW() WHERE id = ?";
    db.query(sql, [post_content, body.image_url, id], (err, rows, fields) => {
      if(err)
        reject(err);

      resolve('Modified Successfully');
    });

  })
}