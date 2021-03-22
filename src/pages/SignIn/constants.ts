import { yupEmailNoHint, yupPasswordNoHint } from 'constants/yupFields';
import { userEffects } from 'stores/user';
import { SetErrorsAuthUserRequest } from 'types';
import * as Yup from 'yup';

export const formTitle = 'Log In'; // 'Hello, please enter your email and password';
export const linkMarginTop = '0';
export const linkMarginBottom = '57px';

export const initialValues = { email: '', password: '' };

export const validationSchema = Yup.object().shape({
    email: yupEmailNoHint,
    password: yupPasswordNoHint
});

interface SetErrorsFormikProps extends SetErrorsAuthUserRequest {}

interface Props extends WOM.OrganizationUserAuthChallengeRequest {}

export const onSubmit = (values: Props, { setErrors }: SetErrorsFormikProps) => {
    // const unwatch = userStores.auth.watch(userEvents.setAuth, ({ authDenyReason }) => {
    //     setErrors({
    //         email: authDenyReason,
    //         password: authDenyReason
    //     });
    //     unwatch();
    // });
    // userEffects.loadToken(values);

    userEffects.loadToken({
        values,
        setErrors
    });
};

export const untouchedWarningForEmail = 'This can only contain 0-9 a-z A-Z characters';

export const untouchedWarningForPassword =
    'Password should be 8 or more characters and include a capital letter and a number';
