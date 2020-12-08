import { yupDefault, yupPassword, yupRepeatPassword } from 'constants/yupFields';
import { SetErrorsAcceptInviteRequest } from 'pages/SignUp/AcceptInvite/types';
import { userEffects } from 'stores/user';
import * as Yup from 'yup';

interface Props extends WOM.OrganizationAcceptInviteRequest {
    repeatPassword: string;
}

export const initialValues: Props = { inviteCode: '', username: '', password: '', repeatPassword: '' };

export const validationSchema = Yup.object().shape({
    inviteCode: yupDefault,
    username: yupDefault,
    password: yupPassword,
    repeatPassword: yupRepeatPassword
});

interface SetErrorsFormikProps extends SetErrorsAcceptInviteRequest {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const onSubmit = ({ repeatPassword, ...values }: Props, { setErrors }: SetErrorsFormikProps) => {
    userEffects.acceptInvitationAndLoadToken({
        values: values,
        setErrors: setErrors
    });
};
