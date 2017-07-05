const randomstring = require('randomstring');
const { initEnum } = require('./util.js');


const generator = {
  Length: length => {
    // TODO
    return {
      Next: () => randomstring.generate(length),
    };
  },

  Enum: initEnum('string'),

  Next: () => randomstring.generate(),
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
