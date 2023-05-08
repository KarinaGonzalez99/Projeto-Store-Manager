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

  it('', async () => {
      const id = 1;
      const product = mock;

      const findByIdStub = sinon.stub(model, 'findById').resolves(product);

      const response = await service.findById(id);

      expect(findByIdStub.calledOnceWith(id)).to.be.true;
      expect(response.type).to.be.null;
      expect(response.message).to.deep.equal(product);
  });

   it('', async () => {
      const name = 'New Product';
      const newProduct = mock;

      const insertStub = sinon.stub(model, 'insert').resolves(newProduct);

      const response = await service.insert(name);

      expect(insertStub.calledOnceWith(name)).to.be.true;
      expect(response.type).to.equal(201);
      expect(response.message).to.deep.equal(newProduct);
   });

  it('', async () => {
      const name = "";
      const expected = {
        type: 400,
        message: { message: '"name" is required' },
      };

      const result = await service.idUp(1, name);

      expect(result).to.deep.equal(expected);
    });

    it('', async () => {
      const name = "Produto atualizado";
      const id = 999;
      const expected = {
        type: 404,
        message: { message: "Product not found" },
      };

      sinon.stub(model, "idUp").resolves({ changedRows: 0 });

      const result = await service.idUp(id, name);

      expect(result).to.deep.equal(expected);
    });

    it('', async () => {
      const name = "Produto atualizado";
      const id = 1;
      const expected = {
        type: 200,
        message: { id, name },
      };

      sinon.stub(model, "idUp").resolves({ changedRows: 1 });
      sinon.stub(service, "validateName").resolves(null);

      const result = await service.idUp(id, name);

      expect(result).to.deep.equal(expected);
    });

});
