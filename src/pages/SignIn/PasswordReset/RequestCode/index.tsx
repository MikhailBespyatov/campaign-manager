import { InternalLink } from 'components/common/links/InternalLink';
import { Span } from 'components/common/typography/Span';
import { Loader } from 'components/dynamic/Loader';
import { Button } from 'components/FormComponents/buttons/Button';
import { Form } from 'components/FormComponents/forms/Form';
import { TextInput } from 'components/FormComponents/inputs/TextInput';
import { Column, Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { resetPasswordPath, routes, signInPath } from 'constants/routes';
import { blue } from 'constants/styles';
import { useStore } from 'effector-react';
import { Formik } from 'formik';
import { initialValues, onSubmit, validationSchema } from 'pages/SignIn/PasswordReset/RequestCode/constants';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { loadingStores } from 'stores/loading';
import { userStores } from 'stores/user';

export const RequestCode = () => {
    // const globalPrefixPublic = useStore(themeStores.globalPrefixPublic);
    const loading = useStore(loadingStores.loading);
    const email = useStore(userStores.currentEmailForPasswordReset);
    const history = useHistory();

    // const sendNewCodeHandler = () => userEffects.sendSecurityCode({ values: { email: email } });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        !email && history.push(resetPasswordPath);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <AuthLayout>
            <Formik initialValues={{ ...initialValues, email }} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ handleSubmit, isValid, dirty }) => (
                    <Column marginLeft="auto" marginRight="auto">
                        <Form
                            /*subtitle="Password Reset"*/
                            offAutoComplete
                            h1MarginBottom="50px"
                            title="Please enter the security code we sent you and new password"
                            onSubmit={handleSubmit}
                        >
                            <TextInput
                                offAutoComplete
                                label="SECURITY CODE"
                                marginBottom="5px"
                                name="confirmationToken"
                                placeholder="Enter security code"
                                type="text"
                                untouchedWarning=" "
                            />
                            <TextInput
                                disabled
                                label="EMAIL ADDRESS"
                                marginBottom="5px"
                                name="email"
                                placeholder="Enter your email address"
                                untouchedWarning=" "
                            />

                            <TextInput
                                label="CREATE PASSWORD"
                                marginBottom="5px"
                                name="password"
                                placeholder="Create your new password"
                                type="password"
                                untouchedWarning=" "
                            />
                            {/* //TODO logic for password confirm
                             */}
                            <TextInput
                                label="RETYPE PASSWORD"
                                marginBottom="20px"
                                name="repeatPassword"
                                placeholder="Retype your new password"
                                type="password"
                                untouchedWarning=" "
                            />
                            {/* <MarginWrapper marginBottom="32px" marginLeft="auto" marginTop="3px">
                                <Column>
                                    <Row>
                                        <Span fontSize="16px" lineHeight="20px" onClick={sendNewCodeHandler}>
                                            Send a new code ?
                                        </Span>
                                    </Row>
                                    <InternalLink fontSize="16px" lineHeight="20px" to={signInPath}>
                                        Go back to Login page
                                    </InternalLink>
                                </Column>
                            </MarginWrapper> */}
                            <MarginWrapper marginTop="26px">
                                <Button background={isValid && dirty ? blue : undefined} disabled={loading && !isValid}>
                                    {loading ? <Loader /> : 'RESET PASSWORD'}
                                </Button>
                            </MarginWrapper>
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
                                        SIGN UP HERE
                                    </InternalLink>
                                </Section>
                                <InternalLink
                                    fontSize="12px"
                                    lineHeight="20px"
                                    marginBottom="0px"
                                    marginLeft="0px"
                                    marginRight="0px"
                                    textDecoration="none"
                                    to={signInPath}
                                >
                                    BACK TO LOG IN
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
