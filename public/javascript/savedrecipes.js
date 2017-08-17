//when document on ready
$(document).ready(function() {

  //get saved recipes from database
  $.get("/api/recipes", function(data){

    console.log("saved recipes: " + data);
  //for each of saved recipe
  for (var i = 0; i < data.length; i++){

    //find the name, website url, picture
    var name = data[i].recipename;
    var website = data[i].website;
    var picture = data[i].picture;

    //make a container
    var recipecontain = $("<div class = 'recipecontain'></div>");

    //append name with website url, picture
    var foodpic = $("<img src='" + picture + "' class='foodpic' id = '"+ name +"'>");
    var hyperlink = $("<p class='hyperlink'><a class= 'websiteurl' href ='" + website + "'>" + name + "</a></p><p> Ingredients: </p>");
    $(recipecontain).append(foodpic);
    $(recipecontain).append(hyperlink);

    //with that name, find all ingredients related to it
    $.get("/api/ingredients/" + name, function(datas){

    //for each ingredient found in database,
    for (var j = 0; j < datas.length; j++){

      //make a container
      var itemcontainer = $("<div class = 'itemcontain'></div>");

      //append text of inredient, with the value of the ingredient and id of quantity
      var item = $("<p value = '" + datas[j].ingredient + "' class = '" + datas[j].quantity + "'>" + datas[j].text + "</p>");

      //add button that says add item to current list
      var addbutt = $("<button class = 'additem'> + to list </button>");
      $(itemcontainer).append(item);
      $(itemcontainer).append(addbutt);

      //append this container to the first container
      $(recipecontain).append(itemcontainer);
      }
    });

    //add a delete recipe button from saved lists

    //append it to the document
  }

});


});
