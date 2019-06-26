const { ProductsDescription } = require("../models");

class ProductsDescriptionController {
  async store(req, res) {
    const { productType, size, price } = req.body;

    const productDescription = await ProductsDescription.create({
      size,
      price,
      type_id: productType
    });

    return res.status(200).json(productDescription);
  }
}

module.exports = new ProductsDescriptionController();
