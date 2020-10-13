import { FormikErrors } from 'formik';

export interface SetErrorsSecurityCodeRequest {
    setErrors?: (
        errors: FormikErrors<{
            email?: string;
        }>
    ) => void;
}

export interface SecurityCodeRequestProps extends SetErrorsSecurityCodeRequest {
    values: WOM.OrganizationUserWantsForgottenPasswordRequest;
}
