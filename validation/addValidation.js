const Validator = require('validator');
const isEmpty = require('./isEmpty');

const validateAddInput = (data) => {
    let errors = {};

    //check name
    if(isEmpty(data.name)) {
        errors.name = "Name field cannot be empty";
    }else if (!Validator.isLength(data.name, {min:2, max:30})){
        errors.name ="Name must be in between 2-30 characters";
    }

    //check quantity
    if(isEmpty(data.quantity)) {
        errors.quantity = "Quantity field cannot be empty";
    }else if (!Validator.isNumeric(data.quantity)){
        errors.name ="Quantity must be numeric";
    }
    
    return{
        errors,
        isValid: isEmpty(errors),
    }
};

module.exports = validateAddInput;