import { FormSignUpLink } from 'components/common/links/FormSignUpLink';
import { Loader } from 'components/common/Loader';
import { Span } from 'components/common/typography/Span';
import { Button } from 'components/FormComponents/buttons/Button';
import { Form } from 'components/FormComponents/Form';
import { TextInput } from 'components/FormComponents/inputs/TextInput';
import { Column } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { blue } from 'constants/styles';
import { useStore } from 'effector-react';
import { Formik } from 'formik';
import { initialValues, onSubmit, validationSchema } from 'pages/SignIn/PasswordReset/Password/constants';
import React from 'react';
import { loadingStores } from 'stores/loading';

export const RequestCode = () => {
    const loading = useStore(loadingStores.loading);

    return (
        <AuthLayout>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ handleSubmit, isValid, dirty }) => (
                    <Column marginLeft="auto" marginRight="auto">
                        <Form
                            subtitle="Enter the security code we sent you and your new password"
                            onSubmit={handleSubmit}
                        >
                            <TextInput
                                label="Security Code"
                                name="securityCode"
                                placeholder="Type your security code"
                            />
                            <MarginWrapper marginBottom="32px" marginLeft="auto" marginTop="3px">
                                <Span fontSize="16px" lineHeight="20px">
                                    Send a new code ?
                                </Span>
                            </MarginWrapper>
                            <TextInput
                                label="New Password"
                                name="password"
                                placeholder="Type your new password"
                                type="password"
                                untouchedWarning="Password should be 8 or more characters and include a capital letter and a number"
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
