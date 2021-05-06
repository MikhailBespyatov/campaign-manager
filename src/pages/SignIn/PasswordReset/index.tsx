import { InternalLink } from 'components/common/links/InternalLink';
import { Span } from 'components/common/typography/Span';
import { Loader } from 'components/dynamic/Loader';
import { Button } from 'components/FormComponents/buttons/Button';
import { Form } from 'components/FormComponents/forms/Form';
import { TextInput } from 'components/FormComponents/inputs/TextInput';
import { Column, Section } from 'components/grid/wrappers/FlexWrapper';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { routes, signInPath } from 'constants/routes';
import { blue } from 'constants/styles';
import { useStore } from 'effector-react';
import { Formik } from 'formik';
import { initialValues, onSubmit, validationSchema } from 'pages/SignIn/PasswordReset/constants';
import React from 'react';
import { loadingStores } from 'stores/loading';

// const HighlightSpan: FC = ({ children }) => (
//     <Span fontSize="16px" lineHeight="20px">
//         {children}
//     </Span>
// );

export const PasswordReset = () => {
    const loading = useStore(loadingStores.loading);

    return (
        <AuthLayout>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ handleSubmit, isValid, dirty }) => (
                    <Column marginLeft="auto" marginRight="auto">
                        <Form
                            /* subtitle="Password Reset"*/
                            h1MarginBottom="50px"
                            title="Please enter your email to reset password"
                            onSubmit={handleSubmit}
                        >
                            <TextInput marginBottom="70px" name="email" type="email" untouchedWarning=" " />
                            {/* <Section justifyEnd>
                                <InternalLink
                                    color={formGrey5}
                                    fontSize="16px"
                                    lineHeight="20px"
                                    marginBottom="85px"
                                    marginRight="0px"
                                    to={signInPath}
                                >
                                    Go back to Login page
                                    <HighlightSpan>send security code</HighlightSpan>
                                </InternalLink>
                            </Section> */}
                            <Button background={isValid && dirty ? blue : undefined} disabled={loading}>
                                {loading ? <Loader /> : 'SEND EMAIL'}
                            </Button>
                            <Column alignCenter marginTop="35px" width="100%">
                                <Section alignCenter justifyCenter marginBottom="15px">
                                    <Span fontSize="12px">NEED AN ACCOUNT? </Span>
                                    <InternalLink
                                        color={blue}
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
