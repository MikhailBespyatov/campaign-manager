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

export const yupDefault = Yup.string().required(requiredFieldMessage);

export const yupCompanyName = yupDefault;
export const yupUsername = yupDefault;
export const yupEmail = Yup.string().email(invalidEmailMessage).required(requiredFieldMessage);
export const yupEmailNoHint = yupDefault;
export const yupPassword = Yup.string()
    .required(requiredFieldMessage)
    .min(passwordMinimum, passwordLengthMessage(passwordMinimum))
    .matches(oneCapitalCharRequiredRegExp, oneCapitalCharRequiredMessage)
    .matches(atLeastOneNumberRequiredRegExp, atLeastOneNumberRequiredMessage);
export const yupPasswordNoHint = yupDefault;
export const yupSecurityCode = yupDefault;

export const yupWom = yupDefault;
export const yupCardName = yupDefault;
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
