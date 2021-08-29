const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    static associate(models) {
      this.belongsToMany(models.Tag, {
        through: models.ActivityTag, foreignKey: 'activity_id', onDelete: 'CASCADE', onUpdate: 'CASCADE',
      });
    }
  }
  Activity.init({
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
      type: DataTypes.DATE,
    },
    end_date: {
      allowNull: false,
      type: DataTypes.DATE,
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
    tableName: 'activities',
    modelName: 'Activity',
    engine: 'InnoDB',
    charset: 'utf8',
    comment: 'All the Coding Cartel\'s activities',
    collate: 'utf8_general_ci',
  });
  return Activity;
};
