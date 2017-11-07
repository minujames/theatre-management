module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name:{
      type: DataTypes.STRING,
      allowNull: true
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    passWord: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM,
      values: ['user', 'admin', 'supervisor']
    }
  },
  {
    timestamps: false
  });

  User.associate = function(models) {
    User.belongsToMany(models.Show,{
      through: {
        model: models.Reservation,
        unique: false
      }
    });
  };

  return User;
};
