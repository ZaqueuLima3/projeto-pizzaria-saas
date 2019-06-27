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

routes.get("/products", ProductsDescription.index);

routes.use(isAdminMiddleware);

routes.get("/dashboard", (req, res) => {
  return res.status(200).send();
});

routes.post("/products", ProductController.store);
routes.post("/products/newtype", ProductTypeController.store);
routes.post("/products/newsize", ProductsDescription.store);

module.exports = routes;
