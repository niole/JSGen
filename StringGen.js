const { initEnum } = require('./util.js');


module.exports = {
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
