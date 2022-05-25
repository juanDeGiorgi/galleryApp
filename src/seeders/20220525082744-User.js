'use strict';
const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {




    await queryInterface.bulkInsert('users', [
      {
      name: 'Admin',
      email: 'juanma@gmail.com',
      image: 'https://cdn.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.webp',
      password: bcryptjs.hashSync(1234,10),
      createdAt: new Date(),
      updatedAt: new Date(),
      lastLogin: new Date(),
      role_id: 0
    },      
    {
      name: 'Standard',
      email: 'eze@gmail.com',
      image: 'https://cdn.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.webp',
      password: bcryptjs.hashSync(12345,10),
      createdAt: new Date(),
      updatedAt: new Date(),
      lastLogin: new Date(),
      role_id: 1
    },  

  ], {});

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
