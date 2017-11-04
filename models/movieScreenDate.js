module.exports = function(sequelize, DataTypes) {
  var MovieScreenDate = sequelize.define("MovieScreenDate", {
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  },
  {
    timestamps: false
  });

  // MovieScreenDate.associate = function(models) {
  //   MovieScreenDate.belongsTo(models.Screen);
  //   MovieScreenDate.belongsTo(models.Movie);
    
  //   MovieScreenDate.hasMany(models.MovieScreenDateShow);
  // };

  return MovieScreenDate;
};
