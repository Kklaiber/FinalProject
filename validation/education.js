const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};

  //Check If required field is empty
  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.school)) {
    errors.school = "School Field Is Required";
  }
  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Degree Field Is Required";
  }
  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Field Of Study Field Is Required";
  }
  if (Validator.isEmpty(data.from)) {
    errors.from = "From Date Field Is Required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
