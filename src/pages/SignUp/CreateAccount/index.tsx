import bitmapImg from 'assets/img/bitmap.png';
import womImg from 'assets/img/wom_logo.svg';
import { Loader } from 'components/common/Loader';
import { Span } from 'components/common/TextComponents/Span';
import { Button } from 'components/FormComponents/Button';
import { Form } from 'components/FormComponents/Form';
import { TextInput } from 'components/FormComponents/TextInput';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { useStore } from 'effector-react';
import { Formik } from 'formik';
import { validationSchema } from 'pages/SignUp/CreateAccount/constants';
import React from 'react';
import { loadingStores } from 'stores/loading';
import { blue, noop } from '../../../constants';

export const CreateAccount = () => {
    const loading = useStore(loadingStores.loading);

    return (
        <AuthLayout src={bitmapImg}>
            <Formik
                initialValues={{ email: '', password: '', companyName: '', username: '' }}
                validationSchema={validationSchema}
                onSubmit={noop}
            >
                {({ errors, handleChange, handleSubmit, touched, handleBlur, values }) => (
                    <Form src={womImg} title="Create an account" onSubmit={handleSubmit}>
                        <TextInput
                            error={errors.companyName}
                            label="Company Name"
                            name="companyName"
                            touched={touched.companyName}
                            value={values.companyName}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        <TextInput
                            error={errors.username}
                            label="Username"
                            name="username"
                            touched={touched.username}
                            value={values.username}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
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
                        <Button background={blue} disabled={loading}>
                            {loading ? <Loader /> : 'SIGN UP & ACCEPT'}
                        </Button>
                        <Span alignCenter color="#9EA1B3" fontSize="18px" fontWeight="500" lineHeight="22px">
                            By tapping "Sign Up & Accept", you acknowledge that you have read the Privacy Policy and
                            agree to the Terms of Service.
                        </Span>
                    </Form>
                )}
            </Formik>
        </AuthLayout>
    );
};
