'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content:{
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull : false,
        references: {
          model: 'User',
          key: 'id'
        },
        onUpdate : 'CASCADE',
        onDelete : 'CASCADE',
      }, 
      gallery_id: {
        type: DataTypes.INTEGER,
        allowNull : false,
        references: {
          model: 'Gallery',
          key: 'id'
        },
        onUpdate : 'CASCADE',
        onDelete : 'CASCADE',
      }, 
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('comments');
  }
};