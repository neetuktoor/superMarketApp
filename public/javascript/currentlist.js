$(document).ready(function() {

  var name = $("#name");
  var $quantity = $("#quantity");
  var $notes = $("#note");
  var $category = $("#category");

  //click event
$("#addButton").on("click", function() {
  var list = {
    name: $name.val(),
    quantity: $quantity.val(),
    notes: $notes.val(),
    category: category.val(),
  };

    $.ajax({
      type: POST,
      url: '/api/currentlist',
      data: list,
      
    });
  });
});