module.exports = function(sequelize, DataTypes){

  var Ingredients = sequelize.define("ingredients", {
      recipename: {
        type: DataTypes.TEXT,
        allowNull: false
      },

      ingredient: {
        type: DataTypes.STRING,
        allowNull: false
      },

      quantity: {
        type: DataTypes.INT,
        allowNull: false
      },

      text: {
        type: DataTypes.TEXT,
        allowNull: false
      }
  });

  //belongs to specific Recipes
  Ingredients.associate = function(models){

    Ingredients.belongsTo(models.Recipes, {

    });
  };

  return Ingredients;
};
