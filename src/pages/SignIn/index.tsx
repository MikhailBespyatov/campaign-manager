import { Button } from 'components/FormComponents/Button';
import { Form } from 'components/FormComponents/Form';
import { Input } from 'components/FormComponents/Input';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { Link, LinkWrapper } from 'pages/SignIn/styles';
import React from 'react';
import { routes } from '../../constants';

export const SignIn = () => (
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
            <Input error="" label="Email" name="email" value="" />
            <Input error="" label="Password" name="password" value="" />
            <LinkWrapper>
                <Link to={routes.signIn}>Forgot password?</Link>
            </LinkWrapper>
            <Button onClick={() => {}}>Login</Button>
        </Form>
    </AuthLayout>
);
