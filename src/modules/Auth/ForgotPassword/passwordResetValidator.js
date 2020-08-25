import errorMessages from "constants/messages";

const passwordResetValidator = ({
  confirmationToken,
  password,
  confirmPassword,
}) => {
  const errors = {};
  const regex = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/;

  if (!confirmationToken) {
    errors.confirmationToken = [errorMessages.requiredField];
  }

  if (!password) {
    errors.password = [errorMessages.requiredField];
  } else if (password.length < 8) {
    errors.password = [errorMessages.passwordLength];
  } else if (!regex.test(password)) {
    errors.password = [errorMessages.passwordPattern];
  }

  if (errors.password && !confirmPassword) {
    errors.confirmPassword = [errorMessages.confirmPasswordRequired];
  } else if (password !== confirmPassword) {
    errors.confirmPassword = [errorMessages.confirmPasswordShouldMatch];
  }

  return errors;
};

export default passwordResetValidator;
