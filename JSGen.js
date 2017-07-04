const StringGen = require('./StringGen.js');
const NumberGen = require('./NumberGen.js');
const { getRandomIndex } = require('./util.js');


function number(only = null) {
  if (only === null) {
    // number can be limited to a range, or no range
    return NumberGen;
  }
  return {
    Next: () => only,
  };
}

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

function string(only = null) {
  if (only === null) {
    return StringGen;
  }
  return {
    Next: () => only,
  };
}

const JSGen = {
  Array: () => {
  },

  String: string,

  Object: () => {
  },

  Number: number,

  Boolean: bool,

  Length: () => {
  },

  Enum: () => {
  }

};

module.exports = JSGen;
