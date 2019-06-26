const express = require("express");

const routes = express.Router();

const authMiddleware = require("./app/middlewares/auth");
const isAdminMiddleware = require("./app/middlewares/isAdmin");

const UserController = require("./app/controllers/UserController");
const SessionController = require("./app/controllers/SessionController");

const ProductController = require("./app/controllers/ProductController");
const ProductTypeController = require("./app/controllers/ProductTypeController");
const ProductsDescription = require("./app/controllers/ProductsDescriptionController");

routes.post("/signup", UserController.store);
routes.post("/signin", SessionController.store);

routes.use(authMiddleware);
routes.use(isAdminMiddleware);

routes.get("/dashboard", (req, res) => {
  return res.status(200).send();
});

routes.post("/products", ProductController.store);
routes.get("/products", ProductController.index);

routes.get("/products/newtype", ProductTypeController.store);
routes.get("/products/newsize", ProductsDescription.store);

module.exports = routes;
