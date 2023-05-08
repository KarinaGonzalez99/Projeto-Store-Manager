const service = require('../services/sales.service');

const getAllAdd = async (req, res) => {
  const sale = req.body;
  const index = await service.getAllAdd(sale);
  return index.type
    ? res.status(index.type).json({ message: index.message })
    : res.status(201).json(index);
};

const getAll = async (_req, res) => {
  const sale = await service.getAll();
  return res.status(200).json(sale);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const i = await service.getById(id);
  return i.type ? res.status(i.type).json({ message: i.message }) : res.status(200).json(i);
};

module.exports = { getAllAdd, getAll, getById };
