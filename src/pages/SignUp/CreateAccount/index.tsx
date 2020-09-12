import { Loader } from 'components/common/Loader';
import { Span } from 'components/common/TextComponents/Span';
import { Column, Row } from 'components/common/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/common/wrappers/MarginWrapper';
import { BooleanCheckbox } from 'components/FormComponents/BooleanCheckbox';
import { Button } from 'components/FormComponents/Button';
import { Form } from 'components/FormComponents/Form';
import { TextInput } from 'components/FormComponents/TextInput';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { formGrey5 } from 'constants/styles';
import { useStore } from 'effector-react';
import { Formik } from 'formik';
import { initialValues, onSubmit, validationSchema } from 'pages/SignUp/CreateAccount/constants';
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
                {({ handleSubmit }) => (
                    <Form title="Create an account" onSubmit={handleSubmit}>
                        <TextInput label="Company Name" name="companyName" placeholder="Enter your company name" />
                        <TextInput label="Full name" name="username" placeholder="Enter your account name" />
                        <TextInput name="email" type="email" />
                        <TextInput
                            label="Password"
                            name="password"
                            placeholder="Type your password"
                            type="password"
                            untouchedWarning="Password should be 8 or more characters and include a capital letter and a number"
                        />
                        <MarginWrapper marginTop="30px">
                            <Row alignCenter noWrap marginBottom="35px">
                                <Column marginRight="15px">
                                    <BooleanCheckbox />
                                </Column>
                                <Span color={formGrey5} fontSize="14px" fontWeight="500" lineHeight="17px">
                                    I acknowledge that I have read <HighlightSpan>Privacy Policy</HighlightSpan> and
                                    agree to the <HighlightSpan>Terms of Service</HighlightSpan>.
                                </Span>
                            </Row>
                        </MarginWrapper>
                        <Button disabled={loading}>{loading ? <Loader /> : 'Sign up'}</Button>
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
