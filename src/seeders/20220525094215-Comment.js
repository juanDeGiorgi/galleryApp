'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('comments', [{
      id: 1,
      content: 'Great photo, beatiful work!',
      createdAt:new Date(),
      updatedAt:new Date(),
      user_id: 1,
      gallery_id: 1,

    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
