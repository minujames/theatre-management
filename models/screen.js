module.exports = function(sequelize, DataTypes) {
  var Screen = sequelize.define("Screen", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    seats: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Screen.associate = function(models) {
    Screen.hasMany(models.MovieScreenDate);
  };

  return Screen;
};
