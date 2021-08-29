const randomString = require('randomstring');
const { generateDate, generateDateAfter } = require('../helper/helper');

function generateRandomProjectType() {
  const types = ['CESI', 'Communautaire', 'Coding Cartel', 'Personnel', 'Entrepreunarial'];
  return types[Math.floor((Math.random() * 5))];
}

const fixedRows = [
  {
    id: 1,
    name: 'Site du Coding Cartel',
    slug: 'site-coding-cartel',
    description: 'Améliorer, maintenir et créer de nouvelles fonctionnalités au site du Coding Cartel.',
    start_date: new Date(1621116000000), // May, 16th 2021
    end_date: new Date(1625090400000), // July, 1st 2021
    type: 'Coding Cartel',
  },
  {
    id: 2,
    name: 'Site du BDE',
    slug: 'site-bde',
    description: 'Améliorer, maintenir et créer de nouvelles fonctionnalités au site du BDE CESI LYON.',
    start_date: new Date(1632088800000), // September, 20th 2021
    end_date: new Date(1637362800000), // November, 20th 2021
    type: 'Communautaire',
  },
  {
    id: 3,
    name: 'Portfolio - Dupond',
    slug: 'portfolio-dupond',
    description: 'Portfolio de Jean Dupond avec Wordpress.',
    start_date: new Date(1632693600000), // September, 27th 2021
    end_date: new Date(1635458400000), // October, 29th 2021
    type: 'Personnel',
  },
  {
    id: 4,
    name: 'VPN',
    slug: 'vpn',
    description: 'Mise en place d\'un VPN pour le CESI de Lyon',
    start_date: new Date(1632088800000), // September, 20th 2021
    end_date: new Date(1632261600000), // September, 22nd 2021
    type: 'CESI',
  },
];

const numberOfRandomRows = 11;
const totalNumberOfRows = numberOfRandomRows + fixedRows.length;

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('projects', fixedRows);

    let startDate;
    for (let i = fixedRows.length + 1; i <= totalNumberOfRows; i++) {
      startDate = generateDate();
      await queryInterface.bulkInsert('projects', [{
        id: i,
        name: randomString.generate(),
        slug: randomString.generate(),
        description: randomString.generate(500),
        start_date: startDate,
        end_date: generateDateAfter(startDate),
        type: generateRandomProjectType(),
      }]);
    }
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('projects', { id: { [Sequelize.Op.lte]: totalNumberOfRows } });
  },
  totalNumberOfRows,
};
