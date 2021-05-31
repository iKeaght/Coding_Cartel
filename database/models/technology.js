const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Technology extends Model {
    static associate(models) {
      this.belongsToMany(models.Project, {
        through: models.ProjectTechnology, foreignKey: 'technology_id', onDelete: 'CASCADE', onUpdate: 'CASCADE',
      });
    }
  }
  Technology.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(30),
      unique: true,
    },
  },
  {
    sequelize,
    createdAt: false,
    updatedAt: false,
    timestamps: false,
    tableName: 'technologies',
    modelName: 'Technology',
    engine: 'InnoDB',
    charset: 'utf8',
    comment: 'All the technologies used by the Coding Cartel',
    collate: 'utf8_general_ci',
  });
  return Technology;
};
