import { InternalLink } from 'components/common/links/InternalLink';
import { Loader } from 'components/common/Loader';
import { Span } from 'components/common/typography/Span';
import { Button } from 'components/FormComponents/buttons/Button';
import { Form } from 'components/FormComponents/forms/Form';
import { BooleanCheckbox } from 'components/FormComponents/inputs/BooleanCheckbox';
import { TextInput } from 'components/FormComponents/inputs/TextInput';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { routes } from 'constants/routes';
import { blue, formGrey5 } from 'constants/styles';
import { useStore } from 'effector-react';
import { Formik } from 'formik';
import { initialValues, onSubmit, validationSchema } from 'pages/SignUp/constants';
import React, { FC } from 'react';
import { loadingStores } from 'stores/loading';

const HighlightSpan: FC = ({ children }) => (
    <Span alignCenter fontSize="14px" fontWeight="500" lineHeight="17px" textDecoration="underline">
        {children}
    </Span>
);

export const CreateAccount = () => {
    const loading = useStore(loadingStores.loading);

    return (
        <AuthLayout>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ handleSubmit, isValid, dirty }) => (
                    <Form title="Create an account" onSubmit={handleSubmit}>
                        <TextInput
                            label="Company Name"
                            name="companyName"
                            placeholder="Enter your company name"
                            untouchedWarning="Contains only 0-9 a-z A-Z characters"
                        />
                        {/* <TextInput label="Full name" name="username" placeholder="Enter your account name" /> */}
                        <TextInput name="administratorEmail" type="email" />
                        {/* <TextInput
                            label="Password"
                            name="password"
                            placeholder="Type your password"
                            type="password"
                            untouchedWarning="Password should be 8 or more characters and include a capital letter and a number"
                        /> */}
                        <MarginWrapper marginLeft="auto" marginTop="3px">
                            {/* <Row>
                                        <InternalLink fontSize="16px" lineHeight="20px" to={routes.signIn.admin}>
                                            Enter as Admin
                                        </InternalLink>
                                    </Row> */}
                            <InternalLink fontSize="16px" lineHeight="20px" to={routes.wrongPath}>
                                Back to home
                            </InternalLink>
                        </MarginWrapper>
                        <Row alignCenter noWrap marginBottom="35px" marginTop="30px">
                            <Column marginRight="15px">
                                <BooleanCheckbox />
                            </Column>
                            <Span color={formGrey5} fontSize="14px" fontWeight="500" lineHeight="17px">
                                I acknowledge that I have read <HighlightSpan>Privacy Policy</HighlightSpan> and agree
                                to the <HighlightSpan>Terms of Service</HighlightSpan>.
                            </Span>
                        </Row>
                        <Button
                            // background={isExactValuesQuantity(touched) && objectIsEmpty(errors) ? blue : undefined}
                            background={isValid && dirty ? blue : undefined}
                            disabled={loading}
                        >
                            {loading ? <Loader /> : 'SIGN UP'}
                        </Button>
                        {/* <Span alignCenter color="#9EA1B3" fontSize="18px" fontWeight="500" lineHeight="22px">
                            By tapping "Sign Up & Accept", you acknowledge that you have read the Privacy Policy and
                            agree to the Terms of Service.
                        </Span> */}
                    </Form>
                )}
            </Formik>
        </AuthLayout>
    );
};
