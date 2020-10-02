import { FormikErrors } from 'formik';

export interface SetErrorsAcceptInviteRequest {
    setErrors: (
        errors: FormikErrors<{
            inviteCode?: string | undefined;
            username?: string | undefined;
            password?: string | undefined;
        }>
    ) => void;
}

export interface AcceptInviteRequestProps extends SetErrorsAcceptInviteRequest {
    values: WOM.OrganizationAcceptInviteRequest;
}
