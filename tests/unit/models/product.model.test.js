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
    const sinonStub = sinon.stub(connection, 'execute').resolves([[mock]]);

    const response = await model.getAll();
    expect(response).to.be.an('array');
  });

  it('', async () => {
    const id = 999;
    const sinonStub = sinon.stub(connection, 'execute').resolves([[]]);

    try {
      await model.findById(id);
    } catch (error) {
      expect(error).to.be.an('error');
      expect(error.message).to.equal(`Error fetching product with ID ${id}: Product not found`);
    }
  });
});
