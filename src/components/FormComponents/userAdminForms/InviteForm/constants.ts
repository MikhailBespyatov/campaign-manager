import { Props, SetErrorsInviteRequest } from 'components/FormComponents/userAdminForms/InviteForm/types';
import { yupDefault, yupEmail } from 'constants/yupFields';
import { ChangeEvent } from 'react';
import { userEffects } from 'stores/user';
import * as Yup from 'yup';

export const initialValues: Props = { email: '', organizationId: '', permission: '2' };

export const validationSchema = Yup.object().shape({
    email: yupEmail,
    organizationId: yupDefault,
    permission: yupDefault
});

export const onPermissionChange = (
    e: ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void
) => {
    const value = e.target.value;
    const field = e.target.name;
    if (Number.isInteger(Number(value)) && Number(value) >= 0 && Number(value) <= 2) setFieldValue(field, value, true);
};

interface SetErrorsFormikProps extends SetErrorsInviteRequest {}

export const onSubmit = (values: Props, { setErrors }: SetErrorsFormikProps) => {
    // const unwatch = userStores.auth.watch(userEvents.setAuth, ({ authDenyReason }) => {
    //     setErrors({
    //         email: authDenyReason,
    //         organizationId: authDenyReason
    //     });
    //     unwatch();
    // });
    const num = Number(values.permission);
    const permission = num === 0 ? 0 : num === 1 ? 1 : 2;
    userEffects.inviteUser({
        values: {
            organizationId: values.organizationId,
            invitations: [
                {
                    email: values.email,
                    permission: permission
                }
            ]
        },
        setErrors: setErrors
    });
};
