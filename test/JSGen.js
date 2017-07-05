const { assert } = require('chai');
const {
  Boolean,
  Number,
  String,
  Object,
  Array,
} = require('../JSGen.js');

function assertMany(N, assertion) {
  for (let i = 0; i < N; i++) {
    assertion();
  }
}

describe('Boolean generator', function() {
  it('should be able to create a random Boolean generator', function() {
    const b = Boolean();

    assertMany(100, () => assert.isBoolean(b.Next(), "should be a boolean"));
  });

  it('should be able to create a true Boolean generator', function() {
    const b = Boolean(true);
    assertMany(100, () => assert.strictEqual(b.Next(), true, "should be true"));
  });

  it('should be able to create a false Boolean generator', function() {
    const b = Boolean(false);
    assertMany(100, () => assert.strictEqual(b.Next(), false, "should be false"));
  });

});

describe('String generator', function() {
  it('should be able to create a random String generator', function() {
    const s = String();
    assertMany(100, () => assert.isString(s.Next(), "must be a string"));
    assert.notStrictEqual(s.Next(), s.Next(), "strings must not match");
  });

  it('should be able to return specified string', function() {
    const string = 'cat';
    const s = String(string);
    assertMany(100, () => assert.strictEqual(s.Next(), string, `string should be ${string}`));
  });

  it('should return string of specific length', function() {
    const s = String().Length(5);
    assertMany(100, () => assert.strictEqual(s.Next().length, 5, "length should be 5"));
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

describe('Number generator', function() {
  it('should be able to generate Numbers', function() {
    const n = Number();
    assertMany(100, () => assert.isNumber(n.Next(), "should be a number"));
    assert.notStrictEqual(n.Next(), n.Next(), "shouldn't be equal");
  });

  it('should be able to generate constat Numbers', function() {
    const n = Number(89);
    assertMany(100, () => assert.strictEqual(n.Next(), 89, "should be 89"));
  });

  it('should be able to generate only negatives', function() {
    const n = Number().Negative();
    assertMany(100, () => assert.isTrue(n.Next() < 0, "should be negative"));
    assert.notStrictEqual(n.Next(), n.Next(), "shouldn't be equal");
  });

  it('should be able to only generate positives', function() {
    const n = Number().Positive();
    assertMany(100, () => assert.isTrue(n.Next() > -1, "should be positive"));
    assert.notStrictEqual(n.Next(), n.Next(), "shouldn't be equal");
  });

  it('should be able to generate enum of Numbers', function(done) {
    const enm = [1,55,864,-2455,0];
    const n = Number().Enum.apply(null, enm);

    while(enm.length > 0) {
      const found = enm.indexOf(n.Next());
      if (found > -1) {
        enm.splice(found, 1);
      }
    }
    assert.notOk(enm.length, "returned all elements in enum");
    done();
  });

  it('should be able to generate within a range of Numbers', function() {
    const below = 6;
    const atLeast = -5;
    const n = Number().Range(atLeast, below);
    assertMany(100, () => {
      const output = n.Next();
      assert.isBelow(output, below, `should be below ${below}`);
      assert.isAtLeast(output, atLeast, `should be at least ${atLeast}`);
    });
  });
});

describe('Array generator', function() {
  it('should generate Number[]', function() {
    const a = Array(Number());
    assertMany(100, () => {
      const A = a.Next();
      assert.isArray(A, "should be an array")
      if (A.length) {
        assert.isNumber(A[0], "if not empty, should contain Numbers");
      }
    });
  });

  it('should generate array of same number if specified', function() {
    const n = 300;
    const a = Array(Number(n));
    assertMany(100, () => {
      const A = a.Next();
      assert.isArray(A, "should be an array")
      if (A.length) {
        const found = A.find(e => e !== n);
        assert.isNotOk(found, `all elements should equal ${n}`);
      }
    });
  });

  it('should generate String[]', function() {
    const a = Array(String());
    assertMany(100, () => {
      const A = a.Next();
      assert.isArray(A, "should be an array")
      if (A.length) {
        assert.isString(A[0], "if not empty, should contain strings");
      }
    });
  });

  it('should generate same string if specified', function() {
    const s = 'loopdeloop';
    const a = Array(String(s));
    assertMany(100, () => {
      const A = a.Next();
      assert.isArray(A, "should be an array")
      if (A.length) {
        const found = A.find(e => e !== s);
        assert.isNotOk(found, `all elements should equal ${s}`);
      }
    });
  });

  it('should generate Boolean[]', function() {
    const a = Array(Boolean());
    assertMany(100, () => {
      const B = a.Next();
      assert.isArray(B, "should be an array")
      if (B.length) {
        assert.isBoolean(B[0], "if not empty, should contain booleans");
      }
    });
  });

  it('should generate same boolean if specified', function() {
    const b = false;
    const a = Array(Boolean(b));
    assertMany(100, () => {
      const A = a.Next();
      assert.isArray(A, "should be an array")
      if (A.length) {
        const found = A.find(e => e !== b);
        assert.isNotOk(found, `all elements should equal ${b}`);
      }
    });
  });

});
