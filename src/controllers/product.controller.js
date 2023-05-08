const service = require('../services/product.service');

const sendResponse = (res, { type, message }) => {
  if (type) {
    return res.status(type).json({ message });
  }
  res.status(200).json(message);
};

const getAll = async (req, res) => {
  const result = await service.getAll();
  sendResponse(res, result);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const result = await service.findById(id);
  sendResponse(res, result);
};

const insert = async (req, res) => {
  const { name } = req.body;
  const response = await service.insert(name);
  const { id, name: productName } = response.message;
  res.status(201).json({ id, name: productName });
};

module.exports = { getAll, findById, insert };
