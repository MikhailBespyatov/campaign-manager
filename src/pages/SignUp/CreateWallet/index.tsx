import { Loader } from 'components/common/Loader';
import { Button } from 'components/FormComponents/Button';
import { Form } from 'components/FormComponents/Form';
import { TextInput } from 'components/FormComponents/TextInput';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { useStore } from 'effector-react';
import React, { MouseEvent, useState } from 'react';
import { loadingStores } from 'stores/loading';
import { requiredFieldMessage } from '../../../constants';

export const CreateWallet = () => {
    const loading = useStore(loadingStores.loading);

    const [values, setValues] = useState({
        wom: '',
        usd: '',
        creditCardNumber: '',
        expireDate: '',
        cvc: ''
    });
    const [errors, setErrors] = useState({
        wom: requiredFieldMessage,
        usd: requiredFieldMessage,
        creditCardNumber: requiredFieldMessage,
        expireDate: requiredFieldMessage,
        cvc: requiredFieldMessage
    });

    const onWomChange = (value: string) => {
        setValues({ ...values, wom: value });
        if (!value) setErrors({ ...errors, wom: requiredFieldMessage });
        else setErrors({ ...errors, wom: '' });
    };

    const onUsdChange = (value: string) => {
        setValues({ ...values, usd: value });
        if (!value) setErrors({ ...errors, usd: requiredFieldMessage });
        else setErrors({ ...errors, usd: '' });
    };

    const onCreditCardNumberChange = (value: string) => {
        setValues({ ...values, creditCardNumber: value });
        if (!value) setErrors({ ...errors, creditCardNumber: requiredFieldMessage });
        else setErrors({ ...errors, creditCardNumber: '' });
    };

    const onExpireDateChange = (value: string) => {
        setValues({ ...values, expireDate: value });
        if (!value) setErrors({ ...errors, expireDate: requiredFieldMessage });
        else setErrors({ ...errors, expireDate: '' });
    };

    const onCvcChange = (value: string) => {
        setValues({ ...values, cvc: value });
        if (!value) setErrors({ ...errors, cvc: requiredFieldMessage });
        else setErrors({ ...errors, cvc: '' });
    };

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // if (!Object.values(errors).filter(i => i !== '').length) userEffects.loadToken(values);
    };

    return (
        <AuthLayout>
            <Form subtitle="To execute campaigns, you need a positive WOM balance. You can purchase WOM now">
                <TextInput error={errors.wom} label="WOM" name="wom" type="text" value="" />
                <TextInput error={errors.usd} label="USD" name="password" value="" />
                <TextInput
                    error={errors.creditCardNumber}
                    label="Credit Card Number"
                    name="creditCardNumber"
                    type="text"
                    value=""
                />
                <TextInput error={errors.expireDate} label="Expire Date" name="expireDate" type="text" value="" />
                <TextInput error={errors.cvc} label="CVC" name="cvc" type="text" value="" />
                <Button disabled={loading}>{loading ? <Loader /> : 'Purchase now'}</Button>
            </Form>
        </AuthLayout>
    );
};
