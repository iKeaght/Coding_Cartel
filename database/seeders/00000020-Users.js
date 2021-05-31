const randomString = require('randomstring');

const fixedRows = [
  {
    id: 1,
    first_name: 'Admin',
    last_name: '',
    email: 'admin@email.com',
  },
  {
    id: 2,
    first_name: 'Jean',
    last_name: 'Dupond',
    email: 'jean.dupond@email.com',
  },
  {
    id: 3,
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@email.com',
  },
];

const numberOfRandomRows = 7;
const totalNumberOfRows = numberOfRandomRows + fixedRows.length;

module.exports = {
  up: async (queryInterface/* , Sequelize */) => {
    await queryInterface.bulkInsert('users', fixedRows);

    let firstName;
    let lastName;
    let user;
    for (let i = fixedRows.length + 1; i <= totalNumberOfRows; i++) {
      firstName = randomString.generate(10);
      lastName = randomString.generate(10);
      user = {
        id: i,
        first_name: firstName,
        last_name: lastName,
        email: `${firstName}.${lastName}@email.com`,
      };
      await queryInterface.bulkInsert('users', [user]);
    }
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', { id: { [Sequelize.Op.lte]: [totalNumberOfRows] } });
  },
  totalNumberOfRows,
};
