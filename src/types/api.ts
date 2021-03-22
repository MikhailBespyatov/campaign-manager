import { FormikErrors } from 'formik';

export interface SetErrorsAuthUserRequest {
    setErrors: (
        errors: FormikErrors<{
            email?: string;
            password?: string;
        }>
    ) => void;
}

export interface AuthUserRequest extends SetErrorsAuthUserRequest {
    values: WOM.OrganizationUserAuthChallengeRequest;
}

export interface AuthUserResponse extends WOM.UserJwtTokenResponse {}

export interface RegisterUserRequest extends AuthUserRequest {
    companyName: string;
    username: string;
}

export interface Id {
    id: string;
}

export interface ManageRolesValues {
    permission: WOM.OrganizationPermission;
    userId: string;
}
