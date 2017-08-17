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

  //get for specific ingredient (return all ingredients for that specific recipe)
  app.get("/api/ingredients/:name", function(req,res){

    db.Ingredients.findAll({
      where: {
        recipename: req.params.name
      }
    }).then(function(data){
      res.json(data);
    });
  });
};
