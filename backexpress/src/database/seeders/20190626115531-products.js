"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Pizza",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Refrigerante",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Massa",
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", {
      [Sequelize.Op.or]: [
        { name: "Pizza" },
        { name: "Refrigerante" },
        { name: "Massa" }
      ]
    });
  }
};
