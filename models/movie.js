module.exports = function(sequelize, DataTypes) {
  var Movie = sequelize.define("Movie", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    releaseDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  },
  {
    timestamps: false
  });

  Movie.associate = function(models) {
    Movie.hasMany(models.MovieScreenDateShow);
  };

  return Movie;
};
