import errorMessages from "constants/messages";

const addOrganizationValidator = ({
  companyName,
  mandatoryTag,
  adminFirstName,
  adminLastName,
  adminEmail,
}) => {
  const errors = {};

  if (!companyName) {
    errors.companyName = [errorMessages.requiredField];
  }

  if (!mandatoryTag) {
    errors.mandatoryTag = [errorMessages.requiredField];
  } else if (
    mandatoryTag.includes(" ") ||
    mandatoryTag.includes("#") ||
    mandatoryTag.length > 20
  ) {
    errors.mandatoryTag = [errorMessages.tagIsInvalid];
  }

  if (!adminFirstName) {
    errors.adminFirstName = [errorMessages.requiredField];
  }

  if (!adminLastName) {
    errors.adminLastName = [errorMessages.requiredField];
  }

  if (!adminEmail) {
    errors.adminEmail = [errorMessages.requiredField];
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(adminEmail)) {
    errors.adminEmail = [errorMessages.invalidEmail];
  }

  return errors;
};

export default addOrganizationValidator;
