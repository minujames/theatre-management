module.exports = function(sequelize, DataTypes) {
  var MovieScreenDate = sequelize.define("MovieScreenDate", {
  // id: {
  //   type: DataTypes.INTEGER,
  //   primaryKey: true,
  //   autoIncrement: true
  // },
    date: {
      type: DataTypes.DATEONLY,
      primaryKey: true,
      allowNull: false
    }
  },
  {
    timestamps: false
  });


  // MovieScreenDate.associate = function(models) {
  //   MovieScreenDate.belongsTo(models.ShowTime);
  //   MovieScreenDate.belongsToMany(models.User, {through: models.Reservation})
  // };

  // MovieScreenDate.associate = function(models) {
  //   MovieScreenDate.belongsTo(models.Screen);
  //   MovieScreenDate.belongsTo(models.Movie);
    
  //   MovieScreenDate.hasMany(models.MovieScreenDateShow);
  // };

  return MovieScreenDate;
};
