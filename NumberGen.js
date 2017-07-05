const {
  positive,
  negative,
} = require('./util.js');

function number(only = null) {
  if (only === null) {
    // number can be limited to a range, or no range
    return generator;
  }
  return {
    Next: () => only,
  };
}


const generator = {
  Range: (start, end) => {
    const range = end - start;
    return {
      Next: () => Math.floor(Math.random() * range + start),
    };
  },

  Positive: () => {
    return {
      Next: positive,
    };
  },

  Negative: () => {
    return {
      Next: negative,
    };
  },

  Next: () => {
    if (Math.random() < .5) {
      return positive();
    }
    return negative();
  }
};

module.exports = number;
