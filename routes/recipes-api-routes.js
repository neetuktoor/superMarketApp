var db = require("../models");

//exporting the routes for the database
module.exports = function(app){


  //post a new item to the database
  app.post("/api/recipes", function(req,res){
    console.log("reqbody: " + req.body);
    db.Recipes.create(req.body).then(function(dbList){
      res.json(dbList);
    });
  });

  //get recipes (return all saved recipes)
  app.get("/api/recipes", function(req, res){

    //find all saved recipes
    db.Recipes.findAll({}).
    then(function(data){
      console.log("data: " + data);
      res.json(data);
    });
  });



};
