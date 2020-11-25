import { yupDefault, yupPassword } from 'constants/yupFields';
import { SetErrorsAcceptInviteRequest } from 'pages/SignUp/AcceptInvite/types';
import { userEffects } from 'stores/user';
import * as Yup from 'yup';

interface Props extends WOM.OrganizationAcceptInviteRequest {}

export const initialValues: Props = { inviteCode: '', username: '', password: '' };

export const validationSchema = Yup.object().shape({
    inviteCode: yupDefault,
    username: yupDefault,
    password: yupPassword
});

interface SetErrorsFormikProps extends SetErrorsAcceptInviteRequest {}

export const onSubmit = (values: Props, { setErrors }: SetErrorsFormikProps) => {
    userEffects.acceptInvitationAndLoadToken({
        values: values,
        setErrors: setErrors
    });
};
