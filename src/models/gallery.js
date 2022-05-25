const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Gallery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate = (models) => {
      Gallery.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' });
      Gallery.belongsTo(models.GalleryType, { foreignKey: 'gallery_type_id', as: 'gallery_types' });
    };
  }

  Gallery.init({
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    source: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gallery_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    deletedAt: {
      allowNull: true,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Gallery',
    timestamps: true,
    paranoid: true,
  });

  return Gallery;
};
