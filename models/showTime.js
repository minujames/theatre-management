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
    ShowTime.hasMany(models.MovieScreenDateShow);
    // Screen.belongsToMany(models.ShowTime, {through: models.MovieScreenDate});
  };

  // ShowTime.associate = function(models) {
    // ShowTime.belongsToMany(models.Movie, {through: models.MovieScreenDate});
    // ShowTime.belongsToMany(models.Screen, {through: models.MovieScreenDate});

    // ShowTime.hasMany(models.MovieScreenDate);
  // };

  // ShowTime.associate = function(models) {
  //   ShowTime.hasMany(models.MovieScreenDateShow);
  // };

  return ShowTime;
};
