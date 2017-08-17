module.exports = function(sequelize, DataTypes){

  var List = sequelize.define ("List", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    location:{
      type: DataTypes.TEXT
    },
    completed: {
      type: DataTypes.BOOLEAN
    }
  });

  return List;
};
