const express = require('express');
const controller = require('../controllers/product.controller');
const middleware = require('../middlewares/products.validation');

const router = express.Router();

router.get('/', controller.getAll);// geral

router.get('/:id', controller.findById); // baseado no id

router.post('/', middleware, controller.insert);

router.put('/:id', controller.updateProduct);

module.exports = router;
