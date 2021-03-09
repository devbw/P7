const postModel = require('../models/posts');

exports.createPost = (req, res, next) => {

    postModel.create(req.body)
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      console.log(err);
    })
};

exports.getOnePost = (req, res, next) => {

    postModel.getOne(req.params.id)
    .then((rows) => {
        res.send(rows);
    })
    .catch((err) => {
        console.log(err);
    })
};

exports.getAllPost = (req, res, next) => {

    postModel.getAll()
    .then((rows) => {
        res.send(rows);
    })
    .catch((err) => {
        console.log(err);
    })
};

exports.deletePost = (req, res, next) => {

    postModel.deleteOne(req.params.id)
    .then((rows) => {
        res.send(rows);
    })
    .catch((err) => {
        console.log(err);
    })
};

exports.updatePost = (req, res, next) => {

    postModel.updateOne(req.body, req.params.id )
    .then((rows) => {
        res.send(rows);
    })
    .catch((err) => {
        console.log(err);
    })

};
