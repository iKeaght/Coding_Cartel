/* eslint-disable no-undef */
const fetch = require('node-fetch');

// The server has to be started to pass the tests

test('Home page', async () => {
  await fetch('http://localhost:3000/').then((res) => expect(res.status).toBe(200));
});

test('Activities page', async () => {
  await fetch('http://localhost:3000/activites').then((res) => expect(res.status).toBe(200));
});

test('Contact page', async () => {
  await fetch('http://localhost:3000/contact').then((res) => expect(res.status).toBe(200));
});

test('Projects page', async () => {
  await fetch('http://localhost:3000/projets').then((res) => expect(res.status).toBe(200));
});

test('Vision page', async () => {
  await fetch('http://localhost:3000/vision').then((res) => expect(res.status).toBe(200));
});

test('About page', async () => {
  await fetch('http://localhost:3000/a-propos').then((res) => expect(res.status).toBe(200));
});
