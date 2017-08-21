$(document).ready(function() {

  var name = $("#name");
  var $quantity = $("#quantity");
  var $notes = $("#note");
  var $category = $("#category");

  //click event
$(".modal-action").click(function() {
  console.log("item added");

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