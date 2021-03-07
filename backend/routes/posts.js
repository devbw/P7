const express = require('express');
const router = express.Router();


/*router.post('/', (req, res, next) => {

    let post = req.body;
    const sql = "SET @id = ?; SET @post_content = ?; SET @image_url = ?; SET @user_id = ?; SET @created = ?; SET @updated = ?; \
                INSERT INTO Posts VALUES (@id, @post_content, @image_url, @user_id, @created, @updated);";
    db.query(sql, [post.id, post.post_content, post.image_url, post.user_id, post.created, post.updated], (err, rows, fields) => {
      if(!err)
      res.send(rows);
      else
      console.log(err);
    });

});*/

router.post('/:id/like', (req, res, next) => {

})

router.post('/:id/comment', (req, res, next) => {

})

/*router.put('/:id', (req, res, next) => {
    res.status(201).json({
        message: 'Objet modifié !'
      });
})*/

/*router.delete('/api/post/:id', (req, res) => {

  db.query('DELETE FROM Posts WHERE id = ?', [req.params.id] , (err, rows, fields) => {
    if(!err)
    res.send('Deleted successfully');
    else
    console.log(err);
  })

});*/

router.get('/:id/comments', (req, res, next) => {

})

/*router.get('/api/post/:id', (req, res) => {

  db.query('SELECT * FROM Posts WHERE id = ?', [req.params.id] , (err, rows, fields) => {
    if(!err)
    res.send(rows);
    else
    console.log(err);
  })

});*/

/*router.get('/api/post', (req, res) => {

    db.query('SELECT * FROM Posts', (err, rows, fields) => {
      if(!err)
      res.send(rows);
      else
      console.log(err);
    })

});*/

module.exports = router;