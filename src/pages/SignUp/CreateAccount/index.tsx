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
import { initialValues, onSubmit, validationSchema } from 'pages/SignUp/CreateAccount/constants';
import React from 'react';
import { loadingStores } from 'stores/loading';
import { blue } from '../../../constants';

export const CreateAccount = () => {
    const loading = useStore(loadingStores.loading);

    return (
        <AuthLayout src={bitmapImg}>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ handleSubmit }) => (
                    <Form src={womImg} title="Create an account" onSubmit={handleSubmit}>
                        <TextInput name="companyName" placeholder="Company Name" />
                        <TextInput name="username" placeholder="Username" />
                        <TextInput name="email" placeholder="Email" type="email" />
                        <TextInput name="password" placeholder="Password" type="password" />
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
