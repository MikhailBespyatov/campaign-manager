import { yupDefault, yupEmail, yupPassword, yupRepeatPassword } from 'constants/yupFields';
import { SetErrorsResetPasswordRequest } from 'pages/SignIn/PasswordReset/RequestCode/types';
import { userEffects } from 'stores/user';
import * as Yup from 'yup';

export const linkMarginTop = '0';
export const linkMarginBottom = '57px';

interface Props extends WOM.OrganizationAuthenticateWithTokenRequest {}

export const initialValues = { email: '', confirmationToken: '', password: '' };

export const validationSchema = Yup.object().shape({
    email: yupEmail,
    confirmationToken: yupDefault,
    password: yupPassword,
    repeatPassword: yupRepeatPassword
});

interface SetErrorsFormikProps extends SetErrorsResetPasswordRequest {}

export const onSubmit = (values: Props, { setErrors }: SetErrorsFormikProps) =>
    //console.log(values);
    userEffects.resetPasswordAndLoadToken({
        values: values,
        setErrors: setErrors
    });
