module.exports = function(sequelize, DataTypes){

  var Ingredients = sequelize.define("Ingredients", {
      recipename: {
        type: DataTypes.TEXT,
        allowNull: false
      },

      ingredient: {
        type: DataTypes.STRING,
        allowNull: false
      },

      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },

      text: {
        type: DataTypes.TEXT,
        allowNull: false
      }
  });
  return Ingredients;
};
