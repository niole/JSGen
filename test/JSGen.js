const { assert } = require('chai');
const {
  Boolean,
  Number,
  String,
  Object,
  Array,
} = require('../JSGen.js');

describe('Boolean generator', function() {
  it('should be able to create a random Boolean generator', function() {
    const b = Boolean();

    assert.isBoolean(b.Next(), "should be a boolean");
    assert.isBoolean(b.Next(), "should be a boolean");
    assert.isBoolean(b.Next(), "should be a boolean");
  });

  it('should be able to create a true Boolean generator', function() {
    const b = Boolean(true);

    assert.strictEqual(b.Next(), true, "should be true");
    assert.strictEqual(b.Next(), true, "should be true");
    assert.strictEqual(b.Next(), true, "should be true");
  });

  it('should be able to create a false Boolean generator', function() {

    const b = Boolean(false);

    assert.strictEqual(b.Next(), false, "should be false");
    assert.strictEqual(b.Next(), false, "should be false");
    assert.strictEqual(b.Next(), false, "should be false");
  });

});

describe('String generator', function() {
  it('should be able to create a random String generator', function() {
    const s = String();

    assert.isString(s.Next(), "must be a string");
    assert.isString(s.Next(), "must be a string");
    assert.isString(s.Next(), "must be a string");

    assert.notStrictEqual(s.Next(), s.Next(), "strings must not match");
  });

  it('should be able to return specified string', function() {
    const string = 'cat';
    const s = String(string);

    assert.strictEqual(s.Next(), string, `string should be ${string}`);
    assert.strictEqual(s.Next(), string, `string should be ${string}`);
    assert.strictEqual(s.Next(), string, `string should be ${string}`);
  });

  it('should return string of specific length', function() {
    const s = String().Length(5);

    assert.strictEqual(s.Next().length, 5, "length should be 5");
    assert.strictEqual(s.Next().length, 5, "length should be 5");
    assert.strictEqual(s.Next().length, 5, "length should be 5");

    assert.notStrictEqual(s.Next(), s.Next(), "strings must not match");
  });

  it('should eventually return all strings from enum', function(done) {
    const enm = ['a', 'b', 'c'];
    const s = String().Enum.apply(null, enm);

    while(enm.length > 0) {
      const found = enm.indexOf(s.Next());
      if (found > -1) {
        enm.splice(found, 1);
      }
    }
    assert.notOk(enm.length, "returned all elements in enum");
    done();

  });
});

