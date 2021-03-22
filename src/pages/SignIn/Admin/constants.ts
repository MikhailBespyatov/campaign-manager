import { yupEmailNoHint, yupPasswordNoHint } from 'constants/yupFields';
import { FormikErrors } from 'formik';
import { userEffects } from 'stores/user';
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

interface Props extends WOM.OrganizationUserAuthChallengeRequest {}

export const onSubmit = (values: Props, { setErrors }: SetErrorsFormikProps) => {
    // const unwatch = userStores.auth.watch(userEvents.setAuth, ({ authDenyReason }) => {
    //     setErrors({
    //         email: authDenyReason,
    //         password: authDenyReason
    //     });
    //     unwatch();
    // });
    // userEffects.loadAdminToken(values);
    userEffects.loadAdminToken({
        values,
        setErrors
    });
};
