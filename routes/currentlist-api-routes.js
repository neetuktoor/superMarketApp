var db = require("../models");

//exporting the routes for the database
module.exports = function(app){


  //post a new item to the database
  app.post("/api/currentlist", function(req, res){
    console.log("in post req");
    db.Lists.create(req.body).then(function(dbList){
      res.json(dbList);
    });
  });

  //get all items in current list database
  app.get("/api/currentlist", function(req,res){

    db.Lists.findAll({}).
    then(function(response){
      console.log("items: " + response);
      res.json(response);
    });
  });
};
