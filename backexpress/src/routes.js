const express = require("express");

const routes = express.Router();

const UserController = require("./app/controllers/UserController");
const SessionController = require("./app/controllers/SessionController");

routes.post("/signup", UserController.store);
routes.post("/signin", SessionController.store);

module.exports = routes;
