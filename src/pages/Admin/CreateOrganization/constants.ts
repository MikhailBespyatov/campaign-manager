import { yupDefault, yupEmail } from 'constants/yupFields';
import { SetErrorsCreateOrganization } from 'pages/Admin/CreateOrganization/types';
import { adminEffects } from 'stores/admin';
import * as Yup from 'yup';

export const linkMarginTop = '0';
export const linkMarginBottom = '57px';

export const initialValues = { companyName: '', administratorEmail: '' };

export const validationSchema = Yup.object().shape({
    companyName: yupDefault,
    administratorEmail: yupEmail
});

interface SetErrorsFormikProps extends SetErrorsCreateOrganization {}

export const onSubmit = (values: WOM.CreateOrganizationRequest, { setErrors }: SetErrorsFormikProps) => {
    adminEffects.createOrganization({
        values: {
            companyName: values.companyName,
            administratorEmail: values.administratorEmail,
            mandatoryTags: values?.companyName ? [values.companyName] : []
        },
        setErrors: setErrors
    });
};
