import { FormikErrors } from 'formik';

export interface SetErrorsResetPasswordRequest {
    setErrors: (
        errors: FormikErrors<{
            confirmationToken?: string;
        }>
    ) => void;
}

export interface ResetPasswordRequestProps extends SetErrorsResetPasswordRequest {
    values: WOM.OrganizationAuthenticateWithTokenRequest;
}
