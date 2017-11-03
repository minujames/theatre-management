module.exports = function(sequelize, DataTypes) {
  var Reservation = sequelize.define("Reservation", {
    seats: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  // Reservation.associate = function(models) {
  //   Reservation.hasMany(models.MovieScreenDateShow, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });

  //   Reservation.hasMany(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Reservation;
};
