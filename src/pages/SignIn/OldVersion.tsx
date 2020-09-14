import { Loader } from 'components/common/Loader';
import { Button } from 'components/FormComponents/Button';
import { Form } from 'components/FormComponents/Form';
import { TextInput } from 'components/FormComponents/TextInput';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { routes } from 'constants/routes';
import { useStore } from 'effector-react';
import { Formik } from 'formik';
import { initialValues, onSubmit, validationSchema } from 'pages/SignIn/constants';
import { Link, LinkWrapper } from 'pages/SignIn/styles';
import React from 'react';
import { loadingStores } from 'stores/loading';

export const OldVersion = () => {
    const loading = useStore(loadingStores.loading);

    // const [values, setValues] = useState({
    //     email: '',
    //     password: ''
    // });
    // const [errors, setErrors] = useState({
    //     email: requiredFieldMessage,
    //     password: requiredFieldMessage
    // });

    // const onEmailChange = (value: string) => {
    //     setValues({ ...values, email: value });
    //     if (!value) setErrors({ ...errors, email: requiredFieldMessage });
    //     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) setErrors({ ...errors, email: invalidEmailMessage });
    //     else setErrors({ ...errors, email: '' });
    // };

    // const onPasswordChange = (value: string) => {
    //     setValues({ ...values, password: value });
    //     if (!value) setErrors({ ...errors, password: requiredFieldMessage });
    //     else setErrors({ ...errors, password: '' });
    // };

    // const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault();
    //     if (!Object.values(errors).filter(i => i !== '').length) userEffects.loadToken(values);
    // };

    return (
        <AuthLayout>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ handleSubmit }) => (
                    // {({ handleSubmit, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <TextInput name="email" placeholder="Email" type="email" />
                        <TextInput name="password" placeholder="Password" type="password" />
                        <LinkWrapper>
                            <Link to={routes.signIn.requestCode}>Forgot password?</Link>
                        </LinkWrapper>
                        {/* <Button disabled={isSubmitting}>{isSubmitting ? <Loader /> : 'Login'}</Button> */}
                        <Button disabled={loading}>{loading ? <Loader /> : 'Login'}</Button>
                    </Form>
                )}
            </Formik>
        </AuthLayout>
    );
};
