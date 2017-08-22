//when document on ready
$(document).ready(function() {


  var recipecontain;
  var hello;
  var count = 0;



  var getRecipeFunction = function() {
    console.log("i'm in");
    //get saved recipes from database
    $.get("/api/recipes", function(data) {

      console.log("saved recipes: " + data);
      //for each of saved recipe
      if (count < data.length) {

        //find the name, website url, picture
        var name = data[count].recipename;
        var website = data[count].website;
        var picture = data[count].picture;
        hello = "#" + data[count].recipename.substring(0, 4);
        console.log(hello);

        //make a container
        recipecontain = $("<div id = '" + data[count].recipename.substring(0, 4) + "'></div>");

        //append name with website url, picture
        var foodpic = $("<img src='" + picture + "' id ='" + name + "' class='foodpic' >");
        var hyperlink = $("<p class='hyperlink'><a class= 'websiteurl' href ='" + website + "'>" + name + "</a></p><p> Ingredients: </p>");
        $(recipecontain).append(foodpic);
        $(recipecontain).append(hyperlink);

        //append it to document
        $(".card-action").append(recipecontain);

        getIngredientsFunction(name);
      }
    });
  };

  var getIngredientsFunction = function(name) {
    //with that name, find all ingredients related to it
    $.get("/api/ingredients/" + name, function(datas) {

      console.log(datas);

      //for each ingredient found in database,
      for (var j = 0; j < datas.length; j++) {


        //make a container
        var itemcontainer = $("<div class = 'itemcontain'></div>");

        //append text of inredient, with the value of the ingredient and id of quantity
        var item = $("<p value = '" + datas[j].ingredient + "' class = '" + datas[j].quantity + "'>" + datas[j].text + "</p>");

        //add button that says add item to current list
        var addbutt = $("<button class = 'additem'> + to list </button>");
        $(itemcontainer).append(item);
        $(itemcontainer).append(addbutt);

        //append this container to the first container

        $(hello).append(itemcontainer);
      }

      //add a delete recipe button from saved lists
      var deletebutt = $("<button class = 'deleterecipe'> Delete recipe </button>");
      $(hello).append(deletebutt);
      count++;
      getRecipeFunction();
    });
  };

  getRecipeFunction();


  //on delete button
  $(document).on('click', ".deleterecipe", function() {
    console.log("just clicked delete");
    //grab the name of the recipe name
    var name = $(event.target).parent().find('img').attr("id");
    console.log("name to delete: " + name);
    //initiate the delete ajax call
    $.ajax({
        method: "DELETE",
        url: "/api/recipes/" + name
      })
      .done(function() {
        console.log("just deleted a recipe from saved recipes");

        //delete from ingredients
        $.ajax({
            method: "DELETE",
            url: "/api/ingredients/" + name
          })
          .done(function() {
            console.log("just deleted all ingredients of specific recipe");


          });
      });

    //hide this container
    console.log("hiding " + $(event.target).parent());
    $(event.target).parent().hide();

  });

  $(document).on('click', ".additem", function() {
    console.log("pizzapizza");
    $('#modal1').modal('open');
  });
});
