import { InternalLink } from 'components/common/links/InternalLink';
import { Loader } from 'components/dynamic/Loader';
import { Button } from 'components/FormComponents/buttons/Button';
import { Form } from 'components/FormComponents/forms/Form';
import { TextInput } from 'components/FormComponents/inputs/TextInput';
import { Column } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { signInPath } from 'constants/routes';
import { blue, formGrey5 } from 'constants/styles';
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
                            subtitle="Password Reset"
                            title="Please enter your email to reset password"
                            onSubmit={handleSubmit}
                        >
                            <TextInput name="email" type="email" />
                            <MarginWrapper marginBottom="32px" marginLeft="auto" marginTop="3px">
                                <InternalLink color={formGrey5} fontSize="16px" lineHeight="20px" to={signInPath}>
                                    Go back to Login page
                                    {/* Or <HighlightSpan>send security code</HighlightSpan> */}
                                </InternalLink>
                            </MarginWrapper>
                            <Button background={isValid && dirty ? blue : undefined} disabled={loading}>
                                {loading ? <Loader /> : 'CHANGE PASSWORD'}
                            </Button>
                        </Form>
                        {/* <FormSignUpLink /> */}
                    </Column>
                )}
            </Formik>
        </AuthLayout>
    );
};
