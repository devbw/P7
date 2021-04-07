const likesModel = require('../models/likes');
const jwt_decode = require('jwt-decode');

exports.postLike = (req, res, next) => {

  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt_decode(token);
  const userId = decoded.userId;
  const postId = req.params.postId

  likesModel.like(userId, postId)
  .then((rows) => {
      res.send("Post liked successfully !");
  })
  .catch((err) => {
      console.log(err);
  })
};

