var path = require("path");

module.exports = function(app){
    // grocery list html
  app.get("/groceryList", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/groceryList.html"));
  });
  // app.use(function(req, res) {
  //   res.sendFile(path.join(__dirname, "../index.html"));
  // });
// saved list html
  app.get("/savedList", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/savedRecipes.html"));
  });
  // app.use(function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // });
  // recipe search html
  app.get("/recipeSearch", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/recipeSearch.html"));
  });
  // app.use(function(req, res) {
  //   res.sendFile(path.join(__dirname, "../index.html"));
  // });
   // recipe saved html
   app.get("/savedRecipes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/savedRecipes.html"));
  });
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });
 

};
