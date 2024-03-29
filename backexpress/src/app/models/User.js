const bcriyt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING,
      admin: DataTypes.BOOLEAN
    },
    {
      hooks: {
        beforeSave: async user => {
          user.password_hash = await bcriyt.hash(user.password, 8);
        }
      }
    }
  );

  User.prototype.checkPassword = function(password) {
    return bcriyt.compare(password, this.password_hash);
  };

  User.prototype.generateToken = function() {
    return jwt.sign({ id: this.id }, process.env.APP_SECRET);
  };

  return User;
};
