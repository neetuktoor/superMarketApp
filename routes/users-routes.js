var db = require("../models");
// var express = require('express');
// var app = express();

var passport = require('passport');
// var bodyParser = require('body-parser');
//var router = express.Router();
module.exports = function(app) {


  app.post("/register", function(req, res) {
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body.confirmPassword);

    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect('/');
    });
  });

};
