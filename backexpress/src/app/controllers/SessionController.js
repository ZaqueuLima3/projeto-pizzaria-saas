const { User } = require("../models");

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ error: { message: "user not found!" } });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(400).json({ error: { message: "password incorrect" } });
    }

    req.session.user = user;

    return res.status(200).send(user);
  }
}

module.exports = new SessionController();
