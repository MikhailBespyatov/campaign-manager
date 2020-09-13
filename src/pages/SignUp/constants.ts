import { passwordMinimum } from 'constants/global';
import {
    atLeastOneNumberRequiredMessage,
    invalidEmailMessage,
    oneCapitalCharRequiredMessage,
    passwordLengthMessage,
    requiredFieldMessage
} from 'constants/messages';
import { atLeastOneNumberRequiredRegExp, oneCapitalCharRequiredRegExp } from 'constants/regExp';
import { FormikErrors } from 'formik';
import { userEffects, userEvents, userStores } from 'stores/user';
import { RegisterUserRequest } from 'types';
import * as Yup from 'yup';

export const initialValues = { email: '', password: '', companyName: '', username: '' };

export const validationSchema = Yup.object().shape({
    companyName: Yup.string().required(requiredFieldMessage),
    username: Yup.string().required(requiredFieldMessage),
    email: Yup.string().email(invalidEmailMessage).required(requiredFieldMessage),
    password: Yup.string()
        .required(requiredFieldMessage)
        .min(passwordMinimum, passwordLengthMessage(passwordMinimum))
        .matches(oneCapitalCharRequiredRegExp, oneCapitalCharRequiredMessage)
        .matches(atLeastOneNumberRequiredRegExp, atLeastOneNumberRequiredMessage)
});

interface SetErrorsFormikProps {
    setErrors: (
        errors: FormikErrors<{
            email?: string;
            password?: string;
        }>
    ) => void;
}

export const onSubmit = (values: RegisterUserRequest, { setErrors }: SetErrorsFormikProps) => {
    const unwatch = userStores.auth.watch(userEvents.setAuth, ({ authDenyReason }) => {
        setErrors({
            email: authDenyReason,
            password: authDenyReason
        });
        unwatch();
    });
    userEffects.createUserAndLoadToken(values);
};
