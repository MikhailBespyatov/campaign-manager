import errorMessages from "constants/messages";

const addUserValidator = ({ firstName, lastName, email }) => {
  const errors = {};

  if (!firstName) {
    errors.firstName = [errorMessages.requiredField];
  }

  if (!lastName) {
    errors.lastName = [errorMessages.requiredField];
  }

  if (!email) {
    errors.email = [errorMessages.requiredField];
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = [errorMessages.invalidEmail];
  }

  return errors;
};

export default addUserValidator;
