module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('images', [{
      name: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      gallery_id: 1,
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('images', null, {});
  },
};
