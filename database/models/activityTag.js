const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ActivityTag extends Model {}
  ActivityTag.init({
    activity_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'Activities',
        key: 'id',
      },
    },
    tag_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'Tags',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    createdAt: false,
    updatedAt: false,
    timestamps: false,
    tableName: 'activities_tags',
    modelName: 'ActivityTag',
    engine: 'InnoDB',
    charset: 'utf8',
    comment: 'All the associations between activities and tags',
    collate: 'utf8_general_ci',
  });
  return ActivityTag;
};
