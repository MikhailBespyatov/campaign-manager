import { FormikErrors } from 'formik';

export interface AuthUserRequest {
    email: string;
    password: string;
}

export interface AuthUserResponse extends WOM.UserJwtTokenResponse {}

export interface RegisterUserRequest extends AuthUserRequest {
    companyName: string;
    username: string;
}

export interface SetErrorsInviteRequest {
    setErrors: (
        errors: FormikErrors<{
            email?: string | undefined;
            organizationId?: string | undefined;
        }>
    ) => void;
}

export interface InviteRequestProps extends SetErrorsInviteRequest {
    values: WOM.SendOrganizationInvitationsRequest;
}

export interface Id {
    id: string;
}
