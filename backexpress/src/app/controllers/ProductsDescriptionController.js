const { ProductsDescription } = require("../models");

class ProductsDescriptionController {
  async index(req, res) {
    const products = await ProductsDescription.findAll();

    return res.json(products);
  }

  async store(req, res) {
    const { productType, size, price } = req.body;

    const productDescription = await ProductsDescription.create({
      size,
      price,
      products_type_id: productType
    });

    return res.status(200).json(productDescription);
  }
}

module.exports = new ProductsDescriptionController();
