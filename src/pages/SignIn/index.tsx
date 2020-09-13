import { Loader } from 'components/common/Loader';
import { InternalLink } from 'components/common/TextComponents/InternalLink';
import { Column } from 'components/common/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/common/wrappers/MarginWrapper';
import { Button } from 'components/FormComponents/Button';
import { Form } from 'components/FormComponents/Form';
import { TextInput } from 'components/FormComponents/TextInput';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { routes } from 'constants/routes';
import { blue, white } from 'constants/styles';
import { useStore } from 'effector-react';
import { Formik } from 'formik';
import { initialValues, onSubmit, validationSchema } from 'pages/SignIn/constants';
import React from 'react';
import { loadingStores } from 'stores/loading';

export const SignIn = () => {
    const loading = useStore(loadingStores.loading);

    return (
        <AuthLayout>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ handleSubmit, errors }) => (
                    <Column marginLeft="auto" marginRight="auto">
                        <Form
                            subtitle="Enter the company name you used to create the account"
                            title="Login"
                            onSubmit={handleSubmit}
                        >
                            <TextInput label="Company name" name="companyName" placeholder="Enter your company name" />
                            <Button background={!Object.values(errors).length ? blue : undefined} disabled={loading}>
                                {loading ? <Loader /> : 'LOGIN'}
                            </Button>
                        </Form>
                        <MarginWrapper marginLeft="auto" marginRight="auto" marginTop="20px">
                            <InternalLink
                                color={white}
                                fontSize="18px"
                                fontWeight="500"
                                lineHeight="22px"
                                to={routes.signUp.index}
                            >
                                New here ? Create an Account now!
                            </InternalLink>
                        </MarginWrapper>
                    </Column>
                )}
            </Formik>
        </AuthLayout>
    );
};
