const { User } = require("../models");

module.exports = async (req, res, next) => {
  const id = req.userId;

  const user = await User.findOne({ where: { id } });

  if (!user.admin) {
    return res
      .status(401)
      .json({ message: "you must be admin to access this section" });
  }

  return next();
};
