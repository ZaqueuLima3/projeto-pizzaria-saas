const { Product } = require("../models");

class ProductController {
  async index(req, res) {
    const products = await Product.findAll();

    return res.json(products);
  }

  async store(req, res) {
    const { name } = req.body;

    if (!name) {
      return res.status(401).json({ message: "the product name is required" });
    }

    const product = await Product.create({ name });

    return res.status(200).json(product);
  }
}

module.exports = new ProductController();
