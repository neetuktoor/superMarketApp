//when document on ready
$(document).ready(function() {

  var searchrecipe;

  //when button is clicked to search recipes
  $(".waves-light").click(function() {
    console.log("i'm in the button");

    //first delete all from the ingrdients database except those already saved

    //find the value of the input in the search
    searchrecipe = $("#search").val().trim();

    var apiEndpoint = 'https://api.edamam.com/search';

    var apiData = {
      // the app ID and key work like a library card
      // every time we're borrowing some data from Edamam (the API service provider)
      // we use these to let Edamam know it's us
      _app_id: '01887e92',
      _app_key: '94817992165a0f1216b065bc74ff6538',
      // q stands for query, and it's the search term for an ingredient or a recipe
      q: searchrecipe
    };

    $.ajax({
        // send the request to the API endpoint
        url: apiEndpoint,
        // the request data we're sending
        data: apiData,
        // we want to receive a JSON object
        dataType: 'jsonp',
      })

      // what to do when the API responds with some data
      .done(function(response) {

        // at this point we can call the callback function
        console.log(response);

        //for each of the response that was returned
        for (var i = 0; i < response.hits.length; i++) {
          var contain = $("<div class = 'recipecontainer'></div>");

          //get the picture, url, label,and ingredients
          var recipepic = response.hits[i].recipe.image; //this is only the url image
          var website = response.hits[i].recipe.url;
          var label = response.hits[i].recipe.label;

          //make a make a divider and append everythign inside

          var foodpic = $("<img src='" + recipepic + "' class='myRecipe' id = '"+ label +"'>");
          var link2 = $("<p class='myPTag'><a class= 'websiteurl' href ='" + website + "'>" + label + "</a></p>");

          //make a button
          var butt = $("<div class='recipeSaveButton'>Save Recipe! </div>");


          $(contain).append(foodpic);
          $(contain).append(link2);
          $(contain).append(butt);

          //append it to the html failed
          $(".rpics").append(contain);
          $(".recipediv").show();

          //for each ingredient listed
          for (var j = 0; j < response.hits[i].recipe.ingredients.length; j++){

            //get the food item, the text, quantity
            var ingredient = response.hits[i].recipe.ingredients[j].food;
            var itext = response.hits[i].recipe.ingredients[j].text;
            var quantity = response.hits[i].recipe.ingredients[j].quantity;

            //store this in the ingrdients database with the name of the recipe
            var newIng = {
              recipename: label,
              ingredient: ingredient,
              quantity: quantity,
              text: itext
            };

            //post into the ingredients database
            $.post("/api/ingredients", newIng)
              .then(

              );

          }
        }

      });

  });

  //when save a recipe button is clicked
  $(document).on('click', '.recipeSaveButton', function () {

    event.preventDefault();

    //find the values for recipe name, picture, and website url (this is for recipes databse)
    var parent = $(event.target).parent();

    var im = $(parent).find('img');
    //find image
    var rimage = $(im).attr("src");
    //find label
    var rlabel = $(im).attr("id");
    //find website
    var parentp = $(parent).find("p");
    var atag = $(parentp).find("a");
    var rwebsite = $(atag).attr("href");

    console.log("image: " + rimage+ "label: " + rlabel + " website: " + rwebsite);

    //push this into the database for Recipes
    var newRecipe = {
      recipename: rlabel,
      picture: rimage,
      website: rwebsite
    };

    $.post("/api/recipes", newRecipe, function(response){

      //after saving the recipe, hide the save item button
      $(event.target).hide();
    });



  });


});
