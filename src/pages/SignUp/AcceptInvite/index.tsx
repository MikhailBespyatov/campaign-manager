import { InternalLink } from 'components/common/links/InternalLink';
import { Loader } from 'components/common/Loader';
import { Button } from 'components/FormComponents/buttons/Button';
import { Form } from 'components/FormComponents/Form';
import { TextInput } from 'components/FormComponents/inputs/TextInput';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { routes } from 'constants/routes';
import { blue } from 'constants/styles';
import { useStore } from 'effector-react';
import { Formik } from 'formik';
import { initialValues, onSubmit, validationSchema } from 'pages/SignUp/AcceptInvite/constants';
import React from 'react';
import { loadingStores } from 'stores/loading';

// const HighlightSpan: FC = ({ children }) => (
//     <Span alignCenter fontSize="14px" fontWeight="500" lineHeight="17px" textDecoration="underline">
//         {children}
//     </Span>
// );

interface ParamsProps {}

export const AcceptInvite = () => {
    const loading = useStore(loadingStores.loading);

    return (
        <AuthLayout>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ handleSubmit, isValid, dirty }) => (
                    <Form title="Create an account" onSubmit={handleSubmit}>
                        <TextInput label="Login" name="username" placeholder="Enter your account name" />
                        <TextInput
                            label="Password"
                            name="password"
                            placeholder="Type your password"
                            type="password"
                            untouchedWarning="Password should be 8 or more characters and include a capital letter and a number"
                        />
                        <MarginWrapper marginBottom="32px" marginLeft="auto" marginTop="3px">
                            <Column>
                                <Row>
                                    <InternalLink fontSize="16px" lineHeight="20px" to={routes.signIn.index}>
                                        Enter as User
                                    </InternalLink>
                                </Row>
                                <InternalLink fontSize="16px" lineHeight="20px" to={routes.signIn.admin}>
                                    Enter as Admin
                                </InternalLink>
                            </Column>
                        </MarginWrapper>
                        {/* <Row alignCenter noWrap marginBottom="35px" marginTop="30px">
                            <Column marginRight="15px">
                                <BooleanCheckbox />
                            </Column>
                            <Span color={formGrey5} fontSize="14px" fontWeight="500" lineHeight="17px">
                                I acknowledge that I have read <HighlightSpan>Privacy Policy</HighlightSpan> and agree
                                to the <HighlightSpan>Terms of Service</HighlightSpan>.
                            </Span>
                        </Row> */}
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