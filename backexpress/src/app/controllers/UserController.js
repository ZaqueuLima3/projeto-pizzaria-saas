const { User } = require("../models");

class UserController {
  async store(req, res) {
    const { name, email, password, admin } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      admin
    });

    return res.status(200).json(user);
  }
}

module.exports = new UserController();
