import errorMessages from "constants/messages";

const requestCodeValidator = ({ email }) => {
  const errors = {};
  if (!email) {
    errors.email = [errorMessages.requiredField];
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = [errorMessages.invalidEmail];
  }
  return errors;
};

export default requestCodeValidator;
