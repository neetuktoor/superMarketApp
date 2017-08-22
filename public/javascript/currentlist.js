// var bodyParser = require("body-parser");
// var parseString = require('xml2js').parseString;

//when a user click the add to list button
$(document).ready(function() {
  var count = 0;
  $("tbody").empty();
  // getCurrentList();

  //when document ready, get all the items on current list
  var getCurrentList = function(){

      //get request for all items
      $.get("/api/currentlist", function (data){

        console.log("current list: " + data);

        //for each of the saved item sent back, append it to the html
        if (count < data.length){

          // put information in td rows
          var newItem = $("<tr><td>" + data[count].name + "</td><td>" + data[count].amount + "</td><td>"  + data[count].description + "</td><td><input type='checkbox' id=test5'/><label for='test5'></label></td></tr>");

          //append it to the body
          if (data[count].category == "1"){
            $("#produce").append(newItem);
          }
          else if (data[count].category == "2"){
            $("#dairy").append(newItem);
          }
          else if (data[count].category == "3"){
            $("#bakery").append(newItem);
          }
          else if (data[count].category == "4"){
            $("#meat").append(newItem);
          }
          else{
            $("#other").append(newItem);
          }

          //update count
          count++;

          //get next one on the list
          getCurrentList();
        }
      });

  };
  getCurrentList();
  //when adding item to the list
  $(document).on("click", "#addToList", function(event) {
    console.log("just clicked add to list");
    event.preventDefault();
    //make a new list obj
    var descript;
    console.log($("#Notes").val());
    if ($("#Notes").val() === "") {
      descript = "None";
    } else {
      descript = $("#Notes").val().trim();
    }
    var list = {
      //item name from input
      name: $("#name").val().trim(),
      //category from input
      category: $("#category").val().trim(),
      //amount from input
      amount: parseInt($("#quantity").val().trim()),
      //notes from input
      description: descript,
      //not completed
      completed: false
    };
    console.log("item: " + $("#name").val().trim() + "category: " + $("#category").val().trim() + "amount : " + $("#quantity").val().trim() + "description: " + descript);
    console.log(list);
    // send an AJAX POST-request with jQuery
    $.post("/api/currentlist", list)

      // on success, run this callback
      .done(function(data, res) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a list item with an alert window
        alert("Adding list item...");

      });

    // empty each input box by replacing the value with an empty string
    $("#item").val("");
    $("#category").val("");
    $("#amount").val("");
    $("#description").val("");

    getCurrentList();
  });

$(document).on("click", "#goButton", function(event) {

var APIKEY = "http://www.SupermarketAPI.com/api.asmx/StoresByZip?APIKEY=7c3de4dc65&ZipCode=95130";

var zip = $("#zip").val().trim();
var city = $("#city").val().trim();
var state = $("#state").val().trim();

});
});




