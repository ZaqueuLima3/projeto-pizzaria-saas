"use strict";
const { Product } = require("../../app/models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const pizza = await Product.findOne({ where: { name: "Pizza" } });

    return queryInterface.bulkInsert(
      "products_types",
      [
        {
          name: "Calabreza",
          product_id: pizza.id,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "4 Queijos",
          product_id: pizza.id,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Vegetariana",
          product_id: pizza.id,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products_types", {
      [Sequelize.Op.or]: [
        { name: "Calabreza" },
        { name: "4 Queijos" },
        { name: "Vegetariana" }
      ]
    });
  }
};
