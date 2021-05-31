const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProjectTechnology extends Model {}
  ProjectTechnology.init({
    project_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'Projects',
        key: 'id',
      },
    },
    technology_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'Technologies',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    createdAt: false,
    updatedAt: false,
    timestamps: false,
    tableName: 'projects_technologies',
    modelName: 'ProjectTechnology',
    engine: 'InnoDB',
    charset: 'utf8',
    comment: 'All the associations between technologies and projects',
    collate: 'utf8_general_ci',
  });
  return ProjectTechnology;
};
