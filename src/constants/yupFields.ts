import { passwordMinimum } from 'constants/global';
import {
    atLeastOneNumberRequiredMessage,
    exactLimitMessage,
    invalidEmailMessage,
    oneCapitalCharRequiredMessage,
    passwordLengthMessage,
    requiredFieldMessage
} from 'constants/messages';
import { atLeastOneNumberRequiredRegExp, oneCapitalCharRequiredRegExp } from 'constants/regExp';
import * as Yup from 'yup';

const defaultYupField = Yup.string().required(requiredFieldMessage);

export const yupCompanyName = defaultYupField;
export const yupUsername = defaultYupField;
export const yupEmail = Yup.string().email(invalidEmailMessage).required(requiredFieldMessage);
export const yupEmailNoHint = defaultYupField;
export const yupPassword = Yup.string()
    .required(requiredFieldMessage)
    .min(passwordMinimum, passwordLengthMessage(passwordMinimum))
    .matches(oneCapitalCharRequiredRegExp, oneCapitalCharRequiredMessage)
    .matches(atLeastOneNumberRequiredRegExp, atLeastOneNumberRequiredMessage);
export const yupPasswordNoHint = defaultYupField;
export const yupSecurityCode = defaultYupField;

export const yupWom = defaultYupField;
export const yupCardName = defaultYupField;
export const yupCardNumber = Yup.string()
    .min(19, exactLimitMessage(16))
    .max(19, exactLimitMessage(16))
    .required(requiredFieldMessage);
export const yupExpireDate = Yup.string()
    .min(5, exactLimitMessage(4))
    .max(5, exactLimitMessage(4))
    .required(requiredFieldMessage);
export const yupCvc = Yup.string()
    .min(3, exactLimitMessage(3))
    .max(3, exactLimitMessage(3))
    .required(requiredFieldMessage);
