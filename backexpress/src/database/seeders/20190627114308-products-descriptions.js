"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let itens = [];
    for (let i = 1; i <= 3; i++) {
      let Products = [
        {
          size: "pequena",
          price: "25,00",
          products_type_id: i,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          size: "media",
          price: "37,00",
          products_type_id: i,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          size: "grande",
          price: "50,00",
          products_type_id: i,
          created_at: new Date(),
          updated_at: new Date()
        }
      ];

      itens = [...itens, ...Products];
    }

    return queryInterface.bulkInsert("products_descriptions", itens, {});
  },

  down: (queryInterface, Sequelize) => {
    let itens = [];
    for (i = 1; i <= 9; i++) {
      itens = [
        {
          id: i
        }
      ];
    }

    return queryInterface.bulkDelete("products_descriptions", {
      [Sequelize.Op.or]: [...itens]
    });
  }
};
