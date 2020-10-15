import { yupCompanyName, yupEmail, yupPassword, yupUsername } from 'constants/yupFields';
import { FormikErrors } from 'formik';
import { userEffects, userEvents, userStores } from 'stores/user';
import { RegisterUserRequest } from 'types';
import * as Yup from 'yup';

export const initialValues = { email: '', password: '', companyName: '', username: '' };

export const validationSchema = Yup.object().shape({
    companyName: yupCompanyName,
    username: yupUsername,
    email: yupEmail,
    password: yupPassword
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
