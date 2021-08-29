const { generateRandomTuples } = require('../helper/helper');
const { totalNumberOfRows: activitiesTotalNumberOfRows } = require('./00000025-Activities');
const { totalNumberOfRows: tagsTotalNumberOfRows } = require('./00000010-Tags');

const fixedRows = [
  { activity_id: 1, tag_id: 1 },
  { activity_id: 1, tag_id: 2 },
  { activity_id: 1, tag_id: 7 },
  { activity_id: 2, tag_id: 2 },
  { activity_id: 2, tag_id: 4 },
  { activity_id: 2, tag_id: 5 },
  { activity_id: 2, tag_id: 8 },
  { activity_id: 3, tag_id: 5 },
  { activity_id: 3, tag_id: 9 },
  { activity_id: 3, tag_id: 10 },
];

const numberOfRandomRows = 20;
const totalNumberOfRows = numberOfRandomRows + fixedRows.length;

const tableName = 'activities_tags';
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(tableName, fixedRows);

    const tuples = generateRandomTuples(
      { min: 4, max: activitiesTotalNumberOfRows },
      { min: 1, max: tagsTotalNumberOfRows },
      numberOfRandomRows,
    );

    let tuple;
    for (let i = tuples.length - 1; i >= 0; i--) {
      tuple = tuples[i];
      await queryInterface.bulkInsert(tableName, [{
        activity_id: tuple[0],
        tag_id: tuple[1],
      }], { ignoreDuplicates: true });
    }
  },
  down: async (queryInterface) => {
    await queryInterface.sequelize.query(`DELETE FROM ${tableName} LIMIT ${totalNumberOfRows}`);
  },
};
