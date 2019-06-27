const { ProductsType } = require("../models");

class ProductTypeController {
  async store(req, res) {
    const { type, product } = req.body;

    if (!type) {
      return res
        .status(401)
        .json({ message: "you should be set the field type" });
    }

    const productType = await ProductsType.create({
      name: type,
      product_id: product
    });

    return res.status(200).json(productType);
  }
}

module.exports = new ProductTypeController();
