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
  },
  {
    timestamps: false
  });

  Screen.associate = function(models) {
    Screen.hasMany(models.MovieScreenDateShow);
  };

  return Screen;
};
