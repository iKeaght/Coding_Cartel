const randomString = require('randomstring');
const { generateDate, generateDateAfter } = require('../helper/helper');

const fixedRows = [
  {
    id: 1,
    name: 'Battle CSS',
    slug: 'battle-css',
    description: 'Une guerre entre stylistes CSS : faire le moins de caractères possible, en moins de temps '
               + 'possible et en reproduisant au mieux une image donnée.',
    start_date: new Date(1632931200000), // September, 29th 2021 at 18:00
    end_date: new Date(1632934800000), // September, 29th 2021 at 19:00
  },
  {
    id: 2,
    name: 'Battle de code',
    slug: 'battle-code',
    description: 'Une guerre entre développeurs : réussir le maximum d\'exercices en un minimum de temps.',
    start_date: new Date(1634830200000), // October, 21st 2021 at 17:30
    end_date: new Date(1634839200000), // October, 21st 2021 at 20:00
  },
  {
    id: 3,
    name: 'Conférence : Programmation orientée objet',
    slug: 'conference-programmation-orientee-objet',
    description: 'Une conférence d\'introduction à la programmation orientée objet. Venez découvrir les concepts et l\'histoire de ce paradigme.',
    start_date: new Date(1635782400000), // November, 1st 2021 at 17:00
    end_date: new Date(1635789600000), // November, 1st 2021 at 19:00
  },
];

const numberOfRandomRows = 12;
const totalNumberOfRows = numberOfRandomRows + fixedRows.length;

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('activities', fixedRows);

    let startDate;
    for (let i = fixedRows.length + 1; i <= totalNumberOfRows; i++) {
      startDate = generateDate();
      await queryInterface.bulkInsert('activities', [{
        id: i,
        name: randomString.generate(),
        slug: randomString.generate(),
        description: randomString.generate(500),
        start_date: startDate,
        end_date: generateDateAfter(startDate),
      }]);
    }
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('activities', { id: { [Sequelize.Op.lte]: [totalNumberOfRows] } });
  },
  totalNumberOfRows,
};
