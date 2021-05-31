/* eslint import/no-dynamic-require: 0, global-require: 0 */
// Disabled only in this file because useful in this case

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = { ...process.env };
const database = {};
const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASS,
  {
    host: env.DB_HOST,
    port: env.DB_PORT,
    dialect: 'mysql',
    define: { charset: 'utf8', dialectOptions: { collate: 'utf8_general_ci' } },
  });

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    database[model.name] = model;
  });

Object.keys(database).forEach((modelName) => {
  if (database[modelName].associate) {
    database[modelName].associate(database);
  }
});

database.sequelize = sequelize;

module.exports = database;
