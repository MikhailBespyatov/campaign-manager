import bitmapImg from 'assets/img/bitmap.png';
import womImg from 'assets/img/wom_logo.svg';
import { Loader } from 'components/common/Loader';
import { Span } from 'components/common/TextComponents/Span';
import { Button } from 'components/FormComponents/Button';
import { Form } from 'components/FormComponents/Form';
import { TextInput } from 'components/FormComponents/TextInput';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { blue } from 'constants/styles';
import { useStore } from 'effector-react';
import { Formik } from 'formik';
import { initialValues, onSubmit, validationSchema } from 'pages/SignUp/CreateAccount/constants';
import React from 'react';
import { loadingStores } from 'stores/loading';

export const CreateAccount = () => {
    const loading = useStore(loadingStores.loading);

    return (
        <AuthLayout src={bitmapImg}>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ handleSubmit }) => (
                    <Form src={womImg} title="Create an account" onSubmit={handleSubmit}>
                        <TextInput label="Company Name" name="companyName" placeholder="Enter your company name" />
                        <TextInput label="Full name" name="username" placeholder="Enter your account name" />
                        <TextInput name="email" type="email" />
                        <TextInput
                            label="Password"
                            name="password"
                            placeholder="Type your password"
                            type="password"
                            untouchedWarning="Password should be 8 or more characters and include a capital letter and a number"
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
