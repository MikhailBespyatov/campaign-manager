import { InternalLink } from 'components/common/links/InternalLink';
import { InternalTextLink } from 'components/common/links/InternalTextLink';
import { Span } from 'components/common/typography/Span';
import { Loader } from 'components/dynamic/Loader';
import { Button } from 'components/FormComponents/buttons/Button';
import { Form } from 'components/FormComponents/forms/Form';
import { BooleanCheckbox } from 'components/FormComponents/inputs/BooleanCheckbox';
import { TextInput } from 'components/FormComponents/inputs/TextInput';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { privacyPolicyHref, termsOfServiceHref } from 'constants/links';
import { routes, signInPath } from 'constants/routes';
import { blue } from 'constants/styles';
import { useStore } from 'effector-react';
import { Formik } from 'formik';
import { initialValues, onSubmit, validationSchema } from 'pages/SignUp/constants';
import React, { useState } from 'react';
import { loadingStores } from 'stores/loading';

// const HighlightSpan: FC = ({ children }) => (
//     <Span alignCenter fontSize="14px" fontWeight="500" lineHeight="17px" textDecoration="underline">
//         {children}
//     </Span>
// );

export const CreateAccount = () => {
    const loading = useStore(loadingStores.loading);

    const [isConfirmed, setIsConfirmed] = useState(false);

    const onConfirmedChange = () => setIsConfirmed(!isConfirmed);

    return (
        <>
            <AuthLayout>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {({ handleSubmit, isValid, dirty }) => (
                        <Form title="Sign Up for Your Free Account" onSubmit={handleSubmit}>
                            <TextInput
                                label="Company Name"
                                name="companyName"
                                placeholder="Enter your company name"
                                untouchedWarning="This can only contain 0-9 a-z A-Z characters"
                            />
                            {/* <TextInput label="Full name" name="username" placeholder="Enter your account name" /> */}
                            <TextInput name="administratorEmail" type="email" untouchedWarning=" " />
                            {/* <TextInput
                            label="Password"
                            name="password"
                            placeholder="Type your password"
                            type="password"
                            untouchedWarning="Password should be 8 or more characters and include a capital letter and a number"
                        /> */}
                            {/* <MarginWrapper marginLeft="auto" marginTop="3px">
                            <Row>
                                <InternalLink fontSize="16px" lineHeight="20px" to={routes.signIn.admin}>
                                    Enter as Admin
                                </InternalLink>
                            </Row>
                            <InternalLink fontSize="16px" lineHeight="20px" to={routes.wrongPath}>
                                Back to home
                            </InternalLink>
                        </MarginWrapper> */}
                            <Row alignCenter noWrap marginBottom="35px" marginTop="30px">
                                <Column marginRight="15px">
                                    <BooleanCheckbox onChange={onConfirmedChange} />
                                </Column>
                                <Span uppercase fontSize="14px" fontWeight="500" lineHeight="16px">
                                    I acknowledge that I have read&nbsp;
                                    <InternalTextLink
                                        color={blue}
                                        href={privacyPolicyHref}
                                        marginRight="0px"
                                        target="_blank"
                                    >
                                        Privacy Policy
                                    </InternalTextLink>
                                    &nbsp;and agree to the&nbsp;
                                    <InternalTextLink
                                        color={blue}
                                        href={termsOfServiceHref}
                                        marginRight="0px"
                                        target="_blank"
                                    >
                                        Terms of Service
                                    </InternalTextLink>
                                    .
                                </Span>
                            </Row>
                            <Button
                                // background={isExactValuesQuantity(touched) && objectIsEmpty(errors) ? blue : undefined}
                                background={isValid && dirty ? blue : undefined}
                                disabled={loading || !isConfirmed}
                            >
                                {loading ? <Loader /> : 'SIGN UP'}
                            </Button>
                            <Column alignCenter marginTop="35px" width="100%">
                                <Section alignCenter justifyCenter marginBottom="15px">
                                    <Span fontSize="12px">ALREADY HAVE AN ACCOUNT? </Span>
                                    <InternalLink
                                        color={blue}
                                        fontSize="12px"
                                        lineHeight="20px"
                                        marginBottom="0px"
                                        marginRight="0px"
                                        to={signInPath}
                                    >
                                        LOG IN HERE
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
                            {/* <Span alignCenter color="#9EA1B3" fontSize="18px" fontWeight="500" lineHeight="22px">
                            By tapping "Sign Up & Accept", you acknowledge that you have read the Privacy Policy and
                            agree to the Terms of Service.
                        </Span> */}
                        </Form>
                    )}
                </Formik>
            </AuthLayout>
        </>
    );
};
