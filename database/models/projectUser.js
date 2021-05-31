const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProjectUser extends Model {}
  ProjectUser.init({
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
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    createdAt: false,
    updatedAt: false,
    timestamps: false,
    tableName: 'projects_users',
    modelName: 'ProjectUser',
    engine: 'InnoDB',
    charset: 'utf8',
    comment: 'All the associations between projects and users',
    collate: 'utf8_general_ci',
  });
  return ProjectUser;
};
