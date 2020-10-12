import { InternalLink } from 'components/common/links/InternalLink';
import { Loader } from 'components/common/Loader';
import { Span } from 'components/common/typography/Span';
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
import { initialValues, onSubmit, validationSchema } from 'pages/SignIn/PasswordReset/RequestCode/constants';
import React from 'react';
import { loadingStores } from 'stores/loading';
import { userEffects, userStores } from 'stores/user';

export const RequestCode = () => {
    const loading = useStore(loadingStores.loading);
    const email = useStore(userStores.currentEmailForPasswordReset);

    const sendNewCodeHandler = () => userEffects.sendSecurityCode({ values: { email: email } });

    return (
        <AuthLayout>
            <Formik
                initialValues={{ ...initialValues, email: email }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ handleSubmit, isValid, dirty }) => (
                    <Column marginLeft="auto" marginRight="auto">
                        <Form
                            subtitle="Enter the security code we sent you and your new password"
                            onSubmit={handleSubmit}
                        >
                            <TextInput disabled label="Email" name="email" placeholder="Type your email" />
                            <TextInput
                                label="Security Code"
                                name="confirmationToken"
                                placeholder="Type your security code"
                                type="text"
                            />
                            <TextInput
                                label="New Password"
                                name="password"
                                placeholder="Type your new password"
                                type="password"
                                untouchedWarning="Password should be 8 or more characters and include a capital letter and a number"
                            />
                            <MarginWrapper marginBottom="32px" marginLeft="auto" marginTop="3px">
                                <Column>
                                    <Row>
                                        <Span fontSize="16px" lineHeight="20px" onClick={sendNewCodeHandler}>
                                            Send a new code ?
                                        </Span>
                                    </Row>
                                    <InternalLink fontSize="16px" lineHeight="20px" to={routes.signIn.index}>
                                        Enter as User
                                    </InternalLink>
                                </Column>
                            </MarginWrapper>
                            <MarginWrapper marginTop="26px">
                                <Button background={isValid && dirty ? blue : undefined} disabled={loading}>
                                    {loading ? <Loader /> : 'CHANGE PASSWORD'}
                                </Button>
                            </MarginWrapper>
                        </Form>
                        {/* <FormSignUpLink /> */}
                    </Column>
                )}
            </Formik>
        </AuthLayout>
    );
};
