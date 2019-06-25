"use strict";
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: DataTypes.STRING
  });
  Product.associate = models => {
    Product.hasMany(models.ProductsType);
  };

  return Product;
};
