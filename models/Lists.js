module.exports = function(sequelize, DataTypes){

  var Lists = sequelize.define ("Lists", {
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
    description:{
      type: DataTypes.TEXT
    },
    completed: {
      type: DataTypes.BOOLEAN
    }
  });

  return Lists;
};
