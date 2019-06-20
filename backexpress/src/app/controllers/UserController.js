const { User } = require("../models");

class UserController {
  async store(req, res) {
    const data = req.body;

    // console.log(data);

    const user = await User.create(data);

    return res.status(200).json(user);
  }
}

module.exports = new UserController();
