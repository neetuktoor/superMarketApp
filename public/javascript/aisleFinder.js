// info from xml2js package

var parseString = require('xml2js').parseString;
var http = require('http');
function xmlToJson(url, callback) {
  var req = http.get(url, function(res) {
    var xml = '';
    
    res.on('data', function(chunk) {
      xml += chunk;
    });
    res.on('error', function(e) {
      callback(e, null);
    }); 
    res.on('timeout', function(e) {
      callback(e, null);
    }); 
    res.on('end', function() {
      parseString(xml, function(err, result) {
        callback(null, result);
      });
    });
  });
}

// api key
var authKey = "7c3de4dc65"

// needed variables for search
var itemName;
var storesByCityState;
var storesByZip;
var storeName;

var APIKEY = "http://www.SupermarketAPI.com/api.asmx/SearchByProductName?APIKEY=APIKEY&ItemName=?";

xmlToJson(url, function(err, data) {
  if (err) {
    // Handle this however you like
    return console.err(err);
  }
  // Do whatever you want with the data here
  // Following just pretty-prints the object
  console.log(JSON.stringify(data, null, 2));
});

AJAX call for Z
// AJAX call for item name
 $.ajax({
      url: "http://www.SupermarketAPI.com/api.asmx/SearchForItem?APIKEY=APIKEY&StoreId=123456&ItemName=Apple",
      method: "GET"
    }).done(function(response) {
      console.log(response);
    });