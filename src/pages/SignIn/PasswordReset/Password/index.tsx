import { FormSignUpLink } from 'components/common/links/FormSignUpLink';
import { Loader } from 'components/dynamic/Loader';
import { Button } from 'components/FormComponents/buttons/Button';
import { Form } from 'components/FormComponents/forms/Form';
import { TextInput } from 'components/FormComponents/inputs/TextInput';
import { Column } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { blue } from 'constants/styles';
import { useStore } from 'effector-react';
import { Formik } from 'formik';
import { untouchedWarningForPassword } from 'pages/SignIn/constants';
import { initialValues, onSubmit, validationSchema } from 'pages/SignIn/PasswordReset/Password/constants';
import React from 'react';
import { loadingStores } from 'stores/loading';

export const Password = () => {
    const loading = useStore(loadingStores.loading);

    return (
        <AuthLayout>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ handleSubmit, isValid, dirty }) => (
                    <Column marginLeft="auto" marginRight="auto">
                        <Form subtitle="Password Reset" title="Please enter your new password" onSubmit={handleSubmit}>
                            <TextInput
                                label="New Password"
                                name="password"
                                placeholder="Type your new password"
                                type="password"
                                untouchedWarning={untouchedWarningForPassword}
                            />
                            <MarginWrapper marginTop="26px">
                                <Button background={isValid && dirty ? blue : undefined} disabled={loading}>
                                    {loading ? <Loader /> : 'CHANGE PASSWORD'}
                                </Button>
                            </MarginWrapper>
                        </Form>
                        <FormSignUpLink />
                    </Column>
                )}
            </Formik>
        </AuthLayout>
    );
};
