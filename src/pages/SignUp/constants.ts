import { yupCompanyName, yupEmail } from 'constants/yupFields';
import { SetErrorsCreateOrganizationRequest } from 'pages/SignUp/types';
import { organizationsEffects } from 'stores/organizations';
import * as Yup from 'yup';

export const initialValues = { companyName: '', administratorEmail: '' };

export const validationSchema = Yup.object().shape({
    companyName: yupCompanyName,
    administratorEmail: yupEmail
});

interface SetErrorsFormikProps extends SetErrorsCreateOrganizationRequest {}

export const onSubmit = (values: WOM.CreateOrganizationRequest, { setErrors }: SetErrorsFormikProps) => {
    organizationsEffects.createOrganization({
        values: {
            companyName: values?.companyName?.trim().replace(/ +/g, ' '),
            key: values?.companyName?.trim().replace(/ +/g, '_').toLowerCase(),
            administratorEmail: values.administratorEmail,
            mandatoryTags: values?.companyName ? [values.companyName] : []
        },
        setErrors: setErrors
    });
};
