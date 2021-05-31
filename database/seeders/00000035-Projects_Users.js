const { totalNumberOfRows: projectsTotalNumberOfRows } = require('./00000015-Projects');
const { totalNumberOfRows: usersTotalNumberOfRows } = require('./00000020-Users');
const { generateRandomTuples } = require('./helper/helper');

const fixedRows = [
  { project_id: 1, user_id: 1 },
  { project_id: 2, user_id: 1 },
  { project_id: 3, user_id: 1 },
  { project_id: 4, user_id: 1 },
  { project_id: 1, user_id: 2 },
  { project_id: 2, user_id: 2 },
  { project_id: 3, user_id: 2 },
  { project_id: 2, user_id: 3 },
];

const numberOfRandomRows = 42;
const totalNumberOfRows = numberOfRandomRows + fixedRows.length;

const tableName = 'projects_users';
module.exports = {
  up: async (queryInterface/* , Sequelize */) => {
    await queryInterface.bulkInsert(tableName, fixedRows);

    const tuples = generateRandomTuples(
      { min: 5, max: projectsTotalNumberOfRows },
      { min: 1, max: usersTotalNumberOfRows },
      numberOfRandomRows,
    );

    let tuple;
    for (let i = tuples.length - 1; i >= 0; i--) {
      tuple = tuples[i];
      await queryInterface.bulkInsert(tableName, [{
        project_id: tuple[0],
        user_id: tuple[1],
      }], { ignoreDuplicates: true });
    }
  },
  down: async (queryInterface/* , Sequelize */) => {
    await queryInterface.sequelize.query(`DELETE FROM ${tableName} LIMIT ${totalNumberOfRows}`);
  },
};
