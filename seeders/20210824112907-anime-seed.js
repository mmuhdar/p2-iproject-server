"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const jikan = require("../apis/jikan");
    const { data } = await jikan.get("/top/anime/2/tv");
    const newData = data.top.map((el) => {
      delete el.rank;
      delete el.url;
      delete el.start_date;
      delete el.end_date;
      delete el.members;
      delete el.score;
      el.createdAt = new Date();
      el.updatedAt = new Date();
      return el;
    });
    await queryInterface.bulkInsert("Animes", newData);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Animes", null, {});
  },
};
