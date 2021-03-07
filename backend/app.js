const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

/* POSTS */

app.delete('/api/like/:id', (req, res, next) => {

})

app.delete('/api/comment/:id', (req, res, next) => {

})

app.use('/api/post', postRoutes);
app.use('/api/user', userRoutes);

module.exports = app;
