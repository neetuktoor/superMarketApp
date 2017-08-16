module.exports = function (sequelize, DataTypes){

  var Recipes = sequelize.define("Recipes",{
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

  return Recipes;
};
