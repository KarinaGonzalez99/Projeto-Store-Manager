const { expect } = require('chai');
const sinon = require('sinon');

const mock = require("./mock/product.mock");
const model = require('../../../src/models/product.model');
const connection = require('../../../src/models/connection');

describe('Model testes', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('', async () => {
    const sinonStub = sinon.stub(connection, 'execute').resolves([mock]);

    const response = await model.getAll();
    expect(response).to.be.an('array');
  });

  it('', async () => {
    const sinonStub = sinon.stub(connection, 'execute').resolves([[mock]]);
    const id = 1;

    const response = await model.findById(id);
    expect(response).to.have.property('id');
  });
});
