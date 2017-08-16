var path = require("path");

module.exports = function(app){
    // grocery list html
  app.get("/groceryList", function(req, res) {
    res.sendFile(path.join(__dirname, "../groceryList.html"));
  });
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });
// saved list html
  app.get("/savedList", function(req, res) {
    res.sendFile(path.join(__dirname, "../savedList.html"));
  });
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });
  // recipe search html
  app.get("/recipeSearch", function(req, res) {
    res.sendFile(path.join(__dirname, "../recipeSearch.html"));
  });
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });
   // recipe saved html
   app.get("/recipeSaved", function(req, res) {
    res.sendFile(path.join(__dirname, "../recipeSaved.html"));
  });
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });

}