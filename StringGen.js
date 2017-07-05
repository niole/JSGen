const { initEnum } = require('./util.js');

const generator = {
  Length: length => {
    // TODO
    return {
      Next: () => new Array(length).fill('a').join(''),
    };
  },

  Enum: initEnum('string'),

  Next: () => {
    // TODO get random string generator
    return 'randomstring';
  },
};


function string(only = null) {
  if (only === null) {
    return generator;
  }
  return {
    Next: () => only,
  };
}

module.exports = string;
