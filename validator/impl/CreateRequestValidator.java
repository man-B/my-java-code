package validator.impl;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import CreateRequest;
import validator.ValidCreateRequest;

public class CreateRequestValidator implements ConstraintValidator<ValidCreateRequest, CreateRequest> {
    
    @Override
    public void initialize(ValidCreateRequest constraintAnnotation) {
    }
    
    @Override
    public boolean isValid(CreateRequest request, ConstraintValidatorContext context) {
        boolean valid = false;
        context.disableDefaultConstraintViolation();
       
        	if(valid == false)
        		context.buildConstraintViolationWithTemplate("evolve.create.claim.error").addConstraintViolation();
        }
        return valid;
    }

}
