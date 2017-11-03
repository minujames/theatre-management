module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name:{
      type: DataTypes.STRING,
      allowNull: true
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    passWord: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM,
      values: ['user', 'admin', 'supervisor']
    }
  });

  User.associate = function(models) {
    User.hasMany(models.Reservation);
  };

  return User;
};
