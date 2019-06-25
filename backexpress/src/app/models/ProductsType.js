module.exports = (sequelize, DataTypes) => {
  const ProductsType = sequelize.define("ProductsType", {
    name: DataTypes.STRING
  });
  ProductsType.associate = models => {
    ProductsType.belongsTo(models.Product, { foreignKey: "product_id" });
    ProductsType.hasMany(models.ProductsDescription);
  };

  return ProductsType;
};
