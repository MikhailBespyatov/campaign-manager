import { FormSignUpLink } from 'components/common/links/FormSignUpLink';
import { Loader } from 'components/common/Loader';
import { Button } from 'components/FormComponents/buttons/Button';
import { Form } from 'components/FormComponents/forms/Form';
import { TextInput } from 'components/FormComponents/inputs/TextInput';
import { Column } from 'components/grid/wrappers/FlexWrapper';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { blue } from 'constants/styles';
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
                {({ handleSubmit, isValid, dirty }) => (
                    <Column marginLeft="auto" marginRight="auto">
                        <Form
                            subtitle="Enter the company name you used to create the account"
                            title="Login"
                            onSubmit={handleSubmit}
                        >
                            <TextInput label="Company name" name="companyName" placeholder="Enter your company name" />
                            <Button background={isValid && dirty ? blue : undefined} disabled={loading}>
                                {loading ? <Loader /> : 'CONTINUE'}
                            </Button>
                        </Form>
                        <FormSignUpLink />
                    </Column>
                )}
            </Formik>
        </AuthLayout>
    );
};
