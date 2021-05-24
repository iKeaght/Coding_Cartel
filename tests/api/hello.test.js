/* eslint-disable no-undef */
const { mockApiResult } = require('../../pages/api/hello');

test('Return JSON object', () => {
  expect(JSON.stringify(mockApiResult())).toBe(JSON.stringify({ name: 'John Doe' }));
});
