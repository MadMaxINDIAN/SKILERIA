const validator = require("validator");
const isEmpty = require("./is_empty");

module.exports = function validateEmailInput(data) {
    let errors ={};

    data.email = !isEmpty(data.email) ? data.email.toLowerCase() : "";

    if (!validator.isEmail(data.email)){
        errors.email = 'Email is invalid';
    }
    if (validator.isEmpty(data.email)){
        errors.email = 'Field is required';
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}