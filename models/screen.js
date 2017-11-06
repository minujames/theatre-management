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
    Screen.belongsToMany(models.ShowTime, {
      through: {
        model: models.Show,
        unique: false
      },
      foreignKey: 'screenId'
    });
  };

  return Screen;
};
