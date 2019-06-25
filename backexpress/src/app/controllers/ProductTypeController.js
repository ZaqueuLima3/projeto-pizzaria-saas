const { ProductsType, ProductsDescription } = require("../models");

class ProductTypeController {
  async store(req, res) {
    const { type, size, price } = req.body;
    const { id } = req.param;

    const productType = await ProductsType.create({
      name: type,
      product_id: id
    });

    const productDescription = await ProductsDescription.create({
      size,
      price,
      type_id: productType.id
    });

    return res.status(200).json(product);
  }
}

module.exports = new ProductTypeController();
