import { yupDefault } from 'constants/yupFields';
import { userEffects } from 'stores/user';
import { SetErrorsAcceptInviteRequest } from 'types';
import * as Yup from 'yup';

interface Props extends WOM.OrganizationAcceptInviteRequest {}

export const initialValues: Props = { inviteCode: '', username: '', password: '' };

export const validationSchema = Yup.object().shape({
    inviteCode: yupDefault,
    username: yupDefault,
    password: yupDefault
});

interface SetErrorsFormikProps extends SetErrorsAcceptInviteRequest {}

export const onSubmit = (values: Props, { setErrors }: SetErrorsFormikProps) => {
    userEffects.acceptInvitationAndLoadToken({
        values: values,
        setErrors: setErrors
    });
};
