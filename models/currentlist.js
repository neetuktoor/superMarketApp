module.exports = function(sequelize, DataTypes){

  var List = sequelize.define ("currentlist", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.INT,
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
