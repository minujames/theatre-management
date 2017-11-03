module.exports = function(sequelize, DataTypes) {
  var MovieScreenDateShow = sequelize.define("MovieScreenDateShow", {
  });

  MovieScreenDateShow.associate = function(models) {
    MovieScreenDateShow.hasMany(models.Reservation);
  };

  // MovieScreenDateShow.associate = function(models) {
  //   MovieScreenDateShow.hasMany(models.MovieScreenDate, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });

  //   MovieScreenDateShow.hasMany(models.ShowTime, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return MovieScreenDateShow;
};
