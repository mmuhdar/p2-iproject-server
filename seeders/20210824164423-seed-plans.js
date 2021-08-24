"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Plans", [
      {
        name: "Basic",
        price: 75000,
        duration: 1,
        description: "Can login with 3 devices",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Intermediate",
        price: 200000,
        duration: 3,
        description: "Can login with 6 devices",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Premium",
        price: 250000,
        duration: 5,
        description: "Can login with 10 devices",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Plans", null, {});
  }
};
