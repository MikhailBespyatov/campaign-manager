import { Loader } from 'components/common/Loader';
import { Button } from 'components/FormComponents/Button';
import { Form } from 'components/FormComponents/Form';
import { TextInput } from 'components/FormComponents/TextInput';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { useStore } from 'effector-react';
import { Formik } from 'formik';
import { validationSchema } from 'pages/SignIn/RequestCode/constants';
import React from 'react';
import { loadingStores } from 'stores/loading';
import { noop } from '../../../constants';

export const RequestCode = () => {
    const loading = useStore(loadingStores.loading);

    return (
        <AuthLayout>
            <Formik initialValues={{ email: '', password: '' }} validationSchema={validationSchema} onSubmit={noop}>
                {({ errors, handleChange, handleSubmit, touched, handleBlur, values }) => (
                    <Form subtitle="Request code" onSubmit={handleSubmit}>
                        <TextInput
                            error={errors.email}
                            label="Email"
                            name="email"
                            touched={touched.email}
                            value={values.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        <TextInput
                            error={errors.password}
                            label="Password"
                            name="password"
                            touched={touched.password}
                            value={values.password}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        <Button disabled={loading}>{loading ? <Loader /> : 'Login'}</Button>
                    </Form>
                )}
            </Formik>
        </AuthLayout>
    );
};
