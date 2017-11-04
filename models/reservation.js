module.exports = function(sequelize, DataTypes) {
  var Reservation = sequelize.define("Reservation", {
    seats: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Reservation.associate = function(models) {
    Reservation.belongsTo(models.User);
    Reservation.belongsTo(models.MovieScreenDateShow);
  };

  return Reservation;
};
