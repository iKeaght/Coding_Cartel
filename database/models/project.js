const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
      this.belongsToMany(models.Technology, {
        through: models.ProjectTechnology, foreignKey: 'project_id', onDelete: 'CASCADE', onUpdate: 'CASCADE',
      });
      this.belongsToMany(models.User, {
        through: models.ProjectUser, foreignKey: 'project_id', onDelete: 'CASCADE', onUpdate: 'CASCADE',
      });
    }
  }
  Project.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(80),
    },
    slug: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    start_date: {
      allowNull: false,
      type: DataTypes.DATEONLY,
    },
    end_date: {
      allowNull: true,
      type: DataTypes.DATEONLY,
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING(30),
    },
    image: {
      allowNull: true,
      type: DataTypes.STRING(200),
    },
  },
  {
    sequelize,
    createdAt: false,
    updatedAt: false,
    timestamps: false,
    tableName: 'projects',
    modelName: 'Project',
    engine: 'InnoDB',
    charset: 'utf8',
    comment: 'All the Coding Cartel\'s projects',
    collate: 'utf8_general_ci',
  });
  return Project;
};
