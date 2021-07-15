import { ManualRoundedButton } from 'components/common/buttons/ManualRoundedButton';
import { buttonBorderRadius } from 'components/common/features/ProgressBar/constants';
import { Loader } from 'components/dynamic/Loader';
import {
    //defaultPermissionsValue,
    initialValues,
    onSubmit,
    //permissionsData,
    //permissionsValues,
    validationSchema
} from 'components/FormComponents/forms/InviteForm/constants';
import { FormWrapper } from 'components/FormComponents/forms/InviteForm/styles';
//import { InviteUserSelect } from 'components/FormComponents/inputs/InviteUserSelect';
import { UserAdminTextInput } from 'components/FormComponents/inputs/UserAdminTextInput';
import { primaryButtonDiameter } from 'constants/styles';
import { useStore } from 'effector-react';
import { Formik } from 'formik';
import React from 'react';
import { loadingStores } from 'stores/loading';
//import { themeStores } from 'stores/theme';
import { getOrganizationId } from 'utils/usefulFunctions';

export const InviteForm = () => {
    const loading = useStore(loadingStores.loading);
    // const { primaryColor } = useStore(themeStores.theme);

    const defaultOrganizationId = getOrganizationId();

    return (
        <Formik
            initialValues={{ ...initialValues, organizationId: defaultOrganizationId }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ handleSubmit }) => (
                <FormWrapper onSubmit={handleSubmit}>
                    <UserAdminTextInput name="email" type="email" width="307px" />
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
                    {/* <InviteUserSelect
                        data={permissionsData}
                        defaultActive={defaultPermissionsValue}
                        name="permission"
                        values={permissionsValues}
                        // onChange={(e: ChangeEvent<HTMLInputElement>) => onPermissionChange(e, setFieldValue)}
                    /> */}
                    <ManualRoundedButton
                        borderRadius={buttonBorderRadius}
                        disabled={loading}
                        fontSize="16px"
                        fontWeight="400"
                        height={primaryButtonDiameter}
                        minWidth="65px"
                    >
                        {loading ? <Loader /> : 'Send Invite'}
                    </ManualRoundedButton>
                </FormWrapper>
            )}
        </Formik>
    );
};
