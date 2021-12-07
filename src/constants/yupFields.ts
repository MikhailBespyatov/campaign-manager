import { passwordMinimum } from 'constants/global';
import {
    atLeastOneNumberRequiredMessage,
    exactLimitMessage,
    incorrectIdMessage,
    invalidEmailMessage,
    oneCapitalCharRequiredMessage,
    onlySimpleCharactersAllowedMessage,
    passwordLengthMessage,
    requiredFieldMessage,
    requiredSetMessage
} from 'constants/messages';
import {
    atLeastOneNumberRequiredRegExp,
    oneCapitalCharRequiredRegExp,
    onlySimpleCharactersAllowedRegExp,
    onlySymbolAndNumbersRegExp
} from 'constants/regExp';
import { Rule } from 'effector-forms';
import urlRegex from 'url-regex';
import * as Yup from 'yup';

export function createRule<V, T = any>({ schema, name }: { schema: Yup.Schema<T>; name: string }): Rule<V> {
    return {
        name,
        validator: (v: V) => {
            try {
                schema.validateSync(v);
                return {
                    isValid: true,
                    value: v
                };
            } catch (err) {
                return {
                    isValid: false,
                    value: v,
                    errorText: err.message
                };
            }
        }
    };
}

export const yupDefault = Yup.string().required(requiredFieldMessage);
export const yupDefaultArray = Yup.array().of(yupDefault).required(requiredSetMessage);
export const yupChannels = Yup.array();

export const yupCompanyName = yupDefault.matches(onlySimpleCharactersAllowedRegExp, onlySimpleCharactersAllowedMessage);
export const yupId = yupDefault.matches(onlySymbolAndNumbersRegExp, incorrectIdMessage);
export const yupCategory = yupDefault.matches(onlySymbolAndNumbersRegExp, incorrectIdMessage);
export const yupUsername = yupDefault;
export const yupProductName = yupDefault;
export const yupEmail = Yup.string().email(invalidEmailMessage).required(requiredFieldMessage);
export const yupEmailNoHint = yupDefault;
export const yupPassword = Yup.string()
    .required(requiredFieldMessage)
    .min(passwordMinimum, passwordLengthMessage(passwordMinimum))
    .matches(oneCapitalCharRequiredRegExp, oneCapitalCharRequiredMessage)
    .matches(atLeastOneNumberRequiredRegExp, atLeastOneNumberRequiredMessage);
export const yupRepeatPassword = Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required(requiredFieldMessage);
export const yupPasswordNoHint = yupDefault;
export const yupSecurityCode = yupDefault;
export const yupUrl = Yup.string().matches(urlRegex(), 'Please enter website');
export const yupString = Yup.string();

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
