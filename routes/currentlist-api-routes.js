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

  //delete all items in current list
  app.delete("/api/currentlist/all" , function(req,res){
    console.log("delete route");
    db.Lists.destroy({
      where: {
        completed : true
      }
    }).then (function(post){
      db.Lists.destroy({
        where: {
          completed: false
        }
      }). then (function(posts){
        res.json(posts);
      });
    });
  });
};
