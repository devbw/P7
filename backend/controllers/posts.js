const postModel = require('../models/posts');
const jwt_decode = require('jwt-decode');
const utils = require('../services/utils');
const isLength = require('validator/lib/isLength');

exports.createPost = (req, res, next) => {

    const post_content = utils.strip_tags(req.body.post_content).trim();
    if ( !isLength(post_content, { min: 2, max: 255 }) ) {
        return res.status(400).send("La longueur du commentaire n'est pas acceptée");
    }

    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt_decode(token);
    const userId = decoded.userId;

    postModel.create(post_content, req.body, userId)
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
    /** @todo add pagination with SQL LIMIT and OFFSET */
    postModel.getAll()
    .then((rows) => {
        res.send(rows);
    })
    .catch((err) => {
        console.log(err);
    })
};

exports.deletePost = (req, res, next) => {
    /** @TODO check if jwt userId === post.user_id */
    postModel.getOne(req.params.id)
    .then((rows) => {
        const user_id = rows.user_id;

        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt_decode(token);
        const userId = decoded.userId;

        if( userId !== user_id ) {
            return res.status(400).send("Vous n'êtes pas autorisé à faire cette action");
        }
        postModel.deleteOne(req.params.id)
        .then((rows) => {
            res.send(rows);
        })
        .catch((err) => {
            console.log(err);
        })
    })
    .catch((err) => {
        console.log(err);
    })
};

exports.updatePost = (req, res, next) => {
    /** @TODO check if jwt userId === post.user_id + validation */

    postModel.getOne(req.params.id)
    .then((rows) => {
        const user_id = rows.user_id;

        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt_decode(token);
        const userId = decoded.userId;

        if( userId !== user_id ) {
            return res.status(400).send("Vous n'êtes pas autorisé à modifier ce post");
        }

        const post_content = utils.strip_tags(req.body.post_content).trim();
        if ( !isLength(post_content, { min: 2, max: 255 }) ) {
            return res.status(400).send("La longueur du commentaire n'est pas acceptée");
        }

        postModel.updateOne(post_content, req.body, req.params.id )
        .then((rows) => {
            res.send(rows);
        })
        .catch((err) => {
            console.log(err);
        })
    })
    .catch((err) => {
        console.log(err);
    })


};
