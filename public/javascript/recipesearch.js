//when document on ready
$(document).ready(function() {

  var searchrecipe;
  //when button is clicked to search recipes
  $(".material-icons").click(function() {
<<<<<<< HEAD
    console.log("just clicked the search button");
    console.log("search: "  + recipesearch);
=======

>>>>>>> 60634095f8f7b711fd81eca5dec7162d0731982b
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
<<<<<<< HEAD
          var foodpic = $("<img src ='" + recipepic + "'>");
          var link2 = $("<p><a href ='" + website + "'>" + label + "</a></p>");

          //make a button
          var butt = $("<button>Save Recipe! </button>");
=======
          var foodpic = $("<img src='" + recipepic + "' class='myRecipe'>");
          var link2 = $("<p class='myPTag'><a href ='" + website + "'>" + label + "</a></p>");

          //make a button
          var butt = $("<button class='recipeSaveButton'>Save Recipe! </button>");
>>>>>>> 60634095f8f7b711fd81eca5dec7162d0731982b

          $(contain).append(foodpic);
          $(contain).append(link2);
          $(contain).append(butt);

          //append it to the html failed
          $(".rpics").append(contain);
          $(".recipediv").show();

        }

      });

  });
});
