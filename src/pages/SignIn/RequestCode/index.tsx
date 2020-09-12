import { Loader } from 'components/common/Loader';
import { Button } from 'components/FormComponents/Button';
import { Form } from 'components/FormComponents/Form';
import { TextInput } from 'components/FormComponents/TextInput';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { noop } from 'constants/global';
import { useStore } from 'effector-react';
import { Formik } from 'formik';
import { initialValues, validationSchema } from 'pages/SignIn/RequestCode/constants';
import React from 'react';
import { loadingStores } from 'stores/loading';

export const RequestCode = () => {
    const loading = useStore(loadingStores.loading);

    return (
        <AuthLayout>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={noop}>
                {({ handleSubmit }) => (
                    <Form subtitle="Request code" onSubmit={handleSubmit}>
                        <TextInput name="email" placeholder="Email" />
                        <TextInput name="password" placeholder="Password" type="password" />
                        <Button disabled={loading}>{loading ? <Loader /> : 'Login'}</Button>
                    </Form>
                )}
            </Formik>
        </AuthLayout>
    );
};
