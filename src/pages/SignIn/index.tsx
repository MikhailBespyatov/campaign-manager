import { InternalLink } from 'components/common/links/InternalLink';
import { Span } from 'components/common/typography/Span';
import { Loader } from 'components/dynamic/Loader';
import { Button } from 'components/FormComponents/buttons/Button';
import { Form } from 'components/FormComponents/forms/Form';
import { TextInput } from 'components/FormComponents/inputs/TextInput';
import { Column, Section } from 'components/grid/wrappers/FlexWrapper';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { resetPasswordPath, routes } from 'constants/routes';
import { blue } from 'constants/styles';
import { useStore } from 'effector-react';
import { Formik } from 'formik';
import { formTitle, initialValues, onSubmit, validationSchema } from 'pages/SignIn/constants';
import React from 'react';
import { loadingStores } from 'stores/loading';

export const SignIn = () => {
    const loading = useStore(loadingStores.loading);

    return (
        <AuthLayout>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ handleSubmit, isValid, dirty }) => (
                    <Column marginLeft="auto" marginRight="auto">
                        <Form title={formTitle} onSubmit={handleSubmit}>
                            <TextInput name="email" type="email" />

                            <TextInput
                                label="PASSWORD"
                                name="password"
                                placeholder="Enter your password"
                                type="password"
                            />

                            <Section justifyEnd /*marginLeft="auto"*/ marginTop="12px">
                                {/* <Row>
                                        <InternalLink fontSize="16px" lineHeight="20px" to={routes.signIn.admin}>
                                            Enter as Admin
                                        </InternalLink>
                                    </Row> */}

                                <InternalLink
                                    fontSize="12px"
                                    lineHeight="20px"
                                    marginBottom="85px"
                                    marginRight="0px"
                                    to={resetPasswordPath}
                                >
                                    FORGOT PASSWORD?
                                </InternalLink>
                            </Section>

                            <Button background={isValid && dirty ? blue : undefined} disabled={loading}>
                                {loading ? <Loader /> : 'LOGIN'}
                            </Button>
                            <Column alignCenter marginTop="35px" width="100%">
                                <Section alignCenter justifyCenter marginBottom="15px">
                                    <Span fontSize="12px">NEED AN ACCOUNT? </Span>
                                    <InternalLink
                                        color="#3333ff"
                                        fontSize="12px"
                                        lineHeight="20px"
                                        marginBottom="0px"
                                        marginRight="0px"
                                        to={routes.signUp.index}
                                    >
                                        SING UP HERE
                                    </InternalLink>
                                </Section>
                                <InternalLink
                                    fontSize="12px"
                                    lineHeight="20px"
                                    marginBottom="0px"
                                    marginLeft="0px"
                                    marginRight="0px"
                                    textDecoration="none"
                                    to={routes.wrongPath}
                                >
                                    BACK TO HOME
                                </InternalLink>
                            </Column>
                        </Form>
                        {/* <FormSignUpLink /> */}
                    </Column>
                )}
            </Formik>
        </AuthLayout>
    );
};
