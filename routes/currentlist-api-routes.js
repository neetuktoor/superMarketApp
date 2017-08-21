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
};
