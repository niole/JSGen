const {
  positive,
  negative,
} = require('./util.js');

module.exports = {
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
