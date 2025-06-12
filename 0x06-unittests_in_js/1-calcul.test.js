const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 for SUM of (1.4, 4.5)', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 5 for SUM of (1.2, 3.7)', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });

    it('should return 0 for SUM of (-1.4, 1.4)', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, 1.4), 0);
    });

    it('should return -1 for SUM of (-1.4, -0.4)', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, -0.4), -1);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 for SUBTRACT of (1.4, 4.5)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 0 for SUBTRACT of (1.4, 1.4)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 1.4), 0);
    });

    it('should return -1 for SUBTRACT of (1.4, 1.5)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 1.5), -1);
    });

    it('should return -1 for SUBTRACT of (0.3, 1.4)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.3, 1.4), -1);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 for DIVIDE of (1.4, 4.5)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return Error for DIVIDE of (1.4, 0)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return Error for DIVIDE of (1.4, 0.2)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.2), 'Error');
    });

    it('should return 2.5 for DIVIDE of (4.5, 2.2)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.5, 2.2), 2.5);
    });

    it('should return -1 for DIVIDE of (1.4, -1.2)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, -1.2), -1);
    });
  });

  describe('Invalid type fallback', () => {
    it('should return 0 for unsupported operation', () => {
      assert.strictEqual(calculateNumber('MULTIPLY', 2, 3), 0);
    });
  });
});
