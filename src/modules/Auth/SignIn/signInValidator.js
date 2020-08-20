import errorMessages from 'constants/errorMessages';

const signInValidator = ({ email, password }) => {
  const errors = {};
  if (!email) {
    errors.email = [errorMessages.requiredField];
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = [errorMessages.invalidEmail];
  }
  if (!password) {
    errors.password = [errorMessages.requiredField];
  }
  return errors;
};

export default signInValidator;
