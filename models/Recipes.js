module.exports = function (sequelize, DataTypes){

  var Recipes = sequelize.define("savedrecipes",{
    recipename: {
      type:  DataTypes.TEXT,
      allowNull: false
    },

    picture: {
      type: DataTypes.STRING,
      allowNull: false
  },
    website: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });

  //Recipes has many ingredients
  Recipes.associate = function(models){

    Recipes.hasMany(models.Ingredients, {
      onDelete: "cascade"
    });
  };

  return Recipes;
};
