module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('roles', [
      {
        name: 'admin',
        description: 'admin user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'standard',
        description: 'standard user',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('roles', null, {});
  },
};
