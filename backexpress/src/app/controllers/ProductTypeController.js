const { ProductsType } = require("../models");

class ProductTypeController {
  async store(req, res) {
    const { type, product } = req.body;

    const productType = await ProductsType.create({
      name: type,
      product_id: product
    });

    return res.status(200).json(productType);
  }
}

module.exports = new ProductTypeController();
