import { yupEmailNoHint, yupPasswordNoHint } from 'constants/yupFields';
import { FormikErrors } from 'formik';
import { userEffects, userEvents, userStores } from 'stores/user';
import { AuthUserRequest } from 'types';
import * as Yup from 'yup';

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
