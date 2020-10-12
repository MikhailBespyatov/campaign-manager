import { InternalLink } from 'components/common/links/InternalLink';
import { Loader } from 'components/common/Loader';
import { Button } from 'components/FormComponents/buttons/Button';
import { Form } from 'components/FormComponents/forms/Form';
import { TextInput } from 'components/FormComponents/inputs/TextInput';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { routes } from 'constants/routes';
import { blue } from 'constants/styles';
import { useStore } from 'effector-react';
import { Formik } from 'formik';
import { initialValues, onSubmit, validationSchema } from 'pages/SignIn/Admin/constants';
import React from 'react';
import { loadingStores } from 'stores/loading';

export const Admin = () => {
    const loading = useStore(loadingStores.loading);

    return (
        <AuthLayout>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ handleSubmit, isValid, dirty }) => (
                    <Column marginLeft="auto" marginRight="auto">
                        <Form title="Hello, please enter as Admin" onSubmit={handleSubmit}>
                            <TextInput name="email" type="email" />
                            <TextInput
                                label="Password"
                                name="password"
                                placeholder="Enter your password"
                                type="password"
                            />
                            <MarginWrapper marginBottom="32px" marginLeft="auto" marginTop="3px">
                                <Column>
                                    <Row>
                                        <InternalLink fontSize="16px" lineHeight="20px" to={routes.signIn.index}>
                                            Enter as User
                                        </InternalLink>
                                    </Row>
                                    <InternalLink fontSize="16px" lineHeight="20px" to={routes.signIn.passwordReset}>
                                        Forgot password?
                                    </InternalLink>
                                </Column>
                            </MarginWrapper>
                            <Button background={isValid && dirty ? blue : undefined} disabled={loading}>
                                {loading ? <Loader /> : 'LOGIN'}
                            </Button>
                        </Form>
                        {/* <FormSignUpLink /> */}
                    </Column>
                )}
            </Formik>
        </AuthLayout>
    );
};
