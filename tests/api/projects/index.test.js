/* eslint-disable no-undef */
const fetch = require('node-fetch');

test('Fetch projects', async () => {
  await fetch('http://localhost:3000/api/projects').then((res) => expect(res.status).toBe(200));
});
