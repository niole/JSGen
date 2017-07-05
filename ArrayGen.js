const { getRandomIndex } = require('./util.js');


const upperBound = 100;

function populateArray(child, length) {
  const a = new Array(length).fill(null);
  return a.map(e => child.Next());
}

function array(child) {
  return {
    Length: length => {
      return {
        Next: () => populateArray(child, length),
      };
    },

    Next: () => {
      const randomLength = getRandomIndex(upperBound + 1);
      return populateArray(child, randomLength);
    },
  };
}

module.exports = array;
