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
  };

  return ShowTime;
};
