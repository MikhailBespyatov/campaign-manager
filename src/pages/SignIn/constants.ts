import { yupEmailNoHint, yupPasswordNoHint } from 'constants/yupFields';
import { FormikErrors } from 'formik';
import { userEffects, userEvents, userStores } from 'stores/user';
import { AuthUserRequest } from 'types';
import * as Yup from 'yup';

export const formTitle = 'Log In'; // 'Hello, please enter your email and password';
export const linkMarginTop = '0';
export const linkMarginBottom = '57px';

export const initialValues = { email: '', password: '' };

export const validationSchema = Yup.object().shape({
    email: yupEmailNoHint,
    password: yupPasswordNoHint
});

interface SetErrorsFormikProps {
    setErrors: (
        errors: FormikErrors<{
            email?: string;
            password?: string;
        }>
    ) => void;
}

export const onSubmit = (values: AuthUserRequest, { setErrors }: SetErrorsFormikProps) => {
    const unwatch = userStores.auth.watch(userEvents.setAuth, ({ authDenyReason }) => {
        setErrors({
            email: authDenyReason,
            password: authDenyReason
        });
        unwatch();
    });
    userEffects.loadToken(values);
};

export const untouchedWarningForEmail = 'This can only contain 0-9 a-z A-Z characters';

export const untouchedWarningForPassword =
    'Password should be 8 or more characters and include a capital letter and a number';
