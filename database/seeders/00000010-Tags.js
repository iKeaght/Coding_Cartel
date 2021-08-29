const fixedRows = [
  { id: 1, name: 'WEB' },
  { id: 2, name: 'Developpement' },
  { id: 3, name: 'Réseau' },
  { id: 4, name: 'Javascript' },
  { id: 5, name: 'Java' },
  { id: 6, name: 'HTML' },
  { id: 7, name: 'CSS' },
  { id: 8, name: 'Python' },
  { id: 9, name: 'Conférence' },
  { id: 10, name: 'Initiation' },
];

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('tags', fixedRows);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tags', { id: { [Sequelize.Op.lte]: [fixedRows.length] } });
  },
  totalNumberOfRows: fixedRows.length,
};
