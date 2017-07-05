const NumberGen = require('./NumberGen.js');
const StringGen = require('./StringGen.js');
const BooleanGen = require('./BooleanGen.js');


const JSGen = {
  Array: () => {
  },

  String: StringGen,

  Object: () => {
  },

  Number: NumberGen,

  Boolean: BooleanGen,

};

module.exports = JSGen;
