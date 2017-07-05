const NumberGen = require('./NumberGen.js');
const StringGen = require('./StringGen.js');
const BooleanGen = require('./BooleanGen.js');
const ArrayGen = require('./ArrayGen.js');
const ObjectGen = require('./ObjectGen.js');


const JSGen = {
  Array: ArrayGen,

  String: StringGen,

  Object: ObjectGen,

  Number: NumberGen,

  Boolean: BooleanGen,

};

module.exports = JSGen;
