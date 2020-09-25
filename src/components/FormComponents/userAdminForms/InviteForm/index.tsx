import { RoundedButton } from 'components/common/buttons/RoundedButton';
import { Loader } from 'components/common/Loader';
import { UserAdminTextInput } from 'components/FormComponents/inputs/UserAdminTextInput';
import {
    initialValues,
    onPermissionChange,
    onSubmit,
    validationSchema
} from 'components/FormComponents/userAdminForms/InviteForm/constants';
import { FormWrapper } from 'components/FormComponents/userAdminForms/InviteForm/style';
import { blue } from 'constants/styles';
import { useStore } from 'effector-react';
import { Formik } from 'formik';
import React, { ChangeEvent } from 'react';
import { loadingStores } from 'stores/loading';
import { getOrganizationId } from 'utils/usefulFunctions';

export const InviteForm = () => {
    const loading = useStore(loadingStores.loading);

    const defaultOrganizationId = getOrganizationId();

    return (
        <Formik
            initialValues={{ ...initialValues, organizationId: defaultOrganizationId }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ handleSubmit, isValid, dirty, setFieldValue }) => (
                <FormWrapper onSubmit={handleSubmit}>
                    <UserAdminTextInput name="email" type="email" width="350px" />
                    <UserAdminTextInput
                        disabled={!!defaultOrganizationId}
                        name="organizationId"
                        placeholder="Organization id"
                        width="300px"
                    />
                    <UserAdminTextInput
                        name="permission"
                        placeholder="Permission"
                        width="140px"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => onPermissionChange(e, setFieldValue)}
                    />
                    <RoundedButton background={isValid && dirty ? blue : undefined} disabled={loading}>
                        {loading ? <Loader /> : 'SEND INVITE'}
                    </RoundedButton>
                </FormWrapper>
            )}
        </Formik>
    );
};
