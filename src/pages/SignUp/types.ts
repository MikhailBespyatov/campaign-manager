import { FormikErrors } from 'formik';

export interface SetErrorsCreateOrganizationRequest {
    setErrors: (
        errors: FormikErrors<{
            companyName?: string;
            administratorEmail?: string;
        }>
    ) => void;
}

export interface CreateOrganizationRequestProps extends SetErrorsCreateOrganizationRequest {
    values: WOM.CreateOrganizationRequest;
}
