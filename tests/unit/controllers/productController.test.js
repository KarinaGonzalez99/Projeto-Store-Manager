const chai = require("chai");
const { expect } = chai;

const sinon = require("sinon");
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

const mock = require("./mock/product.mock");
const service = require("../../../src/services/product.service");
const controller = require("../../../src/controllers/product.controller");

describe('Controller testes', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('', async () => {
    const getAllStub = sinon.stub(service, "getAll").resolves({
      type: null,
      message: [mock],
    });

    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    await controller.getAll(req, res);
    expect(getAllStub.calledOnce).to.be.true;
  });

  it('', async () => {
    const id = sinon.stub(service, "findById").resolves({
      type: null,
      message: [mock],
    });

    const req = {
      params: {
        id: 1,
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    await controller.findById(req, res);
    expect(id.calledWith(req.params.id)).to.be.true;
  });
});
