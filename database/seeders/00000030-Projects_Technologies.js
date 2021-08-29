const { totalNumberOfRows: projectsTotalNumberOfRows } = require('./00000015-Projects');
const { totalNumberOfRows: technologiesTotalNumberOfRows } = require('./00000005-Technologies');
const { generateRandomTuples } = require('../helper/helper');

const fixedRows = [
  { project_id: 1, technology_id: 1 },
  { project_id: 1, technology_id: 2 },
  { project_id: 1, technology_id: 3 },
  { project_id: 1, technology_id: 7 },
  { project_id: 1, technology_id: 10 },
  { project_id: 2, technology_id: 1 },
  { project_id: 2, technology_id: 2 },
  { project_id: 2, technology_id: 10 },
  { project_id: 3, technology_id: 4 },
  { project_id: 4, technology_id: 8 },
];

const numberOfRandomRows = 40;
const totalNumberOfRows = numberOfRandomRows + fixedRows.length;

const tableName = 'projects_technologies';
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(tableName, fixedRows);

    const tuples = generateRandomTuples(
      { min: 5, max: projectsTotalNumberOfRows },
      { min: 1, max: technologiesTotalNumberOfRows },
      numberOfRandomRows,
    );

    let tuple;
    for (let i = tuples.length - 1; i >= 0; i--) {
      tuple = tuples[i];
      await queryInterface.bulkInsert(tableName, [{
        project_id: tuple[0],
        technology_id: tuple[1],
      }], { ignoreDuplicates: true });
    }
  },
  down: async (queryInterface) => {
    await queryInterface.sequelize.query(`DELETE FROM ${tableName} LIMIT ${totalNumberOfRows}`);
  },
};
