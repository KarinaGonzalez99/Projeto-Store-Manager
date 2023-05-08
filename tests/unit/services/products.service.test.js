const { expect } = require("chai");
const sinon = require("sinon");

const mock = require("./mock/product.mock");
const model = require("../../../src/models/product.model");
const service = require("../../../src/services/product.service");

describe('Services testes', () => {
  beforeEach(() => {
    sinon.restore();
  });

  it('', async () => {
    sinon.stub(model, 'getAll').resolves([mock]);
    const response = await service.getAll();
    expect(response.message).to.be.an('array');
  });

  it('', async () => {
    sinon.stub(model, 'findById').resolves(mock[0]);
    const response = await service.findById(1);
    expect(response.message).to.have.property('id');
  });
})
