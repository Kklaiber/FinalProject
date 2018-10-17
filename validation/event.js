const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEventInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.when = !isEmpty(data.when) ? data.when : "";
  data.time = !isEmpty(data.time) ? data.time : "";
  data.where = !isEmpty(data.where) ? data.where : "";
  data.childcare = !isEmpty(data.childcare) ? data.childcare : "";
  data.kidfriendly = !isEmpty(data.kidfriendly) ? data.kidfriendly : "";

  if (!Validator.isLength(data.description, { min: 10, max: 1000 })) {
    errors.description = "Description must be between 10 and 1000 characters";
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title of event is required";
  }
  if (Validator.isEmpty(data.description)) {
    errors.description = "Description of event is required";
  }

  if (Validator.isEmpty(data.when)) {
    errors.when = "Must include date of event";
  }
  if (Validator.isEmpty(data.time)) {
    errors.time = "Time of event is required";
  }
  if (Validator.isEmpty(data.where)) {
    errors.where = "Location of event is required";
  }
  if (Validator.isEmpty(data.childcare)) {
    errors.childcare = "Must inform if childcare is provided";
  }
  if (Validator.isEmpty(data.kidfriendly)) {
    errors.kidfriendly = "Must include if event is family friendly";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
