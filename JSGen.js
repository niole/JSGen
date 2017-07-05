const NumberGen = require('./NumberGen.js');
const StringGen = require('./StringGen.js');
const BooleanGen = require('./BooleanGen.js');
const ArrayGen = require('./ArrayGen.js');


const JSGen = {
  Array: ArrayGen,

  String: StringGen,

  Object: () => {
  },

  Number: NumberGen,

  Boolean: BooleanGen,

};

module.exports = JSGen;
