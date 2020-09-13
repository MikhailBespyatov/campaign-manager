import { FormSignUpLink } from 'components/common/links/FormSignUpLink';
import { InternalLink } from 'components/common/links/InternalLink';
import { Loader } from 'components/common/Loader';
import { Span } from 'components/common/TextComponents/Span';
import { Column } from 'components/common/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/common/wrappers/MarginWrapper';
import { Button } from 'components/FormComponents/Button';
import { Form } from 'components/FormComponents/Form';
import { TextInput } from 'components/FormComponents/TextInput';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { routes } from 'constants/routes';
import { blue, formGrey5 } from 'constants/styles';
import { useStore } from 'effector-react';
import { Formik } from 'formik';
import { initialValues, onSubmit, validationSchema } from 'pages/SignIn/PasswordReset/constants';
import React, { FC } from 'react';
import { loadingStores } from 'stores/loading';

const HighlightSpan: FC = ({ children }) => (
    <Span fontSize="16px" lineHeight="20px">
        {children}
    </Span>
);

export const PasswordReset = () => {
    const loading = useStore(loadingStores.loading);

    return (
        <AuthLayout>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ handleSubmit, isValid, dirty }) => (
                    <Column marginLeft="auto" marginRight="auto">
                        <Form onSubmit={handleSubmit}>
                            <TextInput name="email" type="email" />
                            <MarginWrapper marginBottom="32px" marginLeft="auto" marginTop="3px">
                                <InternalLink
                                    color={formGrey5}
                                    fontSize="16px"
                                    lineHeight="20px"
                                    to={routes.signIn.requestCode}
                                >
                                    Or <HighlightSpan>send security code</HighlightSpan>
                                </InternalLink>
                            </MarginWrapper>
                            <Button background={isValid && dirty ? blue : undefined} disabled={loading}>
                                {loading ? <Loader /> : 'SEND A PASSWORD RESET'}
                            </Button>
                        </Form>
                        <FormSignUpLink />
                    </Column>
                )}
            </Formik>
        </AuthLayout>
    );
};
