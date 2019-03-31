const Joi = require('joi')

module.exports = Joi.array().items(Joi.any().valid('gold', 'coal', 'iron', 'other')).single()
