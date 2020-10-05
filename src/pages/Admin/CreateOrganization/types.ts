import { FormikErrors } from 'formik';

export interface Props {
    companyName: string;
    administratorEmail: string;
}

export interface SetErrorsCreateOrganization {
    setErrors: (
        errors: FormikErrors<{
            companyName?: string;
            administratorEmail?: string;
        }>
    ) => void;
}

export interface CreateOrganizationProps extends SetErrorsCreateOrganization {
    values: WOM.CreateOrganizationRequest;
}
