const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let stub;
  let spy;

  beforeEach(() => {
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    stub.restore();
    spy.restore();
  });

  it('should call Utils.calculateNumber with correct arguments', () => {
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });

  it('should log "The total is: 10"', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
