const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEventCommentInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";
  

  if (!Validator.isLength(data.text, { min: 1, max: 500 })) {
    errors.text = "text field be between 1 and 500 characters";
  }

  

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
