module.exports = function(sequelize, DataTypes){
  var burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }, 
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  },{
      freezeTableName: true
    
  });

  return burger;
}