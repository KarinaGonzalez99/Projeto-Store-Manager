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

const insert = async (name) => {
  try {
    const newProduct = await model.insert(name);
    return { type: 201, message: newProduct };
  } catch (error) {
    console.error('Error inserting product:', error);
    throw error;
  }
};

module.exports = { getAll, findById, insert };
