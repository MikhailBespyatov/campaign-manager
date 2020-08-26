import { Button } from 'components/FormComponents/Button';
import { Form } from 'components/FormComponents/Form';
import { Input } from 'components/FormComponents/Input';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { Link, LinkWrapper } from 'pages/SignIn/styles';
import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { invalidEmailMessage, requiredFieldMessage, routes } from '../../constants';

export const SignIn = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        email: requiredFieldMessage,
        password: requiredFieldMessage
    });

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setValues({ ...values, email: value });
        if (!value) setErrors({ ...errors, email: requiredFieldMessage });
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) setErrors({ ...errors, email: invalidEmailMessage });
        else setErrors({ ...errors, email: '' });
    };

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setValues({ ...values, password: value });
        if (!value) setErrors({ ...errors, password: requiredFieldMessage });
        else setErrors({ ...errors, password: '' });
    };

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        //if (!Object.values(errors).filter(i => i !== '').length) console.log('submitted data');
    };

    return (
        // const email = useRef<HTMLInputElement>(null);
        // const password = useRef<HTMLInputElement>(null);

        // useEffect(() => {
        //     email?.current?.focus();
        // }, []);

        // const keyDown: ((e: KeyboardEvent<HTMLInputElement>) => void) | undefined = e => {
        //     if (e.key === 'Enter') {
        //         e.preventDefault();
        //         password?.current?.focus();
        //     }
        // };

        <AuthLayout>
            <Form>
                <Input error={errors.email} label="Email" name="email" value={values.email} onChange={onEmailChange} />
                <Input
                    error={errors.password}
                    label="Password"
                    name="password"
                    value={values.password}
                    onChange={onPasswordChange}
                />
                <LinkWrapper>
                    <Link to={routes.signIn}>Forgot password?</Link>
                </LinkWrapper>
                <Button onClick={handleSubmit}>Login</Button>
            </Form>
        </AuthLayout>
    );
};
