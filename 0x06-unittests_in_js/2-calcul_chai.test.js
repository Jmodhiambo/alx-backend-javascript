const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 for SUM of (1.4, 4.5)', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 5 for SUM of (1.2, 3.7)', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });

    it('should return 0 for SUM of (-1.4, 1.4)', () => {
      expect(calculateNumber('SUM', -1.4, 1.4)).to.equal(0);
    });

    it('should return -1 for SUM of (-1.4, -0.4)', () => {
      expect(calculateNumber('SUM', -1.4, -0.4)).to.equal(-1);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 for SUBTRACT of (1.4, 4.5)', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 0 for SUBTRACT of (1.4, 1.4)', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 1.4)).to.equal(0);
    });

    it('should return -1 for SUBTRACT of (1.4, 1.5)', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 1.5)).to.equal(-1);
    });

    it('should return -1 for SUBTRACT of (0.3, 1.4)', () => {
      expect(calculateNumber('SUBTRACT', 0.3, 1.4)).to.equal(-1);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 for DIVIDE of (1.4, 4.5)', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return Error for DIVIDE of (1.4, 0)', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return Error for DIVIDE of (1.4, 0.2)', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0.2)).to.equal('Error');
    });

    it('should return 2.5 for DIVIDE of (4.5, 2.2)', () => {
      expect(calculateNumber('DIVIDE', 4.5, 2.2)).to.equal(2.5);
    });

    it('should return -1 for DIVIDE of (1.4, -1.2)', () => {
      expect(calculateNumber('DIVIDE', 1.4, -1.2)).to.equal(-1);
    });
  });

  describe('Invalid type fallback', () => {
    it('should return 0 for unsupported operation', () => {
      expect(calculateNumber('MULTIPLY', 2, 3)).to.equal(0);
    });
  });
});
