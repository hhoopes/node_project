const Joi = require('joi');

module.exports = function() {
  Joi.objecteId = require('joi-objectid')(Joi);
}