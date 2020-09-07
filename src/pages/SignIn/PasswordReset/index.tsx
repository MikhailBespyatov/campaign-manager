import { Loader } from 'components/common/Loader';
import { Button } from 'components/FormComponents/Button';
import { Form } from 'components/FormComponents/Form';
import { TextInput } from 'components/FormComponents/TextInput';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { useStore } from 'effector-react';
import { Formik } from 'formik';
import { validationSchema } from 'pages/SignIn/PasswordReset/constants';
import React from 'react';
import { loadingStores } from 'stores/loading';
import { noop } from '../../../constants';

export const PasswordReset = () => {
    const loading = useStore(loadingStores.loading);

    return (
        <AuthLayout>
            <Formik initialValues={{ code: '', password: '' }} validationSchema={validationSchema} onSubmit={noop}>
                {({ handleSubmit }) => (
                    <Form subtitle="Password Reset" onSubmit={handleSubmit}>
                        <TextInput name="code" placeholder="Security code" type="password" />
                        <TextInput name="password" placeholder="New password" type="password" />
                        <Button disabled={loading}>{loading ? <Loader /> : 'Reset'}</Button>
                    </Form>
                )}
            </Formik>
        </AuthLayout>
    );
};
