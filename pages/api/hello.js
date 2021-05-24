// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function mockApiResult() {
  return { name: 'John Doe' };
}

module.exports = {
  default: (req, res) => {
    res.status(200).json(mockApiResult());
  },
  mockApiResult,
};
