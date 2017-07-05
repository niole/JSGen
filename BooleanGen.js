const {
  getRandomIndex,
} = require('./util.js');


function bool(only = null) {
  const bools = [true, false];
  if (only === null) {
    return {
      Next: () => bools[getRandomIndex(bools.length)],
    };
  }
  return {
    Next: () => only,
  };
}

module.exports = bool;
