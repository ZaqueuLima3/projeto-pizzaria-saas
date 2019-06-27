module.exports = (sequelize, DataTypes) => {
  const ProductsDescription = sequelize.define("ProductsDescription", {
    size: DataTypes.STRING,
    price: DataTypes.STRING
  });
  ProductsDescription.associate = models => {
    ProductsDescription.belongsTo(models.ProductsType, {
      foreignKey: "products_type_id"
    });
  };

  return ProductsDescription;
};
