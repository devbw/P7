const http = require('http');
const app = require('./app');
const bodyParser = require('body-parser');
const mysql = require('mysql');

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

/* REQUETE */
app.use(bodyParser.json());

app.post('/api/post', (req, res, next) => {

  let post = req.body;
  const sql = "SET @id = ?; SET @post_content = ?; SET @image_url = ?; SET @user_id = ?; SET @created = ?; SET @updated = ?; \
              INSERT INTO Posts VALUES (@id, @post_content, @image_url, @user_id, @created, @updated);";
  db.query(sql, [post.id, post.post_content, post.image_url, post.user_id, post.created, post.updated], (err, rows, fields) => {
    if(!err)
    res.send(rows);
    else
    console.log(err);
  });

});

app.put('/api/post/:id', (req, res, next) => {

  let post = req.body;
  const sql = "SET @id = ?; SET @post_content = ?; SET @image_url = ?; SET @user_id = ?; SET @created = ?; SET @updated = ?; \
              INSERT INTO Posts VALUES (@id, @post_content, @image_url, @user_id, @created, @updated);";
  db.query(sql, [post.id, post.post_content, post.image_url, post.user_id, post.created, post.updated], [req.params.id], (err, rows, fields) => {
    if(!err)
    res.send('Updated successfully !');
    else
    console.log(err);
  });

});

app.delete('/api/post/:id', (req, res) => {

  db.query('DELETE FROM Posts WHERE id = ?', [req.params.id] , (err, rows, fields) => {
    if(!err)
    res.send('Deleted successfully');
    else
    console.log(err);
  })

});

app.get('/api/post', (req, res) => {

  db.query('SELECT * FROM Posts', (err, rows, fields) => {
    if(!err)
    res.send(rows);
    else
    console.log(err);
  })

});

app.get('/api/post/:id', (req, res) => {

  db.query('SELECT * FROM Posts WHERE id = ?', [req.params.id] , (err, rows, fields) => {
    if(!err)
    res.send(rows);
    else
    console.log(err);
  })

});

const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

server.listen(port);
