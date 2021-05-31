const fixedRows = [
  { id: 1, name: 'ReactJS' },
  { id: 2, name: 'NodeJS' },
  { id: 3, name: 'Javascript' },
  { id: 4, name: 'PHP' },
  { id: 5, name: 'Java' },
  { id: 6, name: 'HTML' },
  { id: 7, name: 'CSS' },
  { id: 8, name: 'Python' },
  { id: 9, name: 'C++' },
  { id: 10, name: 'NextJS' },
];

module.exports = {
  up: async (queryInterface/* , Sequelize */) => {
    await queryInterface.bulkInsert('technologies', fixedRows);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('technologies', { id: { [Sequelize.Op.lte]: [fixedRows.length] } });
  },
  totalNumberOfRows: fixedRows.length,
};
