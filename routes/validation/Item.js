const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateItemInput(data) {
  let errors = {};

  data.itemName = !isEmpty(data.itemName) ? data.itemName : '';
  data.itemDesc = !isEmpty(data.itemDesc) ? data.itemDesc : '';
  data.price = !isEmpty(data.price) ? data.price : '';

  if (Validator.isEmpty(data.itemName)) {
    errors.itemName = 'Item Name field is required';
  }

  if (Validator.isEmpty(data.itemDesc)) {
    errors.itemDesc = 'Item Description field is required';
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = 'Item Price field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};