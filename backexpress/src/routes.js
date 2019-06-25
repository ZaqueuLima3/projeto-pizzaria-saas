const express = require("express");

const routes = express.Router();

const UserController = require("./app/controllers/UserController");
const ProductController = require("./app/controllers/ProductController");
const SessionController = require("./app/controllers/SessionController");

const authMiddleware = require("./app/middlewares/auth");
const isAdminMiddleware = require("./app/middlewares/isAdmin");

routes.post("/signup", UserController.store);
routes.post("/signin", SessionController.store);

routes.use(authMiddleware);
routes.use(isAdminMiddleware);

routes.get("/dashboard", (req, res) => {
  return res.status(200).send();
});

routes.post("/products", ProductController.store);

module.exports = routes;
