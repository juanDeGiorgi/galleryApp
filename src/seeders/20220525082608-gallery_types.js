module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('gallery_types', [
      {
        name: 'famous authors',
        description: 'more commnon famous authors category',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'amateurs authors',
        description: 'amateurs authors category',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('gallery_types', null, {});
  },
};
