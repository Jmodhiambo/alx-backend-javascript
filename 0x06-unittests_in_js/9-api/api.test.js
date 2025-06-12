const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const url = 'http://localhost:7865';

  it('Correct status code?', (done) => {
    request.get(url, (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request.get(url, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  const base = 'http://localhost:7865/cart';

  it('Returns 200 when :id is a number', (done) => {
    request.get(`${base}/12`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('Returns 404 when :id is NOT a number', (done) => {
    request.get(`${base}/hello`, (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('Returns 404 for negative or invalid IDs', (done) => {
    request.get(`${base}/-5`, (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
