var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var parseString = require('xml2js').parseString;

// needed variables for search
var store;
var address;
var zipCode;
var storeName;

var APIKEY = "http://www.SupermarketAPI.com/api.asmx/SearchByProductName?APIKEY=APIKEY&ItemName=?";

var authKey = "7c3de4dc65"

// Do a get method to get all items in current list from database
// For each item in the database:

// - Find the id of that item and store into variable
// - do an ajax call to supermarket api "SearchforItem" using your the <store id variable>
// - Store the item location in a variable and update database of that item in description column using the <item id variable> 

// Redirect back to the currentlist html to show all items with new desciption

// Have a box in the corner that reminds them of the address