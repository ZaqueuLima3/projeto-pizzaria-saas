require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

const express = require("express");
const session = require("express-session");

class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== "production";

    this.middlewars();
    this.routes();
  }

  middlewars() {
    this.express.use(express.json());
    this.express.use(
      session({
        secret: "MyAppSecret",
        resave: false,
        saveUninitialized: false
      })
    );
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App().express;
