const model = require('../models/product.model');

const getAll = async () => {
  const product = await model.getAll();
  return { type: null, message: product };
};

const findById = async (id) => {
  const product = await model.findById(id);
  if (!product) return { type: 404, message: 'Product not found' };
  return { type: null, message: product };
};

module.exports = { getAll, findById };
