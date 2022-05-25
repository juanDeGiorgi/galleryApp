const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Admin',
        email: 'juanma@gmail.com',
        image: 'https://cdn.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.webp',
        password: bcryptjs.hashSync('1234', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
        lastLogin: new Date(),
        role_id: 1,
      },
      {
        name: 'Standard',
        email: 'eze@gmail.com',
        image: 'https://cdn.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.webp',
        password: bcryptjs.hashSync('12345', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
        lastLogin: new Date(),
        role_id: 2,
      }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('People', null, {});
  },
};
