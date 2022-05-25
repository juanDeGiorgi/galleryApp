const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GalleryType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate = (models) => {
      GalleryType.hasMany(models.Gallery, { as: 'galleries' });
    };
  }
  GalleryType.init({
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deletedAt: {
      allowNull: true,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'GalleryType',
    timestamps: true,
    paranoid: true,
  });

  return GalleryType;
};
