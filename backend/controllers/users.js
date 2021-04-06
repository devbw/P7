const userModel = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode');

exports.signUp = (req, res, next) => {
  /** @todo validation */
  userModel.create(req.body)
  .then((rows) => {
    res.send(rows);
  })
  .catch((err) => {
    console.dir(err);
    res.send(err);
  })
}

exports.login = (req, res, next) => {
  /** @todo validation */
  const { email, password } = req.body;

  if (!email && !password) {
    return res.status(400).json({
      message: "Veuillez rentrer vos identifiants",
    });
  } else if (!email) {
    return res.status(400).json({
      message: "Veuillez rentrer votre email",
    });
  } else if (!password) {
    return res.status(400).json({
      message: "Veuillez rentrer votre mot de passe",
    });
  }

  userModel.findOneByEmail(email)
    .then((user) => {
      bcrypt.compare(password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({
              message: "Votre mot de passe est invalide",
            });
          }

          res.status(200).json({
            token: jwt.sign(
              {
                userId: user.id,
                account: user.account,
              },
              process.env.JWT_SECRET,
              {
                expiresIn: process.env.JWT_EXPIRES,
              }
            ),
          });
        }).catch((err) => {
          return res.status(401).json({
            message: err,
          });
        });
    })
    .catch((err) => {
      console.dir(err);

      res.status(401).json({
        message: err,
      });
    });
}

exports.deleteAccount = (req, res, next) => {
  // TODO jwt userId === user.id
  /*const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt_decode(token);
  const userId = decoded.userId;
  const user_id = req.params.id;

  if( userId !== user_id ) {
    return res.status(400).send("Vous n'êtes pas autorisé à supprimer ce post");
  }*/

  userModel.deleteOne(req.params.id)
    .then((rows) => {
        res.send("Votre compte a bien été supprimé");
    })
    .catch((err) => {
        console.log(err);
    })
}