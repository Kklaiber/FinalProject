const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateInterestsInput(data) {
  let errors = {};

  data.interests = !isEmpty(data.interests) ? data.interests : '';

  if (Validator.isEmpty(data.interests)) {
    errors.interests = 'interests field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
