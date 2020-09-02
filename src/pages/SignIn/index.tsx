import { Loader } from 'components/common/Loader';
import { Button } from 'components/FormComponents/Button';
import { Form } from 'components/FormComponents/Form';
import { TextInput } from 'components/FormComponents/TextInput';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { useStore } from 'effector-react';
import { Link, LinkWrapper } from 'pages/SignIn/styles';
import React, { MouseEvent, useState } from 'react';
import { loadingStores } from 'stores/loading';
import { userEffects } from 'stores/user';
import { invalidEmailMessage, requiredFieldMessage, routes } from '../../constants';

export const SignIn = () => {
    const loading = useStore(loadingStores.loading);

    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        email: requiredFieldMessage,
        password: requiredFieldMessage
    });

    const onEmailChange = (value: string) => {
        setValues({ ...values, email: value });
        if (!value) setErrors({ ...errors, email: requiredFieldMessage });
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) setErrors({ ...errors, email: invalidEmailMessage });
        else setErrors({ ...errors, email: '' });
    };

    const onPasswordChange = (value: string) => {
        setValues({ ...values, password: value });
        if (!value) setErrors({ ...errors, password: requiredFieldMessage });
        else setErrors({ ...errors, password: '' });
    };

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!Object.values(errors).filter(i => i !== '').length) userEffects.loadToken(values);
    };

    return (
        <AuthLayout>
            <Form>
                <TextInput error={errors.email} label="Email" name="email" onChange={onEmailChange} />
                <TextInput error={errors.password} label="Password" name="password" onChange={onPasswordChange} />
                <LinkWrapper>
                    <Link to={routes.signIn.requestCode}>Forgot password?</Link>
                </LinkWrapper>
                <Button disabled={loading} onClick={handleSubmit}>
                    {loading ? <Loader /> : 'Login'}
                </Button>
            </Form>
        </AuthLayout>
    );
};
