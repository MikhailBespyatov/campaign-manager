import { Loader } from 'components/common/Loader';
import { Button } from 'components/FormComponents/Button';
import { Form } from 'components/FormComponents/Form';
import { TextInput } from 'components/FormComponents/TextInput';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { useStore } from 'effector-react';
import React, { MouseEvent, useState } from 'react';
import { loadingStores } from 'stores/loading';
import { invalidEmailMessage, requiredFieldMessage } from '../../../constants';

export const CreateAccount = () => {
    const loading = useStore(loadingStores.loading);

    const [values, setValues] = useState({
        companyName: '',
        username: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        companyName: requiredFieldMessage,
        username: requiredFieldMessage,
        email: requiredFieldMessage,
        password: requiredFieldMessage
    });

    const onCompanyNameChange = (value: string) => {
        setValues({ ...values, companyName: value });
        if (!value) setErrors({ ...errors, companyName: requiredFieldMessage });
        else setErrors({ ...errors, companyName: '' });
    };

    const onUsernameChange = (value: string) => {
        setValues({ ...values, username: value });
        if (!value) setErrors({ ...errors, username: requiredFieldMessage });
        else setErrors({ ...errors, username: '' });
    };

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
        // if (!Object.values(errors).filter(i => i !== '').length) console.log(values);
    };

    return (
        <AuthLayout>
            <Form subtitle="Create an account">
                <TextInput
                    error={errors.companyName}
                    label="Company Name"
                    name="companyName"
                    type="text"
                    onChange={onCompanyNameChange}
                />
                <TextInput
                    error={errors.username}
                    label="Username"
                    name="username"
                    type="text"
                    onChange={onUsernameChange}
                />
                <TextInput error={errors.email} label="Email" name="email" onChange={onEmailChange} />
                <TextInput error={errors.password} label="Password" name="password" onChange={onPasswordChange} />
                <Button disabled={loading} onClick={handleSubmit}>
                    {loading ? <Loader /> : 'Sign up and accept'}
                </Button>
            </Form>
        </AuthLayout>
    );
};
