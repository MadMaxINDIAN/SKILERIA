const validator = require("validator");
const isEmpty = require("./is_empty");

module.exports = function validateGoogleTokenId(data) {
    let errors ={};

    data.tokenId = !isEmpty(data.tokenId) ? data.tokenId : "";

    if (validator.isEmpty(data.tokenId)){
        errors.tokenId = 'GOOGLE token Id is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}