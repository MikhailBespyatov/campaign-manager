import { Loader } from 'components/common/Loader';
import { Button } from 'components/FormComponents/Button';
import { Form } from 'components/FormComponents/Form';
import { TextInput } from 'components/FormComponents/TextInput';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { useStore } from 'effector-react';
import React, { MouseEvent, useState } from 'react';
import { loadingStores } from 'stores/loading';
import { requiredFieldMessage } from '../../../constants';

export const PasswordReset = () => {
    const loading = useStore(loadingStores.loading);

    const [values, setValues] = useState({
        code: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        code: requiredFieldMessage,
        password: requiredFieldMessage
    });

    const onEmailChange = (value: string) => {
        setValues({ ...values, code: value });
        if (!value) setErrors({ ...errors, code: requiredFieldMessage });
        else setErrors({ ...errors, code: '' });
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
            <Form subtitle="Password reset">
                <TextInput error={errors.code} label="Security code" name="code" type="text" value="" />
                <TextInput error={errors.password} label="New password" name="password" value="" />
                <Button disabled={loading}>{loading ? <Loader /> : 'Set'}</Button>
            </Form>
        </AuthLayout>
    );
};
