const slugifyLib = require('slugify');

function generateDate() {
  // Adds or substracts up to one year to the current date
  // (Math.random() - 0.5) --> Permits addition or substraction (~50% ratio)
  // * 2 --> Extends the interval to [-1;1[
  // * 24 * 60 * 60 * 1000) --> Ranks up the modification to a day basis (in milliseconds)
  // * Math.round(Math.random() * 365) --> Randomizes the number of days to add or substract
  return new Date(Date.now() + ((Math.random() - 0.5) * 2 * 24 * 60 * 60 * 1000) * Math.round(Math.random() * 365));
}

function generateDateAfter(date) {
  return new Date(date + Math.round(Math.random() * 365) * 24 * 60 * 60 * 1000);
}

function generateRandomIntegerFromZeroTo(number, offset = 0) {
  return Math.round(Math.random() * (number - offset)) + offset;
}

function shuffleArray(array) {
  const arrayCopy = array.slice();
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }
  return arrayCopy;
}

function generateRandomTuples(firstNumber = { min: 0, max: 1 }, secondNumber = { min: 0, max: 1 }, numberOfRandomTuples = 0) {
  let possibilities = [];
  for (let first = firstNumber.min; first <= firstNumber.max; first++) {
    for (let second = secondNumber.min; second <= secondNumber.max; second++) {
      possibilities.push([first, second]);
    }
  }

  if (numberOfRandomTuples > possibilities.length) {
    console.error(`Only ${possibilities.length} possibilities available and generated. Demanded : ${numberOfRandomTuples}.`);
  }

  possibilities = shuffleArray(possibilities);

  return possibilities.slice(0, numberOfRandomTuples);
}

function slugify(stringToSlugify) {
  return slugifyLib(stringToSlugify, {
    replacement: '-',
    remove: /[*+~.()'"!:@,]/g,
    lower: true,
    strict: true,
    locale: 'fr',
    trim: true,
  });
}

module.exports = {
  generateDate,
  generateDateAfter,
  generateRandomIntegerFromZeroTo,
  generateRandomTuples,
  slugify,
};
