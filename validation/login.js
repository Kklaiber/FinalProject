const Validator = require("validator");
const isEmpty = require("./is-empty");


module.exports = function validateLoginInput(data) {
  let errors = {};

  //Check If required field is empty
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email Is Invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email Is Required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password Is Required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
