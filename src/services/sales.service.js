const modelS = require('../models/sales.models');
const modelP = require('../models/product.model');

const getAllAdd = async (index) => {
  const produto = await modelP.getAll();
  const id = produto.map((product) => product.id);
  const idMap = index.every((product) => id.includes(product.productId));
  const errorResponse = !idMap ? { type: 404, message: 'Product not found' } : null;
if (errorResponse) return errorResponse;
const insertId = await modelS.getAllAdd();
const promises = index.map(async (product) => {
  await modelS.prodSale({ saleId: insertId, ...product });
});
await Promise.all(promises);
  return { id: insertId, itemsSold: index };
};

const getAll = async () => {
const sale = await modelS.getAll();
return sale;
};

const getById = async (id) => {
const i = await modelS.getById(id);
return i.length === 0 ? { type: 404, message: 'Sale not found' } : i;
};

module.exports = { getAllAdd, getAll, getById };
