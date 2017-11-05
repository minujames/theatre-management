module.exports = function(sequelize, DataTypes) {
  var Reservation = sequelize.define("Reservation", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
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
