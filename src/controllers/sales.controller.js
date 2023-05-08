const service = require('../services/sales.service');

const getAll = async (req, res) => {
  const sale = req.body;
  const index = await service.getAll(sale);
  return index.type
    ? res.status(index.type).json({ message: index.message })
    : res.status(201).json(index);
};

module.exports = { getAll };
