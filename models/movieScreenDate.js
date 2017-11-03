module.exports = function(sequelize, DataTypes) {
  var MovieScreenDate = sequelize.define("MovieScreenDate", {
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  });

  MovieScreenDate.associate = function(models) {
    MovieScreenDate.hasMany(models.MovieScreenDateShow);
  };

  // MovieScreenDate.associate = function(models) {
  //   MovieScreenDate.hasMany(models.Screen, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });

  //   MovieScreenDate.hasMany(models.Movie, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return MovieScreenDate;
};
