'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.User,{foreignKey:'user_id', as : 'user'});
      Comment.belongsTo(models.Gallery,{foreignKey:'gallery_id', as : 'gallery'});

    }
  };
  Comment.init({
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
  }, {
    sequelize,
    modelName: 'Comment',
    timestamps : true,
    paranoid : true,
  });
  return Comment;
};