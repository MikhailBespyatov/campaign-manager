// error form
export const requiredFieldMessage = 'This field is required';
export const invalidEmailMessage = 'This email format is invalid';
export const exactLimitMessage = (limit: number) => 'This field has exactly ' + limit + ' symbols';

export const passwordLengthMessage = (min: number) => 'The password must be at least ' + min + ' characters long';
export const oneCapitalCharRequiredMessage = 'At least one uppercase char required';
export const atLeastOneNumberRequiredMessage = 'At least on number char required';

export const passwordPatternMessage = 'The password must contain a digit and an uppercase character';
export const repeatPasswordMessage = 'Please, repeat your password';
export const matchPasswordsMessage = 'Passwords are not identical';
export const tagInvalidMessage = "A hashtag cannot have any '#' or whitespaces within the content.";

// error auth
export const errorDataMessage = 'Your data is incorrect';
export const notEntryAllowedMessage = 'You have no rights to enter';

const errorMessages = {
    requiredField: 'This field is required',
    invalidEmail: 'This email format is invalid',
    passwordLength: 'The password must be at least 8 characters long',
    passwordPattern: 'The password must contain a digit and an uppercase character',
    confirmPasswordRequired: 'Please, repeat your password',
    confirmPasswordShouldMatch: 'Passwords are not identical',
    tagIsInvalid: "A hashtag cannot have any '#' or whitespaces within the content."
};

export default errorMessages;
