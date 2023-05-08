const { expect } = require("chai");
const sinon = require("sinon");

const mock = require("../models/mock/product.mock");
const model = require("../../../src/models/product.model");
const service = require("../../../src/services/product.service");

describe("Service testes", () => {
  afterEach(() => {
    sinon.restore();
  });

  it('', async () => {
    sinon.stub(model, "getAll").resolves([mock]);
    const response = await service.getAll();
    expect(response.type).to.be.null;
    expect(response.message).to.be.an("array");
    expect(response.message).to.have.lengthOf(1);
  });

  it('', async () => {
    sinon.stub(model, "findById").resolves(null);
    const response = await service.findById(999);
    expect(response.type).to.equal(404);
    expect(response.message).to.equal("Product not found");
  });
});
