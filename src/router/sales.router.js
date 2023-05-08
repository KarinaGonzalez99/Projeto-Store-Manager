const express = require('express');
const controller = require('../controllers/sales.controller');
const middleware = require('../middlewares/sales.validation');

const sales = express.Router();

sales.post('/', middleware.saleMiddle, controller.getAllAdd);
sales.get('/', controller.getAll);
sales.get('/:id', controller.getById);

module.exports = sales;
