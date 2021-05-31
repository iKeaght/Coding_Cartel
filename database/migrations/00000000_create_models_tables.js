const { sequelize } = require('../models');

module.exports = {
  up: async (/* queryInterface, Sequelize */) => {
    await sequelize.sync({ force: true, logging: false });
  },
  down: async (queryInterface/* , Sequelize */) => {
    await queryInterface.dropTable('projects_technologies');
    await queryInterface.dropTable('projects_users');
    await queryInterface.dropTable('activities_users');
    await queryInterface.dropTable('activities_tags');
    await queryInterface.dropTable('technologies');
    await queryInterface.dropTable('users');
    await queryInterface.dropTable('projects');
    await queryInterface.dropTable('activities');
    await queryInterface.dropTable('tags');
    await queryInterface.dropTable('sequelizemeta');
  },
};
