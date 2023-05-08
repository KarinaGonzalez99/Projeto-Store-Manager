const express = require('express');
const controller = require('../controllers/product.controller');

const router = express.Router();

router.get('/', controller.getAll);// geral

router.get('/:id', controller.findById); // baseado no id

module.exports = router;
