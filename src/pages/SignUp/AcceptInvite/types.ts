import { FormikErrors } from 'formik';

export interface SetErrorsAcceptInviteRequest {
    setErrors: (
        errors: FormikErrors<{
            inviteCode?: string;
            username?: string;
            password?: string;
        }>
    ) => void;
}

export interface AcceptInviteRequestProps extends SetErrorsAcceptInviteRequest {
    values: WOM.OrganizationAcceptInviteRequest;
}
