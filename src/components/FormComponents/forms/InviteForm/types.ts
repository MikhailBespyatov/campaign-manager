import { FormikErrors } from 'formik';

export interface Props {
    email: string;
    organizationId: string;
    permission: string;
}

export interface SetErrorsInviteRequest {
    setErrors: (
        errors: FormikErrors<{
            email?: string;
            organizationId?: string;
        }>
    ) => void;
}

export interface InviteRequestProps extends SetErrorsInviteRequest {
    values: WOM.OrganizationSendInvitationsRequest;
}
