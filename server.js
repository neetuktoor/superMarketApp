// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var parseString = require('xml2js').parseString;
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));


//Routes
require("./routes/currentlist-api-routes.js")(app);
require("./routes/ingredients-api-routes.js")(app);
require("./routes/recipes-api-routes.js")(app);
require("./routes/htmlRoutes.js")(app);

// request("http://www.SupermarketAPI.com/api.asmx/StoresByZip?APIKEY=7c3de4dc65&ZipCode=95130", function (error, response, body) {
// if (!error && response.statusCode == 200) {
//   // console.log(body) // Print the google web page.
//   var xml = body;
//   parseString(xml, function (err, result) {
//   console.log(result);
//   });
//   }
// });

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
