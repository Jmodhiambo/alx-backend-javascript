const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 for the input (1, 3)', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 for the input (1, 3.7)', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 for the input (1.2, 3.7)', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 4 for the input (1.5, 3.7)', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });
});
