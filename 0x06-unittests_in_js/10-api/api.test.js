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
});

describe('Available payments', () => {
  it('Returns correct JSON structure and values', (done) => {
    request.get('http://localhost:7865/available_payments', { json: true }, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('Login endpoint', () => {
  it('Returns welcome message with userName', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: { userName: 'Betty' }
    };

    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
