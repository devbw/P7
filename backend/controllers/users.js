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

  if (!email || !password) {
    return res.status(400).json({
      message: "Identifiant ou mot de passe incorrect",
    });
  }
  userModel.findOneByEmail(email)
    .then((user) => {
      bcrypt.compare(password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({
              message: "Identifiant ou mot de passe incorrect",
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
  //TODO jwt userId === user.id
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt_decode(token);
  const userId = decoded.userId;
  const user_id = parseInt(req.params.id);

  userModel.getOne(userId)
  .then((rows)=> {
    const admin = rows[0].user_admin;
    if( (userId != user_id) && (admin === 0) ) {
      return res.status(400).send("Vous n'êtes pas autorisé à supprimer cet utilisateur");
    }
    userModel.deleteOne(req.params.id)
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      return res.status(400).send("Vous n'êtes pas autorisé à supprimer cet utilisateur");
    })

  })
  .catch((err) => {
    console.log(err);
  })
}

exports.getOneUser = (req, res, next) => {
  userModel.getOne(req.params.userId)
    .then((rows) => {
        res.send(rows);
    })
    .catch((err) => {
        console.log(err);
    })
}