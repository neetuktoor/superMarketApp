
//neetu's attempt at fixing Don's code
//when a user click the add to list button
$(document).ready(function() {
$(document).on("click", "#addToList", function (event) {
  console.log("just clicked add to list");
  event.preventDefault();
    //make a new list obj
    var descript;
    console.log($("#Notes").val());
    if ($("#Notes").val() === ""){
      descript = "None";
    }
    else {
       descript = $("#Notes").val().trim();
    }
    var list = {
      //item name from inpu
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
console.log("item: " + $("#name").val().trim() + "category: " + $("#category").val().trim() + "amount : " + $("#quantity").val().trim() + "description: " +descript);
console.log(list);
// send an AJAX POST-request with jQuery
$.post("/api/currentlist", list)

      // on success, run this callback
    .done(function(data) {
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
});
});
