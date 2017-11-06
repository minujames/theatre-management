module.exports = function(sequelize, DataTypes) {
  var ShowTime = sequelize.define("ShowTime", {
    name:{
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false
  });


  ShowTime.associate = function(models) {
    ShowTime.belongsToMany(models.Screen, {
      through: {
        model: models.Show,
        unique: false
      },
      foreignKey: 'showtimeId'
    });
  };

  return ShowTime;
};
