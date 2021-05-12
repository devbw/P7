const userModel = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode');
const {isAdmin} = require('../services/isadmin');

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

  userModel.deleteOne(userId)
  .then((rows) => {
    res.send(rows);
  })
  .catch((err) => {
    return res.status(400).send("Vous n'êtes pas autorisé à supprimer cet utilisateur");
  })
}

exports.deleteAccountAdmin = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt_decode(token);
  const userId = decoded.userId;

  isAdmin(userId)
  .then((isUserAdmin) => {
    if(isUserAdmin === 0) {
      return res.status(400).send("Vous n'êtes pas autorisé à supprimer cet utilisateur");
    }
    userModel.deleteOne(req.params.id)
    .then((rows) => {
      return res.send(rows);
    })
    .catch(() => {
      return res.status(400).send("Vous n'êtes pas autorisé");
    })
  })
  .catch(() => {
    return res.status(400).send("L'utilisateur n'existe pas");
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

exports.getAllUsers = (req, res, next) => {
  userModel.getAll()
  .then((rows) => {
    res.send(rows);
  })
  .catch((err) => {
    console.log(err);
  })
}
