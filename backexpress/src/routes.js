const express = require("express");

const routes = express.Router();

const UserController = require("./app/controllers/UserController");
const SessionController = require("./app/controllers/SessionController");

const authMiddleware = require("./app/middlewares/auth");

routes.post("/signup", UserController.store);
routes.post("/signin", SessionController.store);

routes.use(authMiddleware);

routes.get("/dashboard", (req, res) => {
  return res.status(200).send();
});

module.exports = routes;
