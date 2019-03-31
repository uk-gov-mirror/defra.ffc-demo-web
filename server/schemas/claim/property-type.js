const Joi = require('joi')

module.exports = Joi.any().valid('home', 'business').required()
