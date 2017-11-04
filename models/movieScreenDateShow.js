module.exports = function(sequelize, DataTypes) {
  var MovieScreenDateShow = sequelize.define("MovieScreenDateShow", {
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  },
  {
    timestamps: false
  });

  MovieScreenDateShow.associate = function(models) {
    MovieScreenDateShow.belongsTo(models.Screen);
    MovieScreenDateShow.belongsTo(models.Movie);
    MovieScreenDateShow.belongsTo(models.ShowTime);

    MovieScreenDateShow.hasMany(models.Reservation);
  };
  
  return MovieScreenDateShow;
};
