/* eslint-disable no-undef */
const fetch = require('node-fetch');

test('Fetch activities', async () => {
  await fetch('http://localhost:3000/api/activities').then((res) => expect(res.status).toBe(200));
});
