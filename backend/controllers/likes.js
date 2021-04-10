const likesModel = require('../models/likes');
const jwt_decode = require('jwt-decode');

exports.postLike = (req, res, next) => {
  const likeId = req.params.likeId;
  if(likeId === undefined) {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt_decode(token);
    const userId = decoded.userId;
    const postId = req.params.postId;

    likesModel.createLike(userId, postId)
    .then((rows) => {
        res.send("Post liked successfully !");
    })
    .catch((err) => {
        console.log(err);
    })
  }
};

exports.deleteLike = (req, res, next) => {
  likesModel.getLike(req.params.likeId)
  .then((rows) => {
    const user_id = rows.user_id;
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt_decode(token);
    const userId = decoded.userId;

    if( userId !== user_id ) {
      return res.status(400).send("Vous n'avez pas la possibilité de faire cette action");
    }
    likesModel.deleteLike(req.params.likeId)
    .then((rows) => {
        res.send(rows);
    })
    .catch((err) => {
        console.log(err);
    })
  })
  .catch((err) => {
    res.status(500).send("Vous n'avez pas la possibilité de faire cette action")
  })
}

exports.getOneLike = (req, res, next) => {
  likesModel.getLike(req.params.likeId)
  .then((rows) => {
      res.send(rows);
  })
  .catch((err) => {
      console.log(err);
  })
};
