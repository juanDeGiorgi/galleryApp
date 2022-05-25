module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('galleries', [{
      title: 'example gallery',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius iste, necessitatibus consectetur, velit suscipit officiis assumenda saepe nulla, fugiat qui praesentium ex similique obcaecati culpa sed modi recusandae. Dicta, laborum.',
      author: 'example author',
      year: new Date(),
      source: 'https://github.com/juanDeGiorgi/galleryApp',
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 1,
      gallery_type_id: 1,
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('galleries', null, {});
  },
};
