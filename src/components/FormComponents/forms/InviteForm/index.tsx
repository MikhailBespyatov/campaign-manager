import { RoundedButton } from 'components/common/buttons/RoundedButton';
import { Loader } from 'components/common/Loader';
import {
    defaultPermissionsValue,
    initialValues,
    onSubmit,
    permissionsData,
    permissionsValues,
    validationSchema
} from 'components/FormComponents/forms/InviteForm/constants';
import { FormWrapper } from 'components/FormComponents/forms/InviteForm/styles';
import { InviteUserSelect } from 'components/FormComponents/inputs/InviteUserSelect';
import { UserAdminTextInput } from 'components/FormComponents/inputs/UserAdminTextInput';
import { blue } from 'constants/styles';
import { useStore } from 'effector-react';
import { Formik } from 'formik';
import React from 'react';
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
            {({ handleSubmit, isValid, dirty }) => (
                <FormWrapper onSubmit={handleSubmit}>
                    <UserAdminTextInput name="email" type="email" width="350px" />
                    {/* <UserAdminTextInput
                        disabled={!!defaultOrganizationId}
                        name="organizationId"
                        placeholder="Organization id"
                        width="300px"
                    /> */}
                    {/* <UserAdminTextInput
                        name="permission"
                        placeholder="Permission"
                        width="140px"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => onPermissionChange(e, setFieldValue)}
                    /> */}
                    <InviteUserSelect
                        data={permissionsData}
                        defaultActive={defaultPermissionsValue}
                        name="permission"
                        values={permissionsValues}
                        // onChange={(e: ChangeEvent<HTMLInputElement>) => onPermissionChange(e, setFieldValue)}
                    />
                    <RoundedButton background={isValid && dirty ? blue : undefined} disabled={loading}>
                        {loading ? <Loader /> : 'SEND INVITE'}
                    </RoundedButton>
                </FormWrapper>
            )}
        </Formik>
    );
};
