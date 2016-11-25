import static java.lang.annotation.ElementType.ANNOTATION_TYPE;
import static java.lang.annotation.ElementType.TYPE;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

import validator.impl.CreateRequestValidator;

@Target({TYPE, ANNOTATION_TYPE })
@Retention(RUNTIME)
@Constraint(
    validatedBy = CreateRequestValidator.class)
@Documented
public @interface ValidCreateRequest {
    
    String message() default "default";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};

}
