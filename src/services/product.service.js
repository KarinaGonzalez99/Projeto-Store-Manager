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

const validateName = async (name) => {
  const nome = name ? name.trim() : '';

  if (!nome) {
    return {
      type: 400,
      message: { message: '"name" is required' },
    };
  }

  if (nome.length < 5) {
    return {
      type: 422,
      message: { message: '"name" length must be at least 5 characters long' },
    };
  }

  return null;
};

const idUp = async (id, name) => {
  const validationError = await validateName(name);
  if (validationError) {
    return validationError;
  }
  const products = await model.idUp(id, name);
  if (products.changedRows === 0) {
    return {
      type: 404,
      message: { message: 'Product not found' },
    };
  }
  return {
    type: 200,
    message: { id, name },
  };
};

module.exports = { getAll, findById, insert, idUp };
