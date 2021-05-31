const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.belongsToMany(models.Project, {
        through: models.ProjectUser, foreignKey: 'user_id', onDelete: 'CASCADE', onUpdate: 'CASCADE',
      });
    }
  }
  User.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    first_name: {
      allowNull: false,
      type: DataTypes.STRING(40),
    },
    last_name: {
      allowNull: false,
      type: DataTypes.STRING(40),
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING(60),
      validate: {
        isEmail: true,
      },
    },
  }, {
    sequelize,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    tableName: 'users',
    modelName: 'User',
    engine: 'InnoDB',
    charset: 'utf8',
    comment: 'All the Coding Cartel\'s users',
    collate: 'utf8_general_ci',
  });
  return User;
};
