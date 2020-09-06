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
                {({ errors, handleChange, handleSubmit, touched, handleBlur, values }) => (
                    <Form subtitle="Password Reset" onSubmit={handleSubmit}>
                        <TextInput
                            error={errors.code}
                            label="Security code"
                            name="code"
                            touched={touched.code}
                            value={values.code}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        <TextInput
                            error={errors.password}
                            label="New password"
                            name="password"
                            touched={touched.password}
                            value={values.password}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        <Button disabled={loading}>{loading ? <Loader /> : 'Reset'}</Button>
                    </Form>
                )}
            </Formik>
        </AuthLayout>
    );
};
