const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      this.belongsToMany(models.Activity, {
        through: models.ActivityTag, foreignKey: 'tag_id', onDelete: 'CASCADE', onUpdate: 'CASCADE',
      });
    }
  }
  Tag.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(40),
      unique: true,
    },
  },
  {
    sequelize,
    createdAt: false,
    updatedAt: false,
    timestamps: false,
    tableName: 'tags',
    modelName: 'Tag',
    engine: 'InnoDB',
    charset: 'utf8',
    comment: 'All the Coding Cartel\'s tags',
    collate: 'utf8_general_ci',
  });
  return Tag;
};
