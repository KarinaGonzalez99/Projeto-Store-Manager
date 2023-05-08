const joi = require('joi');

const saleMiddle = (req, res, next) => {
  const saleSchema = joi.array().items(joi.object({
    productId: joi.number().required().messages({
      'any.required': '"productId" is required',
    }),
    quantity: joi.number().required().min(1).messages({
    'any.required': '"quantity" is required',
    'number.min': '"quantity" must be greater than or equal to {{#limit}}',
  }),
  }));

  const { error } = saleSchema.validate(req.body);
  if (error) {
    const { message, type } = error.details[0];
    if (type === 'any.required') return res.status(400).json({ message });
    if (type === 'number.min') return res.status(422).json({ message });
  }
  return next();
};

module.exports = { saleMiddle };
