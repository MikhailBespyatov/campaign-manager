import { yupEmail } from 'constants/yupFields';
import { SetErrorsSecurityCodeRequest } from 'pages/SignIn/PasswordReset/types';
import { userEffects } from 'stores/user';
import * as Yup from 'yup';

export const linkMarginTop = '0';
export const linkMarginBottom = '57px';

interface Props extends WOM.OrganizationUserWantsForgottenPasswordRequest {}

export const initialValues = { email: '' };

export const validationSchema = Yup.object().shape({
    email: yupEmail
});

interface SetErrorsFormikProps extends SetErrorsSecurityCodeRequest {}

export const onSubmit = (values: Props, { setErrors }: SetErrorsFormikProps) => {
    userEffects.sendSecurityCode({
        values: values,
        setErrors: setErrors
    });
};
