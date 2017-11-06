module.exports = function(sequelize, DataTypes) {

  var Show = sequelize.define("Show", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      unique: 'date_screen_showtime'
    },
    screenId: {
      type: DataTypes.INTEGER,
      unique: 'date_screen_showtime'
    },
    showtimeId: {
      type: DataTypes.INTEGER,
      unique: 'date_screen_showtime'
    }
  },
  {
    timestamps: false
  });

  Show.associate = function(models) {
    Show.belongsTo(models.Movie);
    Show.belongsTo(models.Screen, {
      foreignKey: 'screenId'
    });
    Show.belongsTo(models.ShowTime, {
      foreignKey: 'showtimeId'
    });

    Show.belongsToMany(models.User,{
      through: {
        model: models.Reservation,
        unique: false
      }
    });
  };
  
  return Show;
};