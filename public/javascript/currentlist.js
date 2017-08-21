// don's code
// $(document).ready(function() {
// console.log("this is working");
//   var name = $("#name");
//   var $quantity = $("#quantity");
//   var $notes = $("#note");
//   var $category = $("#category");

//   //click event
// $("#addToList").on("click", function() {
//   var list = {
//     name: $name.val(),
//     quantity: $quantity.val(),
//     notes: $notes.val(),
//     category: category.val(),
//   };

//     $.ajax({
//       type: POST,
//       url: '/api/currentlist',
//       data: list,
      
//     });
//   });
// });

//neetu's attempt at fixing Don's code
//when a user click the add to list button
$("addToList").on("click", function (event) {
  event.preventDefault();
    //make a new list obj
    var list = {
      //item name from input
      item: $("#item").val().trim(),
      //category from input
      category: $("#category").val().trim(),
      //amount from input
      amount: $("#amount").val().trim(),
      //notes from input
      description: $("#description").val().trim()
};

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