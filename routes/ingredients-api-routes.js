var db = require("../models");

//routes
module.exports = function(app){


  //post route for posting new ingredients
  app.post("/api/ingredients", function(req, res){

    console.log("req.body: " + req.body);

    db.Ingredients.create(req.body).then(function(post){
      res.json(post);

    });
  });
};
