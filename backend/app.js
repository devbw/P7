const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.post('/api/post', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'Objet créé !'
    });
})

app.post('/api/post/:id/like', (req, res, next) => {

})

app.post('/api/post/:id/comment', (req, res, next) => {

})

app.put('/api/post/:id', (req, res, next) => {
    res.status(201).json({
        message: 'Objet modifié !'
      });
})

app.delete('/api/like/:id', (req, res, next) => {

})

app.delete('/api/post/:id', (req, res, next) => {

})

app.delete('/api/comment/:id', (req, res, next) => {

})

app.get('/api/post/:id/comments', (req, res, next) => {

})

app.get('/api/post/:id', (req, res, next) => {

})

app.get('/api/posts', (req, res, next) => {
    const stuff = [
      {
        _id: 'oeihfzeoi',
        title: 'Mon premier objet',
        description: 'Les infos de mon premier objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 4900,
        userId: 'qsomihvqios',
      },
    ];
    res.status(200).json(stuff);
  });

module.exports = app;